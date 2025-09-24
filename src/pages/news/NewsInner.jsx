import { Carousel as AntCarousel } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import NewsCard from "../../components/newsCard/NewsCard";
import { SebedimContext } from "../../utils/Context";
import { useGetNewsQuery, useGetAllNewsQuery } from "../../utils/apiSlice/news";
import VideoPlayer from "../../components/videPlayer/VideoPlayer";
import { BASE_URL } from "../../utils/Axios";

const NewsInner = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { dil } = useContext(SebedimContext);

  const { data: newsItem, isLoading, isError } = useGetNewsQuery(id);
  const { data: allNews = [] } = useGetAllNewsQuery();
  const otherNews = newsItem
    ? allNews.filter((item) => item.id !== newsItem.id)
    : [];

  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (newsItem) {
      setImages(
        newsItem.Imgs?.map(
          (img) => `${BASE_URL}${img.src.split("\\").pop()}`
        ) || []
      );
      setVideos(
        newsItem.Videos?.map(
          (vid) => `${BASE_URL}${vid.src.split("\\").pop()}`
        ) || []
      );
    }
  }, [newsItem]);

  const hasImages = images.length > 0;
  const hasVideos = videos.length > 0;

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

  if (isLoading)
    return (
      <div className="w-full flex items-center justify-center min-h-[85vh] text-white">
        Loading...
      </div>
    );
  if (isError || !newsItem)
    return (
      <div className="w-full flex items-center justify-center min-h-[85vh] text-red-500">
        Failed to load news.
      </div>
    );

  const title =
    dil === "tm"
      ? newsItem.name_tm
      : dil === "ru"
      ? newsItem.name_ru
      : newsItem.name_en;
  const text =
    dil === "tm"
      ? newsItem.text_tm
      : dil === "ru"
      ? newsItem.text_ru
      : newsItem.text_en;
  const date = newsItem.date
    ? new Date(newsItem.date).toLocaleDateString()
    : "";

  return (
    <motion.div
      className="w-full"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
    >
      {/* Back button */}
      <motion.div
        className="w-full flex items-center justify-start xs:mb-5 md:mb-[38px]"
        variants={itemVariants}
      >
        <RiArrowLeftSLine
          onClick={() => navigate(-1)}
          className="text-[24px] dark:text-white cursor-pointer"
        />
      </motion.div>

      {/* Main media */}
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
                {images.map((img, i) => (
                  <div
                    key={i}
                    className=" md:max-h-[80vh] h-full w-full relative"
                  >
                    <img
                      src={img}
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
              className="w-full xs:max-h-[60vh] md:max-h-full rounded-2xl overflow-hidden relative"
            >
              <VideoPlayer src={videos[0]} />
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/images/carouselImg.png"
                alt="placeholder"
                className="w-full xs:min-h-[300px] md:min-h-full h-full object-cover rounded-[20px]"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Header */}
      <motion.div
        className="w-full md:flex-row xs:flex-col flex xs:mb-5 md:mb-5 xs:items-baseline md:items-center justify-start xs:gap-3 md:gap-6"
        variants={itemVariants}
      >
        <h1 className="xs:text-[25px] md:text-[32px] dark:text-white font-[semibold]">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-6">
          <p className="text-[18px] font-[regular] dark:text-white">{date}</p>
        </div>
      </motion.div>

      {/* News text */}
      <motion.div
        className="w-full xs:mb-3 md:mb-7 xs:text-[16px] md:text-[18px] font-[regular] dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {text}
      </motion.div>

      {/* Other news */}
      <motion.div className="w-full" variants={containerVariants}>
        <motion.h1
          className="text-left mb-7 text-[24px] dark:text-white font-[semibold]"
          variants={itemVariants}
        >
          Beýleki tazelikler
        </motion.h1>
        <motion.div
          className="w-full grid xs:grid-cols-2 md:grid-cols-news-cards xs:gap-3 md:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {otherNews.slice(0, 6).map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <NewsCard news={item} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NewsInner;
