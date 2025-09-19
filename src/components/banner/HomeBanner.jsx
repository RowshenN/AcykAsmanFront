import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllBannersQuery } from "../../utils/apiSlice/banner";
import { SebedimContext } from "../../utils/Context";
import { BASE_URL } from "../../utils/Axios";

// Helper functions for IndexedDB
const dbName = "bannerDB";
const storeName = "banners";

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

const saveBannersToDB = async (banners) => {
  const db = await openDB();
  const tx = db.transaction(storeName, "readwrite");
  const store = tx.objectStore(storeName);
  banners.forEach((banner) => store.put(banner));
  await tx.complete;
};

const getBannersFromDB = async () =>
  new Promise(async (resolve) => {
    const db = await openDB();
    const tx = db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => resolve([]);
  });

const HomeBanner = () => {
  const { dil } = useContext(SebedimContext);

  const [banners, setBanners] = useState([]);
  const [index, setIndex] = useState(0);

  // Polling every 10 seconds
  const {
    data: bannersApi = [],
    isLoading,
    isError,
    refetch,
  } = useGetAllBannersQuery(
    { order: 1, deleted: false },
    { pollingInterval: 10000 }
  );

  useEffect(() => {
    const syncBanners = async () => {
      if (bannersApi.length) {
        setBanners(bannersApi);
        await saveBannersToDB(bannersApi);
      } else {
        const cached = await getBannersFromDB();
        setBanners(cached || []);
      }
    };
    syncBanners();
  }, [bannersApi]);

  // Carousel interval
  useEffect(() => {
    if (!banners.length) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(id);
  }, [banners]);

  if (isLoading && banners.length === 0) {
    return (
      <div className="w-full flex items-center justify-center min-h-[85vh] text-white">
        <p>Loading banners...</p>
      </div>
    );
  }

  if ((isError || banners.length === 0) && banners.length === 0) {
    return (
      <div className="w-full flex items-center justify-center min-h-[85vh] text-red-500">
        <p>Failed to load banners or no cached banners.</p>
      </div>
    );
  }

  return (
    <div className="w-full xs:mb-10 md:mb-84 relative xs:min-h-[70vh] md:min-h-[90vh] rounded-[28px] h-full overflow-hidden">
      {/* Background carousel */}
      <motion.div
        className="flex relative h-full w-full"
        animate={{ x: `-${index * 100}%` }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {banners.map((banner, i) => (
          <div
            key={banner.id || i}
            className="relative w-full xs:h-[70vh] md:h-[90vh] flex-shrink-0 rounded-[28px] overflow-hidden"
          >
            <img
              src={`${BASE_URL}uploads/banner/${banner?.img.split("\\").pop()}`}
              alt={`slide-${i}`}
              className="w-full xs:h-[70vh] md:h-[90vh] object-cover"
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </motion.div>
      {/* Overlay text & button */}
      <motion.div
        key={index}
        className="absolute text-white left-[3%] xs:bottom-[5%] md:bottom-[7%] xs:w-[80%] md:w-[65%] lg:w-[45%]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="xs:text-[30px] md:text-[40px] lg:text-[60px] font-[medium] xs:mb-5 md:mb-4 leading-tight">
          {dil === "tm"
            ? banners[index]?.title_tm
            : dil === "ru"
            ? banners[index]?.title_ru
            : banners[index]?.title_en}
        </h1>
        <div>
          <Link
            to={banners[index]?.link}
            className="border hover:bg-white/40 transition-all duration-200 border-white rounded-[28px] xs:py-[11px] md:py-[14px] xs:px-4 md:px-7"
          >
            {dil === "tm"
              ? "Giňişleýin"
              : dil === "ru"
              ? "Подробно"
              : "Detailed"}
          </Link>
        </div>
      </motion.div>

      {/* numbers */}
      <div className="flex w-fit top-[25%] right-[7%] absolute text-white flex-col items-center justify-center gap-5">
        {banners.map((_, i) => (
          <motion.div
            key={i}
            className="w-full cursor-pointer flex items-center justify-end gap-2"
            onClick={() => setIndex(i)}
          >
            <div
              className={`h-[1px] transition-all duration-500 ${
                index === i ? "w-[54px] bg-white" : "w-[20px] bg-white/40"
              }`}
            ></div>
            <p
              className={`transition-colors duration-300 ${
                index === i ? "text-white" : "text-white/60"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
