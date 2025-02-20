import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../images/logo.svg";
import globe from "../../images/globe.svg";
import burger from "../../images/burger.svg";
import green from "../../images/bac-green.svg";

import { SebedimContext } from "../../context/Context";
import { Drawer } from "antd";

const Navigation = () => {
  const { dil, ChangeDil } = useContext(SebedimContext);
  const [lang, setLang] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const navbarElement = document.querySelector(".nav_inner");
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 70);
      if (navbarElement) {
        navbarElement.classList.toggle("sticky", isSticky);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      style={
        isSticky
          ? { position: "fixed", top: "0", maxWidth: "1590px" }
          : { position: "absolute", top: "0px" }
      }
      className={`w-full transition-all py-[15px] ${
        isSticky ? "bg-white shadow-xl z-50" : ""
      } nav_inner`}
    >
      <div className="w-[90%] mx-auto flex items-center sm:justify-around md:justify-between">
        <div className="flex w-full items-center md:justify-start sm:justify-between">
          {/* Drawer div */}
          <div className="hidden">
            <Drawer
              placement="top"
              closable={false}
              onClose={() => setOpen(false)}
              open={open}
              key={"placement"}
            >
              <div className="flex items-center text-[14px] font-[poppins-medium] justify-center gap-4">
                <div className="flex flex-col py-[10px] px-5 rounded-[29px] w-full items-start justify-start gap-5">
                  <p
                    onClick={() => navigate("/")}
                    className="cursor-pointer font-[sans-regular]"
                  >
                    Baş sahypa
                  </p>

                  <a
                    href="#services"
                    className="cursor-pointer font-[sans-regular]"
                  >
                    Hyzmatlar
                  </a>

                  <a
                    href="#about"
                    className="cursor-pointer font-[sans-regular]"
                  >
                    Biz barada
                  </a>
                  <a
                    href="#clients"
                    className="cursor-pointer font-[sans-regular]"
                  >
                    Müşderiler
                  </a>

                  <p
                    onClick={() => navigate("/contact")}
                    className="cursor-pointer font-[sans-regular]"
                  >
                    Contact us
                  </p>
                </div>
              </div>
            </Drawer>
          </div>

          <div
            onClick={() => setOpen(true)}
            className="sm:flex md:hidden cursor-pointer flex items-center justify-center relative h-[40px] w-[40px] "
          >
            <img
              src={green}
              alt="icon"
              className=" absolute top-0 left-0 object-cover w-full z-10"
            />
            <img src={burger} alt="icon" className="object-cover z-20" />
          </div>

          <div className="sm:w-[115px] md:w-[136px] flex items-center justify-center">
            <img
              onClick={() => navigate("/")}
              src={logo}
              alt="logo"
              className="w-full cursor-pointer object-cover"
            />
          </div>

          <div
            onClick={() => setLang(!lang)}
            className="sm:flex cursor-pointer md:hidden items-center justify-center relative h-[40px] w-[40px] "
          >
            <img
              src={green}
              alt="icon"
              className=" absolute top-0 left-0 object-cover w-full z-10"
            />
            <div className="text-[#34C2AA] text-[14px] font-[sans-medium] relative">
              <p className="">
                {dil === "tm" ? "TM" : dil === "ru" ? "RU" : "EN"}
              </p>
              <div
                onMouseLeave={() => setLang(false)}
                className={
                  (lang === true ? "flex " : " hidden ") +
                  "absolute bg-white/85 py-2 px-2 rounded-[10px] z-40 flex flex-col items-center justify-center gap-2 top-8 right-[-10px] "
                }
              >
                <p onClick={() => ChangeDil("en")}>EN</p>
                <p onClick={() => ChangeDil("ru")}>RU</p>
                <p onClick={() => ChangeDil("tm")}>TM</p>
              </div>
            </div>
          </div>

          <div className="sm:hidden md:flex whitespace-nowrap text-[16px] md:px-7 lg:px-[44px] py-2 ml-[44px] border-l border-[#000000] md:gap-6 lg:gap-[50px] items-center justify-center">
            <p
              onClick={() => navigate("/")}
              className="cursor-pointer font-[sans-regular]"
            >
              Baş sahypa
            </p>

            <a href="#services" className="cursor-pointer font-[sans-regular]">
              Hyzmatlar
            </a>

            <a href="#about" className="cursor-pointer font-[sans-regular]">
              Biz barada
            </a>
            <a href="#clients" className="cursor-pointer font-[sans-regular]">
              Müşderiler
            </a>
          </div>
        </div>

        <div className="sm:hidden w-full md:flex items-center justify-end gap-4">
          <div className="">
            <div
              onClick={() => setLang(!lang)}
              className="bg-[#F9F9F9] relative px-5 py-2 rounded-[29px] cursor-pointer flex items-center justify-center gap-2"
            >
              <img src={globe} alt="globe" />
              <p className="font-[sans-medium] text-[14px] ">
                {dil === "tm" ? "TM" : dil === "ru" ? "RU" : "EN"}
              </p>

              <div
                onMouseLeave={() => setLang(false)}
                className={
                  (lang === true ? "flex " : " hidden ") +
                  "absolute top-10 flex flex-col py-1 items-center justify-end gap-2 rounded-[19px] w-full bg-[#F9F9F9] "
                }
              >
                <div
                  onClick={() => ChangeDil("tm")}
                  className="hover:text-black"
                >
                  TM
                </div>
                <div
                  onClick={() => ChangeDil("ru")}
                  className="hover:text-black"
                >
                  RU
                </div>
                <div
                  onClick={() => ChangeDil("en")}
                  className="hover:text-black"
                >
                  EN
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => navigate("/contact")}
            className="bg-[#34C2AA] w-fit flex items-center justify-center cursor-pointer rounded-[29px] px-[22px] py-[10px] text-white text-[14px] font-[sans-semibold] "
          >
            <p className="w-fit">
              {dil === "tm"
                ? "Habarlaşmak üçin"
                : dil === "ru"
                ? "Dlya Kontakr"
                : "Contact"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
