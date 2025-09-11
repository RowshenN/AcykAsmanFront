import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllBannersQuery } from "../../utils/apiSlice/banner";
import { SebedimContext } from "../../utils/Context";

const HomeBanner = () => {
  const {
    data: banners = [],
    isLoading,
    isError,
  } = useGetAllBannersQuery({
    order: 1,
    deleted: false,
  });

  const [index, setIndex] = useState(0);

  const { dil } = useContext(SebedimContext);

  useEffect(() => {
    if (!banners.length) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(id);
  }, [banners]);

  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center min-h-[85vh] text-white">
        <p>Loading banners...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full flex items-center justify-center min-h-[85vh] text-red-500">
        <p>Failed to load banners. Please try again.</p>
      </div>
    );
  }

  if (!banners.length) {
    return (
      <div className="w-full flex items-center justify-center min-h-[85vh] text-white">
        <p>No banners available.</p>
      </div>
    );
  }

  return (
    <div className="w-full xs:mb-10 md:mb-84 relative xs:min-h-[85vh] md:min-h-[90vh] rounded-[28px] h-full overflow-hidden">
      {/* Background carousel */}
      <motion.div
        className="flex h-full w-full"
        animate={{ x: `-${index * 100}%` }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {banners.map((banner, i) => (
          <img
            key={banner.id || i}
            src={banner?.img}
            alt={`slide-${i}`}
            className="w-full xs:min-h-[85vh] md:min-h-[90vh] h-full object-cover rounded-[28px] flex-shrink-0"
          />
        ))}
      </motion.div>

      {/* Overlay text & button */}
      <motion.div
        key={index}
        className="absolute text-white left-[3%] xs:bottom-[3%] md:bottom-[7%] xs:w-[80%] md:w-[65%] lg:w-[45%]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="xs:text-[30px] md:text-[40px] lg:text-[60px] font-[bold] xs:mb-5 md:mb-4 leading-tight">
          {banners[index]?.title_tm || banners[index]?.title_en || "No Title"}
        </h1>
        <div>
          <Link
            to={banners[index]?.link || "#"}
            className="border hover:bg-white/40 transition-all duration-200 border-white rounded-[28px] xs:py-[11px] md:py-[14px] xs:px-4  md:px-7"
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
