import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import { SebedimContext } from "../../utils/Context";
import {
  serviceApi,
  useGetAllServicesQuery,
} from "../../utils/apiSlice/services";

const Services = () => {
  const [name, setName] = useState("all");
  const { dil } = useContext(SebedimContext);

  const {
    data: services = [],
    isLoading,
    isError,
  } = useGetAllServicesQuery({});

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out",
    });
  }, []);

  // Framer Motion variants
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

  const filteredServices = services.filter((service) => {
    if (name === "all") return true;
    if (name === "photos") return service.Imgs && service.Imgs.length > 0;
    if (name === "videos") return service.Videos && service.Videos.length > 0;
    return false;
  });

  console.log(services);

  return (
    <div className="w-full">
      <motion.div
        className="flex xs:mb-5 md:mb-[52px] items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="xs:w-full sm:w-[70%] lg:w-[55%] mx-auto"
          variants={itemVariants}
        >
          <motion.h1
            className="xs:text-[20px] md:text-[30px] lg:text-[48px] xs:mb-5 md:mb-[48px] text-center font-[semibold] text-blue"
            variants={itemVariants}
          >
            {dil === "tm"
              ? "Her pikiri hakykata öwürmek üçin hyzmatlaryň doly spektrini hödürleýäris"
              : dil === "ru"
              ? "Мы предлагаем полный спектр услуг, чтобы воплотить любую идею в реальность"
              : "We offer the full range of services to turn every idea into reality"}
          </motion.h1>

          <motion.div
            className="w-full flex items-center xs:justify-center xs:gap-2 md:gap-0 md:justify-between"
            variants={itemVariants}
          >
            <div
              onClick={() => setName("all")}
              className={`${
                name === "all"
                  ? "bg-blue text-white "
                  : " bg-white dark:bg-dark dark:text-white text-black "
              } border border-border dark:border-borderDark dark:hover:bg-blue rounded-full cursor-pointer hover:bg-blue/80 hover:text-white transition-all duration-200 xs:py-1 md:py-[13px] xs:px-4 md:px-[91px] xs:text-[16px] md:text-[18px] font-[regular]`}
            >
              <p>{dil === "tm" ? "Ahlisi" : dil === "ru" ? "Всё" : "All"}</p>
            </div>

            <div
              onClick={() => setName("photos")}
              className={`${
                name === "photos"
                  ? "bg-blue text-white "
                  : " bg-white dark:bg-dark dark:text-white text-black "
              } border border-border dark:border-borderDark dark:hover:bg-blue rounded-full cursor-pointer hover:bg-blue/80 hover:text-white transition-all duration-200 xs:py-1 md:py-[13px] xs:px-4 md:px-[91px] xs:text-[16px] md:text-[18px] font-[regular]`}
            >
              <p>{dil === "tm" ? "Surat" : dil === "ru" ? "Фото" : "Photo"}</p>
            </div>

            <div
              onClick={() => setName("videos")}
              className={`${
                name === "videos"
                  ? "bg-blue text-white "
                  : " bg-white dark:bg-dark dark:text-white text-black "
              } border border-border dark:border-borderDark dark:hover:bg-blue rounded-full cursor-pointer hover:bg-blue/80 hover:text-white transition-all duration-200 xs:py-1 md:py-[13px] xs:px-4 md:px-[91px] xs:text-[16px] md:text-[18px] font-[regular]`}
            >
              <p>{dil === "tm" ? "Wideo" : dil === "ru" ? "Видео" : "Video"}</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Cards with animations */}
      <AnimatePresence mode="wait">
        <motion.div
          className="w-full grid md:gap-9 xs:grid-cols-2 md:grid-cols-taslama-cards xs:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={name}
        >
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="hover:bg-[#F3F3F3] h-fit dark:hover:bg-[#313133] transition-all duration-200 rounded-[20px] cursor-pointer xs:px-0 md:px-[14px] pt-[10px] xs:pb-0 md:pb-[35px]"
              data-aos="fade-up"
            >
              {service.Imgs && service.Imgs.length > 0 ? (
                <ServiceCard service={service} />
              ) : service.Videos && service.Videos.length > 0 ? (
                <ServiceCard service={service} />
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Services;
