import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { BsDownload } from "react-icons/bs";

import { SebedimContext } from "../../utils/Context";

const DownloadDoneWork = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out",
    });
  }, []);

  const { dil } = useContext(SebedimContext);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="xs:mb-10 md:mb-[138px] w-full border border-border dark:border-borderDark rounded-[28px] bg-[#F8F8F8] dark:bg-[#313133] flex items-center justify-center px-3 xs:py-4 md:py-[25px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      data-aos="fade-up"
    >
      <motion.div
        className="w-fit flex items-center justify-center flex-col gap-4"
        variants={itemVariants}
      >
        <motion.h1
          className="xs:text-[22px] md:text-[27px] xs:text-center md:text-left lg:text-[32px] font-[bold] dark:text-white"
          variants={itemVariants}
        >
          {dil === "tm"
            ? "Mahabat we ýerine ýetirilen işler bir ýerde"
            : dil === "ru"
            ? "Рекламные материалы и выполненные работы в одном месте"
            : "Promotions and Completed Works in One Place"}
        </motion.h1>
        <motion.div
          className="bg-blue h-[2px] rounded-[3px] w-[240px]"
          variants={itemVariants}
        ></motion.div>
        <motion.p
          className="xs:text-[16px] md:text-[20px] font-[regular] dark:text-white"
          variants={itemVariants}
        >
          {dil === "tm"
            ? "Kompaniýa mahabat kitapçasy (Katalogy)"
            : dil === "ru"
            ? "Рекламная брошюра компании (Каталог)"
            : "Company Promotional Booklet (Catalog)"}
        </motion.p>
        <motion.button
          className="w-fit flex items-center justify-center gap-[10px] bg-blue outline-none text-white rounded-[28px] xs:py-2 md:py-[14.5px] xs:px-7 md:px-[44px] text-[16px] font-[regular]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <BsDownload className="xs:text-[20px] md:text-[24px] text-white" />{" "}
          {dil === "tm"
            ? "Ýüklap almak"
            : dil === "ru"
            ? "Скачать"
            : "Download"}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default DownloadDoneWork;
