<<<<<<< HEAD
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import surat from "../../images/contactUs.png";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const location = useLocation();

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
          Habarlaşmak üçin
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
          <motion.input
            type="text"
            placeholder="Ady"
            className="outline-none w-full bg-[#F6F8FC] dark:bg-[#313133] border border-[#E3E7EE] dark:border-borderDark dark:text-white rounded-[12px] xs:py-3 md:py-5 xs:px-2 md:px-4 font-[regular]"
            variants={itemVariants}
          />
          <motion.input
            type="email"
            placeholder="E-mail"
            className="outline-none w-full bg-[#F6F8FC] dark:bg-[#313133] border border-[#E3E7EE] dark:border-borderDark dark:text-white rounded-[12px] xs:py-3 md:py-5 xs:px-2 md:px-4 font-[regular]"
            variants={itemVariants}
          />
          <motion.textarea
            placeholder="Bellik..."
            className="outline-none xs:min-h-[100px] md:min-h-[146px] w-full bg-[#F6F8FC] dark:bg-[#313133] border border-[#E3E7EE] dark:border-borderDark dark:text-white rounded-[12px] xs:py-3 md:py-5 xs:px-2 md:px-4 font-[regular]"
            variants={itemVariants}
          ></motion.textarea>
          <motion.button
            type="submit"
            className="w-full text-white outline-none rounded-[12px] text-center xs:py-2 md:py-3 xs:text-[16px] md:text-[18px] font-[regular] bg-blue"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            variants={itemVariants}
          >
            Ugratmak
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
=======
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import surat from '../../images/contactUs.png'

const ContactUs = () => {
	const handleSubmit = e => {
		e.preventDefault()
	}

	const location = useLocation()

	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
			easing: 'ease-out',
		})
	}, [])

	const containerVariants = {
		hidden: {},
		visible: { transition: { staggerChildren: 0.2 } },
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	}

	return (
		<motion.div
			className='w-full xs:mb-10 md:mb-84'
			variants={containerVariants}
			initial='hidden'
			animate='visible'
		>
			{location.pathname === '/' && (
				<motion.h1
					className='text-left w-full text-[24px] font-[semibold] mb-[18px] dark:text-white'
					variants={itemVariants}
				>
					Habarlaşmak üçin
				</motion.h1>
			)}

			<motion.div
				className='w-full lg:flex-row xs:flex-col flex items-start xs:gap-5 md:gap-9'
				variants={containerVariants}
			>
				{/* Image */}
				<motion.div className='xs:w-full lg:w-1/2' variants={itemVariants}>
					<img
						src={surat}
						alt='surat'
						className='w-full object-cover h-full max-h-[400px] rounded-[14px]'
					/>
				</motion.div>

				{/* Form */}
				<motion.form
					onSubmit={handleSubmit}
					className='xs:w-full 	 md:w-1/2 flex items-center justify-center flex-col gap-6'
					variants={itemVariants}
				>
					<motion.input
						type='text'
						placeholder='Ady'
						className='outline-none w-full bg-[#F6F8FC] dark:bg-[#313133] border border-[#E3E7EE] dark:border-borderDark dark:text-white rounded-[12px] xs:py-3 md:py-5 xs:px-2 md:px-4 font-[regular]'
						variants={itemVariants}
					/>
					<motion.input
						type='email'
						placeholder='E-mail'
						className='outline-none w-full bg-[#F6F8FC] dark:bg-[#313133] border border-[#E3E7EE] dark:border-borderDark dark:text-white rounded-[12px] xs:py-3 md:py-5 xs:px-2 md:px-4 font-[regular]'
						variants={itemVariants}
					/>
					<motion.textarea
						placeholder='Bellik...'
						className='outline-none xs:min-h-[100px] md:min-h-[146px] w-full bg-[#F6F8FC] dark:bg-[#313133] border border-[#E3E7EE] dark:border-borderDark dark:text-white rounded-[12px] xs:py-3 md:py-5 xs:px-2 md:px-4 font-[regular]'
						variants={itemVariants}
					></motion.textarea>
					<motion.button
						type='submit'
						className='w-full text-white outline-none rounded-[12px] text-center xs:py-2 md:py-3 xs:text-[16px] md:text-[18px] font-[regular] bg-blue'
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.97 }}
						variants={itemVariants}
					>
						Ugratmak
					</motion.button>
				</motion.form>
			</motion.div>
		</motion.div>
	)
}

export default ContactUs
>>>>>>> 79beaac15ae2517c6e88e0d069e056e8bb9cc177
