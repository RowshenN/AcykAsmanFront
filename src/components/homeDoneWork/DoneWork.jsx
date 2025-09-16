import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { SebedimContext } from "../../utils/Context";
import { useGetAllWorksQuery } from "../../utils/apiSlice/works";
import { BASE_URL } from "../../utils/Axios";
import { Link } from "react-router-dom";

const DoneWork = () => {
  const { dil } = useContext(SebedimContext);
  const { data: works = [], isLoading } = useGetAllWorksQuery();
  const [work, setWork] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out",
    });
  }, []);

  useEffect(() => {
    if (works.length > 0) {
      const worksWithImages = works.filter((w) => w.Imgs && w.Imgs.length > 0);
      if (worksWithImages.length > 0) {
        const randomWork =
          worksWithImages[Math.floor(Math.random() * worksWithImages.length)];
        setWork(randomWork);
      }
    }
  }, [works]);

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

  if (isLoading || !work) {
    return (
      <div className="w-full flex items-center justify-center py-10 text-white">
        Loading...
      </div>
    );
  }

  const title =
    dil === "tm" ? work.name_tm : dil === "ru" ? work.name_ru : work.name_en;

  const text =
    dil === "tm" ? work.text_tm : dil === "ru" ? work.text_ru : work.text_en;

  const imageUrl = `${BASE_URL}uploads/work/${work.Imgs[0].src
    .split("\\")
    .pop()}`;

  return (
    <motion.div
      className="w-full xs:mb-10 md:mb-84 text-white bg-blue rounded-[28px] xs:py-2 md:py-5 xs:px-2 md:px-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      data-aos="fade-up"
    >
      <div className="w-full lg:flex-row xs:flex-col flex items-start gap-6">
        {/* text div */}
        <motion.div
          className="xs:w-full lg:w-[40%] flex pt-3 flex-col"
          variants={itemVariants}
        >
          <h1 className="text-[31px] mb-6 font-[bold]">{title}</h1>
          <h2 className="xs:text-[16px] md:text-[18px] font-[bold mb-[10px]">
            {text}
          </h2>
          <div className="bg-white rounded-[5px] py-[5px] px-3 w-fit mb-[11px]">
            <p className="text-[12px] font-[regular] text-black">
              {work.date ? new Date(work.date).toLocaleDateString() : ""}
            </p>
          </div>
          <Link to={`/work/inner?id=${work.id}`}>
            <button className="xs:px-5 md:px-[56px] w-fit xs:py-2 md:py-[14px] bg-blue hover:bg-blue/10 border border-white rounded-[28px] text-white">
              {dil === "tm"
                ? "Giňişleýin"
                : dil === "ru"
                ? "Подробно"
                : "Detailed"}
            </button>
          </Link>
        </motion.div>

        {/* image div */}
        <motion.div className="xs:w-full lg:w-[60%]" variants={itemVariants}>
          <img
            src={imageUrl}
            alt="work"
            className="w-full h-full max-h-[345px] object-cover rounded-[20px]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DoneWork;
