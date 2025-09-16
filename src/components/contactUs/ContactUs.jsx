import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import surat from "../../images/contactUs.png";

import { SebedimContext } from "../../utils/Context";
import { useCreateContactMutation } from "../../utils/apiSlice/contact";
import { message } from "antd";

const ContactUs = () => {
  const location = useLocation();
  const { dil } = useContext(SebedimContext);

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [createContact, { isLoading }] = useCreateContactMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !text) {
      message.warning("Please fill in required fields.");
      return;
    }

    try {
      await createContact({ title, name, email, text }).unwrap();
      message.success("Message sent successfully!");
      // setTitle("");
      setName("");
      setEmail("");
      setText("");
    } catch (err) {
      console.error(err);
      message.warning("Failed to send message. Try again.");
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out",
    });
  }, []);

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
      className="w-full xs:mb-10 md:mb-84"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {location.pathname === "/" && (
        <motion.h1
          className="text-left w-full text-[24px] font-[semibold] mb-[18px] dark:text-white"
          variants={itemVariants}
        >
          {dil === "tm"
            ? "Habarlaşmak üçin"
            : dil === "ru"
            ? "Для связи"
            : "For Contact"}
        </motion.h1>
      )}

      <motion.div
        className="w-full lg:flex-row xs:flex-col flex items-start xs:gap-5 md:gap-9"
        variants={containerVariants}
      >
        {/* Image */}
        <motion.div className="xs:w-full lg:w-1/2" variants={itemVariants}>
          <img
            src={surat}
            alt="surat"
            className="w-full object-cover h-full max-h-[400px] rounded-[14px]"
          />
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="xs:w-full lg:w-1/2 flex items-center justify-center flex-col gap-6"
          variants={itemVariants}
        >
          {/* <motion.input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="outline-none w-full bg-[#F6F8FC] dark:bg-[#313133] border border-[#E3E7EE] dark:border-borderDark dark:text-white rounded-[12px] xs:py-3 md:py-5 xs:px-2 md:px-4 font-[regular]"
            variants={itemVariants}
          /> */}
          <motion.input
            required
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="outline-none w-full bg-[#F6F8FC] dark:bg-[#313133] border border-[#E3E7EE] dark:border-borderDark dark:text-white rounded-[12px] xs:py-3 md:py-5 xs:px-2 md:px-4 font-[regular]"
            variants={itemVariants}
          />
          <motion.input
            required
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none w-full bg-[#F6F8FC] dark:bg-[#313133] border border-[#E3E7EE] dark:border-borderDark dark:text-white rounded-[12px] xs:py-3 md:py-5 xs:px-2 md:px-4 font-[regular]"
            variants={itemVariants}
          />
          <motion.textarea
            placeholder="Bellik..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="outline-none xs:min-h-[100px] md:min-h-[146px] w-full bg-[#F6F8FC] dark:bg-[#313133] border border-[#E3E7EE] dark:border-borderDark dark:text-white rounded-[12px] xs:py-3 md:py-5 xs:px-2 md:px-4 font-[regular]"
            variants={itemVariants}
          ></motion.textarea>
          <motion.button
            type="submit"
            disabled={isLoading}
            className="w-full text-white outline-none rounded-[12px] text-center xs:py-2 md:py-3 xs:text-[16px] md:text-[18px] font-[regular] bg-blue"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            variants={itemVariants}
          >
            {dil === "tm" ? "Ugratmak" : dil === "ru" ? "Отправить" : "Send"}
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
