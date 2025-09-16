import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import NewsCard from "../../components/newsCard/NewsCard";
import { SebedimContext } from "../../utils/Context";
import { useContext } from "react";
import { useGetAllNewsQuery } from "../../utils/apiSlice/news";

const News = () => {
  const location = useLocation();
  const { dil } = useContext(SebedimContext);

  // Fetch news from API
  const { data: news = [], isLoading, isError } = useGetAllNewsQuery({});

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center py-10">
        <p className="text-gray-500 dark:text-gray-300">Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full flex items-center justify-center py-10">
        <p className="text-red-500">Failed to load news.</p>
      </div>
    );
  }

  return (
    <motion.div
      key={location.pathname}
      className="w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Page Header */}
      <motion.div
        className="w-full flex items-center justify-start mb-[18px]"
        variants={itemVariants}
      >
        <h1 className="text-[24px] font-[semibold] dark:text-white">
          {dil === "tm" ? "Täzelikler" : dil === "ru" ? "Новости" : "News"}
        </h1>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="w-full grid xs:grid-cols-2 md:grid-cols-news-cards xs:gap-3 md:gap-5"
        variants={containerVariants}
      >
        <AnimatePresence>
          {news.map((item, i) => (
            <motion.div
              key={item.id || i}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <NewsCard news={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default News;
