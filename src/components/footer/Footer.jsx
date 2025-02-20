import React from "react";

import logo from "../../images/footer-logo.svg";
import icon_1 from "../../images/footer-icon-1.svg";
import icon_2 from "../../images/footer-icon-2.svg";
import icon_3 from "../../images/footer-icon-3.svg";
import icon_4 from "../../images/footer-icon-4.svg";
import message from "../../images/Message_alt_fill.svg";
import phone from "../../images/Phone_fill.svg";
import pin from "../../images/Pin_fill.svg";

const Footer = () => {
  return (
    <div className="w-full border-t border-[#DCDCDC] pt-[66px]">
      <div className="sm:w-[90%] md:w-[80%] mx-auto mb-[43px] ">
        <div className="w-full sm:flex-col lg:flex-row flex items-center justify-between">
          <div className="flex w-full items-baseline flex-col justify-start">
            <div className="w-fit ">
              <img src={logo} alt="logo" className="w-full object-contain" />
            </div>

            <p className="text-[#6A6A6A] sm:text-[14px] md:text-[16px] sm:w-full md:w-[70%] font-[sans-medium] mt-[25px] mb-[37px] ">
              Lorem ipsum dolor sit amet consectetur. In adipiscing integer
              laoreet mauris sagittis.
            </p>

            <div className="sm:flex lg:hidden mb-[48px] w-full flex-col items-baseline justify-end ">
              <p className="text-[#34C2AA] sm:text-[24px] md:text-[36px] font-[sans-medium] ">
                Habarlaşmak üçin
              </p>

              <div className="flex items-center justify-start gap-4 mt-[22px] mb-[29px] ">
                <img src={message} alt="icon" />
                <p className="text-[#6A6A6A] sm:text-[14px] md:text-[16px] font-[sans-medium] italic">
                  ygtybarly@atiyaclandyrys
                </p>
              </div>

              <div className="flex items-start justify-center gap-4">
                <img src={phone} alt="icon" />
                <div className="w-fit text-[#6A6A6A] sm:text-[14px] md:text-[16px] font-[sans-medium] italic ">
                  <div className="flex items-center justify-start gap-8 mb-[10px] ">
                    <p>+993 60 204061</p>
                    <p>+993 62 576006</p>
                  </div>

                  <div className="flex items-center justify-start gap-8">
                    <p>+993 12 957696</p>
                    <p>+993 12 957698</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-start gap-4 mt-[22px]">
                <img src={pin} alt="icon" />
                <p className="text-[#6A6A6A] sm:text-[14px] md:text-[16px] font-[sans-medium] italic">
                  Aşgabat şäheri, Bitaraplyk şaýoly köçesi 15 jaý
                </p>
              </div>
            </div>

            <div className="w-full flex items-center justify-start sm:gap-[18px] md:gap-6 sm:text-[14px] md:text-[16px] font-[sans-medium] ">
              <a href="#home" className="cursor-pointer whitespace-nowrap">
                Baş sahypa
              </a>
              <a href="#services" className="cursor-pointer whitespace-nowrap">
                Hyzmatlar
              </a>
              <a href="#about" className="cursor-pointer whitespace-nowrap">
                Biz barada
              </a>
              <a href="#clients" className="cursor-pointer whitespace-nowrap">
                Müşderiler
              </a>
            </div>

            <div className="flex w-full items-center sm:justify-center md:justify-start gap-[18px] mt-[37px] ">
              <img src={icon_1} alt="icon" className="cursor-pointer" />
              <img src={icon_2} alt="icon" className="cursor-pointer" />
              <img src={icon_3} alt="icon" className="cursor-pointer" />
              <img src={icon_4} alt="icon" className="cursor-pointer" />
            </div>
          </div>

          <div className="sm:hidden lg:flex w-full flex-col items-baseline justify-end ">
            <p className="text-[#34C2AA] text-[36px] font-[sans-medium] ">
              Habarlaşmak üçin
            </p>

            <div className="flex items-center justify-start gap-4 mt-[22px] mb-[29px] ">
              <img src={message} alt="icon" />
              <p className="text-[#6A6A6A] sm:text-[14px] md:text-[16px] font-[sans-medium] italic ">
                ygtybarly@atiyaclandyrys
              </p>
            </div>

            <div className="flex items-start justify-center gap-4">
              <img src={phone} alt="icon" />
              <div className="w-fit text-[#6A6A6A] sm:text-[14px] md:text-[16px] font-[sans-medium] italic ">
                <div className="flex items-center justify-start gap-8 mb-[10px] ">
                  <p>+993 60 204061</p>
                  <p>+993 62 576006</p>
                </div>

                <div className="flex items-center justify-start gap-8">
                  <p>+993 12 957696</p>
                  <p>+993 12 957698</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-start gap-4 mt-[22px]">
              <img src={pin} alt="icon" />
              <p className="text-[#6A6A6A] sm:text-[14px] md:text-[16px] font-[sans-medium] italic">
                Aşgabat şäheri, Bitaraplyk şaýoly köçesi 15 jaý
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-6 border-t border-[#DCDCDC]">
        <div className="w-[80%] mx-auto flex sm:items-center sm:gap-5 md:gap-0 md:items-center md:flex-row sm:flex-col sm:justify-center md:justify-between text-[#6A6A6A] text-[16px] font-[sans-medium] ">
          <p className="md:text-left sm:text-center ">© Copyright 2024 "Ygtybarly ätiýaçlandyryş"</p>
          <p>Ähli hukuklar goralandyr</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
