import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import surat from "../../images/certificate.png";

import {
  LiaLongArrowAltLeftSolid,
  LiaLongArrowAltRightSolid,
} from "react-icons/lia";

const CertificatesCarousel = () => {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const scrollAmount = 250; // adjust based on card width + gap

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    const totalScroll = container.scrollWidth - container.clientWidth;
    setProgress((container.scrollLeft / totalScroll) * 100);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  useEffect(() => {
    const container = scrollRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Arrows */}
      <div className="flex md:flex-row xs:flex-col w-full gap-10">
        <div className="xs:w-full md:w-[45%] dark:text-white">
          <motion.h1
            className="xs:text-[25px] md:text-[32px] xs:mb-4 md:mb-[34px] font-[semibold]"
            variants={itemVariants}
          >
            Our licenses:
          </motion.h1>
          <motion.p
            className="xs:text-[16px] md:text-[18px] xs:mb-4 md:mb-7 font-[regular]"
            variants={itemVariants}
          >
            We are ISO 9001:2008 Certified Company and committed to supply
            highest quality of products and services to our clients. The
            Management makes sure that the material or service rendered meet or
            exceed the customer expectations
          </motion.p>

          <div className="flex mb-5 items-center justify-start gap-6">
            <motion.div
              className="xs:py-2 md:py-3 transition-all duration-200 xs:px-2 md:px-3 rounded-full border border-[#66819F] bg-[#F9FAFC] dark:bg-[#161618] cursor-pointer dark:hover:bg-blue hover:bg-blue group"
              variants={itemVariants}
              onClick={scrollLeft}
            >
              <LiaLongArrowAltLeftSolid className="xs:text-[18px] md:text-[24px] group-hover:text-white" />
            </motion.div>

            <motion.div
              onClick={scrollRight}
              className="xs:py-2 md:py-3 transition-all duration-200 xs:px-2 md:px-3 rounded-full border border-[#66819F] bg-[#F9FAFC] dark:bg-[#161618] cursor-pointer hover:bg-blue group dark:hover:bg-blue"
              variants={itemVariants}
            >
              <LiaLongArrowAltRightSolid className="xs:text-[18px] md:text-[24px] group-hover:text-white" />
            </motion.div>
          </div>

          {/* Progress bar */}
          <div className="w-[55%] h-2 bg-gray-300 dark:bg-gray-600 rounded-full">
            <div
              className="h-full bg-blue rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/*  images */}
        <div
          ref={scrollRef}
          className="flex xs:w-full md:w-[55%] gap-10 overflow-x-hidden scroll-smooth"
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center gap-3 xs:min-w-[180px] md:min-w-[218px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img
                src={surat}
                alt={`certificate-${i}`}
                className="object-contain shadow-md xs:max-w-[180px] md:max-w-[218px] w-full max-h-[300px] h-full rounded-[4px]"
              />
              <p className="text-[16px] dark:text-white font-[regular]">
                Ministry of Energy
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatesCarousel;
