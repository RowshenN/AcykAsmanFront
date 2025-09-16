import { Carousel } from "antd";
import { motion } from "framer-motion";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import NewsCard from "../../components/newsCard/NewsCard";
import { SebedimContext } from "../../utils/Context";
import { useGetNewsQuery, useGetAllNewsQuery } from "../../utils/apiSlice/news";
import { BASE_URL } from "../../utils/Axios";

const NewsInner = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { dil } = useContext(SebedimContext);

  const { data: newsItem, isLoading, isError } = useGetNewsQuery(id);
  const [images, setImages] = useState([]);
  const { data: allNews = [] } = useGetAllNewsQuery();
  const otherNews = newsItem
    ? allNews.filter((item) => item.id !== newsItem.id)
    : [];

  useEffect(() => {
    if (newsItem?.Imgs?.length > 0) {
      setImages(
        newsItem.Imgs.map(
          (img) => `${BASE_URL}uploads/news/${img.src.split("\\").pop()}`
        )
      );
    }
  }, [newsItem]);

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

  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center min-h-[85vh] text-white">
        Loading...
      </div>
    );
  }

  if (isError || !newsItem) {
    return (
      <div className="w-full flex items-center justify-center min-h-[85vh] text-red-500">
        Failed to load news.
      </div>
    );
  }

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
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="w-full flex items-center justify-start"
        variants={itemVariants}
      >
        <RiArrowLeftSLine
          onClick={() => navigate(-1)}
          className="text-[24px] dark:text-white cursor-pointer mb-[38px]"
        />
      </motion.div>

      {/* carousel */}
      <motion.div className="w-full mb-[48px]" variants={itemVariants}>
        <Carousel arrows infinite autoplay speed={1000} autoplaySpeed={4000}>
          {images.length > 0 ? (
            images.map((img, i) => (
              <div key={i} className="max-h-[80vh] h-full w-full">
                <img
                  src={img}
                  alt={`news-${i}`}
                  className="w-full xs:min-h-[300px] md:min-h-full h-full object-cover"
                />
              </div>
            ))
          ) : (
            <div className="max-h-[80vh] h-full w-full">
              <img
                src={"/images/carouselImg.png"}
                alt="news-placeholder"
                className="w-full xs:min-h-[300px] md:min-h-full h-full object-cover"
              />
            </div>
          )}
        </Carousel>
      </motion.div>

      {/* header */}
      <motion.div
        className="w-full xs:mb-4 md:mb-8 flex items-center justify-start xs:gap-3 md:gap-6"
        variants={itemVariants}
      >
        <h1 className="xs:text-[25px] md:text-[32px] font-[semibold] dark:text-white">
          {title}
        </h1>
        <div className="xs:py-[6px] md:py-[13px] xs:px-5 md:px-[30.5px] rounded-[6px] xs:text-[16px] md:text-[18px] font-[regular] bg-border">
          <p>{date}</p>
        </div>
      </motion.div>

      {/* news text */}
      <motion.div
        className="w-full xs:mb-3 md:mb-7 xs:text-[16px] md:text-[18px] font-[regular] dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {text}
      </motion.div>

      {/* other info */}
      <motion.div
        className="w-full xs:text-[16px] md: text-[18px] dark:text-white font-[regular] xs:mb-10 md:mb-[116px]"
        variants={itemVariants}
      >
        <ul>
          <li>общая площадь будущего курорта составит 577 гектаров ...</li>
          <li>общая площадь будущего курорта составит 577 гектаров ...</li>
        </ul>
      </motion.div>

      {/* other news */}
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
          {otherNews.slice(0, 3).map((item, i) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <NewsCard news={item} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NewsInner;
