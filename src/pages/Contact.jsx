import React from "react";

import big_loc from "../images/contact-big-loc.svg";
import big_mes from "../images/contact-big-message.svg";
import big_phone from "../images/contact-big-phone.svg";
import map from "../images/contact-map.png";

const Contact = () => {
  return (
    <div className="w-full sm:bg-gradient-20-80 md:bg-gradient-top sm:pt-[150px] md:pt-[232px] mb-[326px]">
      <div className="sm:w-[90%] md:w-[80%] mx-auto ">
        <p className="sm:text-[24px] md:text-[46px] font-[sans-medium] text-center sm:mb-[22px] md:mb-7 ">
          Habarlaşmak üçin
        </p>
        <p className="sm:text-[14px] md:text-[16px] font-[sans-regular] w-[60%] mx-auto text-center sm:mb-[54px] md:mb-[145px]">
          Lorem ipsum dolor sit amet consectetur. Dolor vitae ut sit ut mauris
          sociis tortor vel dignissim. Ullamcorper auctor non arcu proin urna.
        </p>

        <div className="w-full mb-[142px] md:flex-row sm:flex-col md:gap-0 sm:gap-[54px] flex items-start justify-between">
          <div className="flex w-full items-center justify-center flex-col">
            <div className="sm:w-[70px] md:w-[100px] mb-[18px]">
              <img src={big_mes} alt="icon" className="w-full object-cover" />
            </div>
            <p className="text-[18px] font-[sans-semibold] mb-[18px] ">
              E-poçta
            </p>
            <p className="text-[16px] text-[#6A6A6A] font-[sans-semibold] mb-[9px]">
              ygtybarly@atiyaclandyrys
            </p>
            <p className="text-[16px] text-[#6A6A6A] font-[sans-semibold]">
              ygtybarly@info
            </p>
          </div>

          <div className="flex w-full items-center justify-center flex-col">
            <div className="sm:w-[70px] md:w-[100px] mb-[18px]">
              <img src={big_phone} alt="icon" className="w-full object-cover" />
            </div>
            <p className="text-[18px] font-[sans-semibold] mb-[18px] ">
              Telefon
            </p>
            <p className="text-[16px] text-[#6A6A6A] font-[sans-semibold] mb-[9px]">
              +993 60 204061
            </p>
            <p className="text-[16px] text-[#6A6A6A] font-[sans-semibold] mb-[9px] ">
              +993 62 576006
            </p>
            <p className="text-[16px] text-[#6A6A6A] font-[sans-semibold] mb-[9px] ">
              +993 12 957696
            </p>
            <p className="text-[16px] text-[#6A6A6A] font-[sans-semibold] mb-[9px]">
              +993 12 957698
            </p>
          </div>

          <div className="flex w-full items-center justify-center flex-col">
            <div className="sm:w-[70px] md:w-[100px] mb-[18px]">
              <img src={big_loc} alt="icon" className="w-full object-cover" />
            </div>
            <p className="text-[18px] font-[sans-semibold] mb-[18px] ">Adres</p>
            <p className="text-[16px] w-[70%] text-center text-[#6A6A6A] font-[sans-semibold]">
              Aşgabat şäheri, Bitaraplyk şaýoly köçesi 15 jaý
            </p>
          </div>
        </div>

        <div>
          <p className="text-[12px] sm:tracking-[2px] md:mb-0 sm:mb-4 md:text-left sm:text-center md:tracking-[5px] font-[sans-regular] text-left">
            HABARLAŞMAK ÜÇIN
          </p>
          <p className="sm:text-[24px] md:text-[46px]  md:text-left sm:text-center font-[sans-medium] text-left">
            Biziň bilen habarlaşyň
          </p>

          <div className="w-full md:flex-row sm:flex-col flex items-start justify-center sm:gap-[40px] lg:gap-[80px] sm:mt-[43px] md:mt-[53px] ">
            <form className="sm:w-full md:w-[45%] flex flex-col items-baseline justify-start gap-[33px]">
              <div className="w-full xs:flex-row sm:flex-col flex items-center justify-center gap-4 ">
                <div className="flex w-full items-baseline justify-start flex-col gap-[10px]">
                  <label
                    htmlFor="At"
                    className="text-[16px] font-[sans-medium] "
                  >
                    At
                  </label>
                  <input
                    type="text"
                    id="At"
                    className="outline-none w-full border text-[16px] font-[sans-regular] border-[#DADADA] bg-[#FAFAFA] rounded-[6px] py-2 px-3 "
                  />
                </div>

                <div className="flex w-full items-baseline justify-start flex-col gap-[10px]">
                  <label
                    htmlFor="Familiýa"
                    className="text-[16px] font-[sans-medium]"
                  >
                    Familiýa
                  </label>
                  <input
                    type="text"
                    id="Familiýa"
                    className="outline-none w-full border text-[16px] font-[sans-regular] border-[#DADADA] bg-[#FAFAFA] rounded-[6px] py-2 px-3 "
                  />
                </div>
              </div>

              <div className="flex w-full items-baseline justify-start flex-col gap-[10px]">
                <label
                  htmlFor="E-poçta"
                  className="text-[16px] font-[sans-medium]"
                >
                  E-poçta
                </label>
                <input
                  type="email"
                  className="outline-none w-full border text-[16px] font-[sans-regular] border-[#DADADA] bg-[#FAFAFA] rounded-[6px] py-2 px-3 "
                />
              </div>

              <div className="flex w-full items-baseline justify-start flex-col gap-[10px]">
                <label
                  className="text-[16px] font-[sans-medium]"
                  htmlFor="Telefon belgi"
                >
                  Telefon belgi
                </label>
                <input
                  className="outline-none w-full border text-[16px] font-[sans-regular] border-[#DADADA] bg-[#FAFAFA] rounded-[6px] py-2 px-3 "
                  type="number"
                  id="Telefon belgi"
                />
              </div>

              <div className="flex w-full items-baseline justify-start flex-col gap-[10px]">
                <label
                  className="text-[16px] font-[sans-medium]"
                  htmlFor="Hatyňyz"
                >
                  Hatyňyz
                </label>
                <textarea
                  id="Hatyňyz"
                  className="min-h-[141px] outline-none w-full border text-[16px] font-[sans-regular] border-[#DADADA] bg-[#FAFAFA] rounded-[6px] py-2 px-3"
                ></textarea>
              </div>

              <button className="w-full bg-[#34C2AA] rounded-[16px] outline-none py-[10px] text-white text-[18px] font-[sans-semibold]">
                Ugrat
              </button>
            </form>

            <div className="sm:w-full md:w-[55%]">
              <img
                src={map}
                alt="map"
                className="w-full object-cover rounded-[13px] sm:h-[390px] md:h-[586px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
