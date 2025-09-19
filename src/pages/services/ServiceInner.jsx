import { Carousel as AntCarousel } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { SebedimContext } from "../../utils/Context";
import {
  useGetAllServicesQuery,
  useGetServiceQuery,
} from "../../utils/apiSlice/services";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import VideoPlayer from "../../components/videPlayer/VideoPlayer";
import { BASE_URL } from "../../utils/Axios";

const dbName = "serviceDB";
const storeName = "services";

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

const saveServicesToDB = async (services) => {
  const db = await openDB();
  const tx = db.transaction(storeName, "readwrite");
  const store = tx.objectStore(storeName);
  services.forEach((service) => store.put(service));
  await tx.complete;
};

const getServicesFromDB = async (id = null) =>
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

const ServiceInner = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const serviceId = searchParams.get("id");
  const navigate = useNavigate();
  const { dil } = useContext(SebedimContext);

  const [service, setService] = useState(null);
  const [otherServices, setOtherServices] = useState([]);

  const { data: serviceApi } = useGetServiceQuery(serviceId);
  const { data: allServicesApi } = useGetAllServicesQuery();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [serviceId]);

  useEffect(() => {
    const fetchData = async () => {
      // Main service
      if (serviceApi) {
        setService(serviceApi);
        await saveServicesToDB([serviceApi]);
      } else {
        const cached = await getServicesFromDB(serviceId);
        setService(cached);
      }

      // Other services
      if (allServicesApi?.length) {
        const filtered = allServicesApi.filter(
          (s) => s.id !== Number(serviceId)
        );
        setOtherServices(filtered);
        await saveServicesToDB(allServicesApi);
      } else {
        const cachedAll = await getServicesFromDB();
        const filtered = cachedAll.filter((s) => s.id !== Number(serviceId));
        setOtherServices(filtered);
      }
    };
    fetchData();
  }, [serviceApi, allServicesApi, serviceId]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  if (!service) {
    return (
      <div className="w-full flex items-center justify-center min-h-[50vh] text-white">
        Loading...
      </div>
    );
  }

  const hasImages = service.Imgs && service.Imgs.length > 0;
  const hasVideos = service.Videos && service.Videos.length > 0;
  const videos =
    service.Videos?.map(
      (vid) => `${BASE_URL}uploads/service/${vid.src.split("\\").pop()}`
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
          {service.name_en || service.name_tm || "No Title"}
        </h1>

        <div className="flex items-center justify-center gap-6">
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
            {new Date(service.date).toLocaleDateString()}
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
                {service.Imgs.map((img, i) => (
                  <div
                    key={i}
                    className=" md:max-h-[80vh] rounded-[20px] h-full w-full relative"
                  >
                    <img
                      src={`${BASE_URL}uploads/service/${img.src
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
              className="w-full rounded-2xl overflow-hidden"
            >
              <VideoPlayer src={videos[0]} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>

      {/* other services */}
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
          className="grid xs:grid-cols-2 md:grid-cols-taslama-cards xs:gap-3 md:gap-8 w-full"
          variants={containerVariants}
        >
          {otherServices.slice(0, 6).map((srv) => (
            <motion.div
              key={srv.id}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="w-full md:h-full xs:h-fit md:hover:bg-[#F3F3F3] rounded-[20px] cursor-pointer md:px-[14px] xs:px-0 pt-[10px] xs:pb-0 md:pb-[35px] dark:hover:bg-[#313133] transition-all duration-200"
            >
              <ServiceCard service={srv} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceInner;
