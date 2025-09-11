import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";

import HomeBanner from "../../components/banner/HomeBanner";
import ContactUs from "../../components/contactUs/ContactUs";
import Counter from "../../components/counter/Counter";
import DownloadDoneWork from "../../components/download/DownloadDoneWork";
import DoneWork from "../../components/homeDoneWork/DoneWork";
import LogosCarousel from "../../components/logoCarousel/LogoCarousel";
import Taslamalar from "../../components/taslamalar/Taslamalar";

import { SebedimContext } from "../../utils/Context";
import { useCreateSubscribeMutation } from "../../utils/apiSlice/subscribe";
import { message } from "antd";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out",
    });
  }, []);

  const { dil } = useContext(SebedimContext);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [createSubscribe, { isLoading }] = useCreateSubscribeMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !name) return; // simple validation
    try {
      await createSubscribe({ name, email }).unwrap();
      message.success("Subscribed successfully!");
      setEmail("");
      setName("");
    } catch (err) {
      console.error(err);
      message.warning("Failed to subscribe. Try again.");
    }
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
    <div className="w-full h-full">
      <HomeBanner />

      {/* Grid with animations */}
      <motion.div
        className="w-full xs:mb-10 md:mb-84 grid xs:grid-cols-2 md:grid-cols-auto-fill-250 xs:gap-3 md:gap-5 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        data-aos="fade-up"
      >
        <div
          className="w-full flex flex-col items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="text-blue xs:text-[30px] md:text-[48px] font-[semibold]">
            <Counter end={1200} />+
          </p>
          <p className="text-[#797979] dark:text-white xs:text-[20px] md:text-[28px] font-[regular]">
            {dil === "tm" ? "Müşderiler" : dil === "ru" ? "Клиенты" : "Clients"}
          </p>
        </div>

        <div
          className="w-full flex flex-col items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-blue xs:text-[30px] md:text-[48px] font-[semibold]">
            <Counter end={99} />+
          </p>
          <p className="text-[#797979] dark:text-white xs:text-[20px] md:text-[28px] font-[regular]">
            {dil === "tm"
              ? "Hünärmenler"
              : dil === "ru"
              ? "Эксперты"
              : "Experts"}
          </p>
        </div>

        <div
          className="w-full flex flex-col items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-blue xs:text-[30px] md:text-[48px] font-[semibold]">
            <Counter end={12} />+
          </p>
          <p className="text-[#797979] dark:text-white xs:text-[20px] md:text-[28px] font-[regular]">
            {dil === "tm"
              ? "Hyzmatlarymyz"
              : dil === "ru"
              ? "Наши услуги"
              : "Our services"}
          </p>
        </div>

        <div
          className="w-full flex flex-col items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="text-blue xs:text-[30px] md:text-[48px] font-[semibold]">
            <Counter end={50} />+
          </p>
          <p className="text-[#797979] dark:text-white xs:text-[20px] md:text-[28px] font-[regular]">
            {dil === "tm"
              ? "Ýerine ýetirilen işler"
              : dil === "ru"
              ? "Выполненные работы"
              : "Completed Works"}
          </p>
        </div>
      </motion.div>

      <Taslamalar />
      <DoneWork />
      <LogosCarousel />
      <DownloadDoneWork />
      <ContactUs />

      {/* Send Email */}
      <motion.div
        className="w-full border border-border dark:border-borderDark bg-[#F8F8F8] dark:bg-[#313133] xs:py-2 sm:py-5 md:py-[45px] xs:px-9 md:px-[71px] rounded-[28px] md:gap-0 xs:gap-5 md:flex-row xs:flex-col flex items-center justify-between"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="xs:w-full md:w-[40%]">
          <h1 className="xs:text-[20px] md:text-[28px] dark:text-white font-[semibold] text-center">
            {dil === "tm"
              ? "BIZE GOŞULYŇ WE BIZIŇ TÄZELIKLERIMIZDEN HABARLY BOLUŇ!"
              : dil === "ru"
              ? "ПРИСОЕДИНЯЙТЕСЬ К НАМ И БУДЬТЕ В КУРСЕ НАШИХ НОВОСТЕЙ!"
              : "JOIN US AND STAY UPDATED WITH OUR NEWS!"}
          </h1>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="xs:w-full lg:w-1/2 flex items-center justify-center flex-col gap-6"
          variants={itemVariants}
        >
          <motion.input
            type="text"
            placeholder={dil === "tm" ? "Ady" : dil === "ru" ? "Имя" : "Name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
            className="outline-none w-full bg-[#F6F8FC] dark:bg-[#313133] border border-[#E3E7EE] dark:border-borderDark dark:text-white rounded-[12px] xs:py-3 md:py-5 xs:px-2 md:px-4 font-[regular]"
            variants={itemVariants}
          />
          <motion.input
            type="email"
            value={email}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            className="outline-none w-full bg-[#F6F8FC] dark:bg-[#313133] border border-[#E3E7EE] dark:border-borderDark dark:text-white rounded-[12px] xs:py-3 md:py-5 xs:px-2 md:px-4 font-[regular]"
            variants={itemVariants}
          />
          <motion.button
            type="submit"
            className="w-full text-white outline-none rounded-[12px] text-center xs:py-2 md:py-3 xs:text-[16px] md:text-[18px] font-[regular] bg-blue"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            variants={itemVariants}
          >
            {dil === "tm" ? "Ugratmak" : dil === "ru" ? "Отправить" : "Send"}
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Home;
