import { Carousel as AntCarousel } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { SebedimContext } from "../../utils/Context";
import {
  useGetAllWorksQuery,
  useGetWorkQuery,
} from "../../utils/apiSlice/works";
import WorkCard from "../../components/workCard/WorkCard";
import VideoPlayer from "../../components/videPlayer/VideoPlayer";
import { BASE_URL } from "../../utils/Axios";

// IndexedDB helpers
const dbName = "workDB";
const storeName = "works";

const openDB = () =>
  new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: "id" });
      }
    };
    request.onsuccess = (e) => resolve(e.target.result);
    request.onerror = (e) => reject(e.target.error);
  });

const saveWorksToDB = async (works) => {
  const db = await openDB();
  const tx = db.transaction(storeName, "readwrite");
  const store = tx.objectStore(storeName);
  works.forEach((work) => store.put(work));
  await tx.complete;
};

const getWorksFromDB = async (id = null) =>
  new Promise(async (resolve) => {
    const db = await openDB();
    const tx = db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    if (id) {
      const request = store.get(id);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => resolve(null);
    } else {
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => resolve([]);
    }
  });

const WorkInner = () => {
  const [searchParams] = useSearchParams();
  const workId = searchParams.get("id");
  const navigate = useNavigate();
  const { dil } = useContext(SebedimContext);

  const [work, setWork] = useState(null);
  const [otherWorks, setOtherWorks] = useState([]);

  // Fetch main work
  const { data: workApi } = useGetWorkQuery(workId);
  // Fetch all works
  const { data: allWorksApi } = useGetAllWorksQuery();

  useEffect(() => {
    const fetchData = async () => {
      // Main work
      if (workApi) {
        setWork(workApi);
        await saveWorksToDB([workApi]);
      } else {
        const cached = await getWorksFromDB(workId);
        setWork(cached);
      }

      // Other works excluding current
      if (allWorksApi?.length) {
        const filtered = allWorksApi.filter((w) => w.id !== Number(workId));
        setOtherWorks(filtered);
        await saveWorksToDB(allWorksApi);
      } else {
        const cachedAll = await getWorksFromDB();
        const filtered = cachedAll.filter((w) => w.id !== Number(workId));
        setOtherWorks(filtered);
      }
    };
    fetchData();
  }, [workApi, allWorksApi, workId]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [workId]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  if (!work) {
    return (
      <div className="w-full flex items-center justify-center min-h-[50vh] text-white">
        Loading...
      </div>
    );
  }

  const hasImages = work.Imgs && work.Imgs.length > 0;
  const hasVideos = work.Videos && work.Videos.length > 0;
  const videos =
    work.Videos?.map(
      (vid) => `${BASE_URL}uploads/work/${vid.src.split("\\").pop()}`
    ) || [];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      className="w-full"
    >
      {/* back button */}
      <motion.div
        className="w-full flex items-center justify-start xs:mb-5 md:mb-[38px]"
        variants={itemVariants}
      >
        <RiArrowLeftSLine
          onClick={() => navigate(-1)}
          className="text-[24px] dark:text-white cursor-pointer"
        />
      </motion.div>

      {/* header info */}
      <motion.div
        className="w-full md:flex-row xs:flex-col flex xs:mb-5 md:mb-7 xs:items-baseline md:items-center justify-start xs:gap-3 md:gap-6"
        variants={itemVariants}
      >
        <h1 className="xs:text-[25px] md:text-[32px] dark:text-white font-[semibold]">
          {work.name_en || work.name_tm || "No Title"}
        </h1>

        <div className="flex items-center justify-center gap-6 ">
          <div className="xs:py-[6px] md:py-[13px] xs:px-5 md:px-[30.5px] rounded-[6px] xs:text-[16px] md:text-[18px] font-[regular] bg-border">
            <p>
              {hasImages
                ? dil === "tm"
                  ? "Surat"
                  : dil === "ru"
                  ? "Фото"
                  : "Photo"
                : dil === "tm"
                ? "Wideo"
                : dil === "ru"
                ? "Видео"
                : "Video"}
            </p>
          </div>

          <p className="text-[18px] font-[regular] dark:text-white">
            {new Date(work.date).toLocaleDateString()}
          </p>
        </div>
      </motion.div>

      {/* main image or video */}
      <motion.div
        className="w-full xs:mb-9 md:mb-[72px]"
        variants={itemVariants}
      >
        <AnimatePresence mode="wait">
          {hasImages ? (
            <motion.div
              key="photoCarousel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <AntCarousel
                arrows
                infinite
                autoplay
                speed={1000}
                autoplaySpeed={4000}
              >
                {work.Imgs.map((img, i) => (
                  <div
                    key={i}
                    className=" md:max-h-[80vh] h-full w-full relative"
                  >
                    <img
                      src={`${BASE_URL}uploads/work/${img.src
                        .split("\\")
                        .pop()}`}
                      alt={`carousel-${i}`}
                      className="w-full xs:min-h-[300px] rounded-[20px] md:min-h-full h-full object-cover"
                    />
                  </div>
                ))}
              </AntCarousel>
            </motion.div>
          ) : hasVideos ? (
            <motion.div
              key="videoPlayer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="w-full xs:max-h-[60vh] md:max-h-full rounded-2xl overflow-hidden"
            >
              <VideoPlayer src={videos[0]} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>

      {/* other works grid using WorkCard */}
      <motion.div
        className="w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="xs:mb-5 md:mb-[42px] dark:text-white xs:text-[20px] md:text-[24px] font-[semibold]">
          {hasImages
            ? dil === "tm"
              ? "Beýleki suratlar"
              : dil === "ru"
              ? "Другие фото"
              : "Other Photos"
            : dil === "tm"
            ? "Beýleki wideolar"
            : dil === "ru"
            ? "Другие видео"
            : "Other Videos"}
        </h1>

        <motion.div
          className="grid xs:grid-cols-2 md:grid-cols-taslama-cards xs:gap-3 md:gap-[34px] w-full"
          variants={containerVariants}
        >
          {otherWorks.slice(0, 6).map((w) => (
            <motion.div
              key={w.id}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="w-full md:h-full xs:h-[250px] md:hover:bg-[#F3F3F3] rounded-[20px] cursor-pointer md:px-[14px] xs:px-0 pt-[10px] xs:pb-0 md:pb-[35px] dark:hover:bg-[#313133] transition-all duration-200"
            >
              <WorkCard service={w} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WorkInner;
