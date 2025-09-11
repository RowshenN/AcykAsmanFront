import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import surat from "../../images/donework.png";

import { SebedimContext } from "../../utils/Context";

const DoneWork = () => {
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
          <h1 className="text-[31px] mb-6 font-[bold]">
            Açyk Asman Yyldyzy (LOGO)
          </h1>
          <h2 className="xs:text-[16px] md:text-[18px] font-[bold mb-[10px]">
            Olympic Arena Opening Ceremony
          </h2>
          <div className="bg-white rounded-[5px] py-[5px] px-3 w-fit mb-[11px]">
            <p className="text-[12px] font-[regular] text-black">
              28 Sent 2017 ý
            </p>
          </div>
          <p className="xs:text-[15px] md:text-[16px] font-[regular] xs:mb-4 md:mb-[30px]">
            Olimpiýa arenasynda köp garaşylýan açylyş dabarasy 5000-den gowrak
            meşhur myhmany garşy aldy we bu dabara dünýäniň millionlarça
            tomaşaçylaryna göni efirde görkezildi. Sport ussatlygynyň we iň täze
            täzelikleriň baýramçylygy boldy...
          </p>
          <button className="xs:px-5 md:px-[56px] w-fit xs:py-2 md:py-[14px] bg-blue hover:bg-blue/10 border border-white rounded-[28px] text-white">
            {dil === "tm"
              ? "Giňişleýin"
              : dil === "ru"
              ? "Подробно"
              : "Detailed"}
          </button>
        </motion.div>

        {/* image div */}
        <motion.div className="xs:w-full lg:w-[60%]" variants={itemVariants}>
          <img
            src={surat}
            alt="surat"
            className="w-full h-full max-h-[345px] object-cover rounded-[20px]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DoneWork;
