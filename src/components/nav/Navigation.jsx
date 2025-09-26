import { Drawer } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { LuMoon, LuSunDim } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import english from "../../images/english_flag.png";
import logo from "../../images/logo.png";
import russian from "../../images/russian-flag.png";
import turkmen from "../../images/turkmen flag.svg";
import video from "../../images/video.svg";
import { useTheme } from "../../utils/ThemeContext";
import VideoPlayer from "../videPlayer/VideoPlayer";

import { SebedimContext } from "../../utils/Context";
import { useGetAllWorksQuery } from "../../utils/apiSlice/works";
import { BASE_URL } from "../../utils/Axios";

const Navigation = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef(null);

  const { dil, ChangeDil } = useContext(SebedimContext);
  const [lang, setLang] = useState(false);

  const { data: works = [], isLoading, isError } = useGetAllWorksQuery({});

  const worksWithVideos = works.filter(
    (work) => work.Videos && work.Videos.length > 0
  );

  const randomWork =
    worksWithVideos[Math.floor(Math.random() * worksWithVideos.length)];
  const randomVideoSrc = randomWork
    ? `${BASE_URL}${randomWork.Videos[0].src.split("\\").pop()}`
    : null;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (videoRef.current && !videoRef.current.contains(event.target)) {
        setIsVideoOpen(false);
      }
    };

    if (isVideoOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVideoOpen]);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const modalBackdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalContentVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <motion.div
      className={`w-full ${
        theme === "dark" ? "bg-[#161618]" : "bg-white"
      } sticky top-2 z-50 xs:mb-5 md:mb-9 border xs:px-3 md:pl-[60px] md:pr-[9px] flex items-center justify-between py-1 border-border dark:border-borderDark rounded-[54px]`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* drawer */}
      <div className="hidden">
        <Drawer
          placement={"left"}
          closable={false}
          onClose={onClose}
          open={open}
          key={"left"}
          className="!px-0 !py-0 !my-0 !mx-0"
        >
          <div className="flex-col relative px-5 py-5 flex items-center bg-gradient-light dark:bg-gradient-dark h-[70%] text-[16px] justify-center gap-7">
            <MdOutlineCancel
              className="absolute dark:text-white  top-5 right-5 text-[25px] cursor-pointer "
              onClick={() => setOpen(false)}
            />

            <motion.div variants={itemVariants}>
              <Link
                className={
                  location.pathname === "/"
                    ? "font-[medium] text-blue"
                    : "text-black dark:text-white font-[regular]"
                }
                to={"/"}
              >
                {dil === "tm"
                  ? "Baş sahypa"
                  : dil === "ru"
                  ? "Главная"
                  : "Home"}
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              onClick={() => {
                setIsVideoOpen(true);
                setOpen(false);
              }}
            >
              <div
                className={
                  isVideoOpen
                    ? "font-[medium] text-blue cursor-pointer"
                    : "text-black dark:text-white font-[regular] cursor-pointer"
                }
              >
                <div className="flex items-center justify-center gap-1">
                  <p>
                    {dil === "tm"
                      ? "Edilen işler"
                      : dil === "ru"
                      ? "Работы"
                      : "Works"}
                  </p>
                  <img src={video} alt="video" />
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                className={
                  location.pathname === "/services" ||
                  location.pathname.includes("/services")
                    ? "font-[medium] text-blue"
                    : "text-black dark:text-white font-[regular]"
                }
                to={"/services"}
              >
                {dil === "tm"
                  ? "Hyzmatlar"
                  : dil === "ru"
                  ? "Услуги"
                  : "Services"}
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                className={
                  location.pathname === "/news" ||
                  location.pathname.includes("/news")
                    ? "font-[medium] text-blue"
                    : "text-black dark:text-white font-[regular]"
                }
                to={"/news"}
              >
                {dil === "tm"
                  ? "Täzelikler"
                  : dil === "ru"
                  ? "Новости"
                  : "News"}
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                className={
                  location.pathname === "/about"
                    ? "font-[medium] text-blue"
                    : "text-black dark:text-white font-[regular]"
                }
                to={"/about"}
              >
                {dil === "tm"
                  ? "Biz barada"
                  : dil === "ru"
                  ? "О нас"
                  : "About us"}
              </Link>
            </motion.div>

            <div className=" w-[75px] relative ">
              <div
                onClick={() => setLang(!lang)}
                className="w-full cursor-pointer py-2 px-2 border border-border dark:border-borderDark rounded-[24px]  flex items-center justify-center "
              >
                {dil === "tm" ? (
                  <img
                    className="xs:w-[20px] md:w-[25px] xs:h-[20px] md:h-[25px] object-cover "
                    src={turkmen}
                    alt="turkmen"
                  />
                ) : dil === "ru" ? (
                  <img
                    className="xs:w-[20px] md:w-[25px] xs:h-[20px] md:h-[25px] object-cover "
                    src={russian}
                    alt="russian"
                  />
                ) : (
                  <img
                    className="xs:w-[20px] md:w-[25px] xs:h-[20px] md:h-[25px] object-cover "
                    src={english}
                    alt="english"
                  />
                )}
              </div>

              <AnimatePresence>
                {lang && (
                  <motion.div
                    onMouseLeave={() => setLang(false)}
                    className="absolute top-[110%] flex items-center justify-center flex-col divide-y divide-border bg-white border border-border dark:bg-[#161616] dark:border-borderDark  w-full"
                    data-aos="fade-up"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15, ease: "easeInOut" }}
                  >
                    <div
                      onClick={() => ChangeDil("tm")}
                      className={`${
                        dil == "tm"
                          ? "bg-blue"
                          : "bg-white dark:bg-black/50 dark:hover:bg-blue transition-all duration-200"
                      } w-full flex items-center py-[2px] justify-center cursor-pointer hover:bg-blue transition-all duration-200 `}
                    >
                      <img
                        src={turkmen}
                        className="w-[25px] h-[25px] object-cover "
                        alt="turkmen"
                      />
                    </div>
                    <div
                      onClick={() => ChangeDil("ru")}
                      className={`${
                        dil == "ru"
                          ? "bg-blue"
                          : "bg-white dark:bg-black/50 dark:hover:bg-blue transition-all duration-200"
                      } w-full flex items-center py-[2px] justify-center cursor-pointer hover:bg-blue transition-all duration-200 `}
                    >
                      <img
                        src={russian}
                        className="w-[25px] h-[25px] object-cover "
                        alt="russian"
                      />
                    </div>
                    <div
                      onClick={() => ChangeDil("en")}
                      className={`${
                        dil == "en"
                          ? "bg-blue"
                          : "bg-white dark:bg-black/50 dark:hover:bg-blue transition-all duration-200"
                      } w-full flex items-center py-[2px] justify-center cursor-pointer hover:bg-blue transition-all duration-200 `}
                    >
                      <img
                        src={english}
                        className="w-[25px] h-[25px] object-cover "
                        alt="english"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Drawer>
      </div>
      {/* Logo */}
      <motion.div variants={itemVariants}>
        <Link to={"/"}>
          <div className="w-[86px] cursor-pointer">
            <img
              src={logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>
      </motion.div>

      {/* Navigation links & theme toggle */}
      <motion.div
        className="w-fit flex items-center justify-center xs:gap-4 md:gap-[22px]"
        variants={itemVariants}
      >
        {/* nav links */}
        <div className="md:flex xs:hidden items-center text-[16px] justify-center gap-7">
          <motion.div variants={itemVariants}>
            <Link
              className={
                location.pathname === "/"
                  ? "font-[medium] text-blue"
                  : "text-black dark:text-white font-[regular]"
              }
              to={"/"}
            >
              {dil === "tm" ? "Baş sahypa" : dil === "ru" ? "Главная" : "Home"}
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            onClick={() => setIsVideoOpen(true)}
          >
            <div
              className={
                isVideoOpen
                  ? "font-[medium] text-blue cursor-pointer"
                  : "text-black dark:text-white font-[regular] cursor-pointer"
              }
            >
              <div className="flex items-center justify-center gap-1">
                {dil === "tm"
                  ? "Edilen işler"
                  : dil === "ru"
                  ? "Работы"
                  : "Works"}
                <img src={video} alt="video" />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link
              className={
                location.pathname === "/services" ||
                location.pathname.includes("/services")
                  ? "font-[medium] text-blue"
                  : "text-black dark:text-white font-[regular]"
              }
              to={"/services"}
            >
              {dil === "tm"
                ? "Hyzmatlar"
                : dil === "ru"
                ? "Услуги"
                : "Services"}
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link
              className={
                location.pathname === "/news" ||
                location.pathname.includes("/news")
                  ? "font-[medium] text-blue"
                  : "text-black dark:text-white font-[regular]"
              }
              to={"/news"}
            >
              {dil === "tm" ? "Täzelikler" : dil === "ru" ? "Новости" : "News"}
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link
              className={
                location.pathname === "/about"
                  ? "font-[medium] text-blue"
                  : "text-black dark:text-white font-[regular]"
              }
              to={"/about"}
            >
              {dil === "tm"
                ? "Biz barada"
                : dil === "ru"
                ? "О нас"
                : "About us"}
            </Link>
          </motion.div>
        </div>

        {/* language div */}
        <div className=" md:block xs:hidden w-[75px] relative ">
          <div
            onClick={() => setLang(!lang)}
            className="w-full cursor-pointer py-2 px-2 border border-border dark:border-borderDark rounded-[24px]  flex items-center justify-center "
          >
            {dil === "tm" ? (
              <img
                className="xs:w-[20px] md:w-[25px] xs:h-[20px] md:h-[25px] object-cover "
                src={turkmen}
                alt="turkmen"
              />
            ) : dil === "ru" ? (
              <img
                className="xs:w-[20px] md:w-[25px] xs:h-[20px] md:h-[25px] object-cover "
                src={russian}
                alt="russian"
              />
            ) : (
              <img
                className="xs:w-[20px] md:w-[25px] xs:h-[20px] md:h-[25px] object-cover "
                src={english}
                alt="english"
              />
            )}
          </div>

          <AnimatePresence>
            {lang && (
              <motion.div
                onMouseLeave={() => setLang(false)}
                className="absolute top-[110%] flex items-center justify-center flex-col divide-y divide-border bg-white border border-border dark:bg-[#161616] dark:border-borderDark  w-full"
                data-aos="fade-up"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
              >
                <div
                  onClick={() => ChangeDil("tm")}
                  className={`${
                    dil == "tm"
                      ? "bg-blue"
                      : "bg-white dark:bg-black/50 dark:hover:bg-blue transition-all duration-200"
                  } w-full flex items-center py-[2px] justify-center cursor-pointer hover:bg-blue transition-all duration-200 `}
                >
                  <img
                    src={turkmen}
                    className="w-[25px] h-[25px] object-cover "
                    alt="turkmen"
                  />
                </div>
                <div
                  onClick={() => ChangeDil("ru")}
                  className={`${
                    dil == "ru"
                      ? "bg-blue"
                      : "bg-white dark:bg-black/50 dark:hover:bg-blue transition-all duration-200"
                  } w-full flex items-center py-[2px] justify-center cursor-pointer hover:bg-blue transition-all duration-200 `}
                >
                  <img
                    src={russian}
                    className="w-[25px] h-[25px] object-cover "
                    alt="russian"
                  />
                </div>
                <div
                  onClick={() => ChangeDil("en")}
                  className={`${
                    dil == "en"
                      ? "bg-blue"
                      : "bg-white dark:bg-black/50 dark:hover:bg-blue transition-all duration-200"
                  } w-full flex items-center py-[2px] justify-center cursor-pointer hover:bg-blue transition-all duration-200 `}
                >
                  <img
                    src={english}
                    className="w-[25px] h-[25px] object-cover "
                    alt="english"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Theme toggle */}
        <motion.div
          className="w-fit cursor-pointer py-2 px-2 border border-border dark:border-borderDark rounded-[24px] flex items-center justify-center"
          variants={itemVariants}
        >
          <motion.div
            onClick={() => setTheme("light")}
            layout
            className={
              theme === "light"
                ? "bg-blue cursor-pointer rounded-full py-1 px-[9.5px]"
                : "cursor-pointer rounded-full py-1 px-[9.5px]"
            }
          >
            <LuSunDim className="xs:text-[20px] md:text-[24px] text-white" />
          </motion.div>

          <motion.div
            onClick={() => setTheme("dark")}
            layout
            className={
              theme === "dark"
                ? "bg-blue cursor-pointer rounded-full py-1 px-[9.5px]"
                : "cursor-pointer rounded-full py-1 px-[9.5px]"
            }
          >
            <LuMoon
              className={`xs:text-[20px] md:text-[24px] ${
                theme === "dark" ? "text-white" : "text-[#292D32]"
              }`}
            />
          </motion.div>
        </motion.div>

        {/* burger button */}
        <div
          onClick={showDrawer}
          className="xs:flex md:hidden py-[10px] px-4 border border-border dark:border-borderDark rounded-[24px] items-center justify-center cursor-pointer"
        >
          <RxHamburgerMenu className="text-[20px] dark:text-white " />
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-[1000] bg-black/70"
            variants={modalBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              ref={videoRef}
              className="relative xs:w-[95%] md:w-[80%] mx-auto rounded-xl overflow-hidden"
              variants={modalContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div
                onClick={() => setIsVideoOpen(false)}
                className="border z-40 cursor-pointer absolute top-3 right-5 border-white rounded-full xs:py-[2px] md:py-1 xs:px-2 md:px-3 flex items-center justify-center"
              >
                <button className="text-white xs:text-lg md:text-2xl z-50">
                  ✕
                </button>
              </div>
              <VideoPlayer src={randomVideoSrc} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navigation;
