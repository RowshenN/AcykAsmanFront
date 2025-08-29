<<<<<<< HEAD
import { motion } from "framer-motion";
import { SlPhone } from "react-icons/sl";
import CertificatesCarousel from "../../components/certificateCarousel/CertificatesCarousel";
import ContactUs from "../../components/contactUs/ContactUs";
import DownloadDoneWork from "../../components/download/DownloadDoneWork";

const AboutUs = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.div
        className="xs:w-full md:w-[80%] mx-auto text-center xs:mb-5 md:mb-[48px]"
        variants={itemVariants}
      >
        <h1 className="text-blue xs:text-[20px] xs:leading-6 md:leading-none md:text-[36px] lg:text-[48px] font-[semibold]">
          Edýän işlerimize höwesli bolsaňyz, täze mümkinçilikleri açmagy gowy
          görýän bolsaňyz, siziň bilen duşuşmaga sabyrsyzlyk bilen garaşýarys.
        </h1>
      </motion.div>

      {/* Contact Section */}
      <motion.div variants={itemVariants}>
        <ContactUs />
      </motion.div>

      {/* Download Section */}
      <motion.div variants={itemVariants}>
        <DownloadDoneWork />
      </motion.div>

      {/* Address */}
      <motion.div
        className="bg-[#F8F8F8] border xs:mb-10 md:mb-84 border-border dark:border-borderDark dark:bg-[#313133] rounded-[28px] xs:py-2 md:py-[14px] xs:px-10 md:px-[75px]"
        variants={itemVariants}
      >
        <div className="w-full lg:flex-row xs:flex-col flex items-start dark:text-white">
          <div className="w-full xs:pb-4 md:pb-0 xs:border-b lg:border-b-0 lg:border-r border-[#47627F]">
            <p className="text-[14px] xs:text-center md:text-left font-[regular] uppercase mb-2">
              Company Address
            </p>
            <h1 className="md:text-[28px] xs:text-center md:text-left xs:text-[20px] lg:text-[34px] font-[semibold]">
              Turkmenistan, Ashgabat, Ankara str., 10
            </h1>
          </div>

          <div className="w-full gap-4 py-7 xs:border-b lg:border-b-0 lg:border-r border-[#47627F] h-full flex items-center lg:justify-center xs:justify-start">
            <div className="bg-blue rounded-[18px] xs:py-2 md:py-3 xs:px-2 md:px-4">
              <SlPhone className="text-white xs:text-[30px] md:text-[42px]" />
            </div>
            <div className="flex items-baseline justify-start flex-col">
              <p className="text-[#41444B] dark:text-white text-[14px] font-[regular] mb-2">
                ASHGABAT OFFICE
              </p>
              <p className="text-[16px] font-[semibold]">+993 67 77 77 77</p>
              <p className="text-[16px] font-[semibold]">+993 67 77 77 77</p>
            </div>
          </div>

          <div className="w-full gap-4 py-7 h-full flex items-center lg:justify-center xs:justify-start	">
            <div className="bg-blue rounded-[18px] xs:py-2 md:py-3 xs:px-2 md:px-4">
              <SlPhone className="text-white xs:text-[30px] md:text-[42px]" />
            </div>
            <div className="flex items-baseline justify-start flex-col">
              <p className="text-[#41444B] dark:text-white text-[14px] font-[regular] mb-2">
                TURKMENBASHY OFFICE
              </p>
              <p className="text-[16px] font-[semibold]">+993 243 5 25 90</p>
              <p className="text-[16px] font-[semibold]">info@yashylgala.com</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Certificates Carousel */}
      <motion.div
        className="w-full flex gap-5 items-start mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <CertificatesCarousel />
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
=======
import { motion } from 'framer-motion'
import { SlPhone } from 'react-icons/sl'
import CertificatesCarousel from '../../components/certificateCarousel/CertificatesCarousel'
import ContactUs from '../../components/contactUs/ContactUs'
import DownloadDoneWork from '../../components/download/DownloadDoneWork'

const AboutUs = () => {
	const containerVariants = {
		hidden: {},
		visible: { transition: { staggerChildren: 0.2 } },
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: 'easeOut' },
		},
	}

	return (
		<motion.div
			className='w-full'
			initial='hidden'
			animate='visible'
			variants={containerVariants}
		>
			{/* Heading */}
			<motion.div
				className='w-[80%] mx-auto text-center mb-[48px]'
				variants={itemVariants}
			>
				<h1 className='text-blue text-[48px] font-[semibold]'>
					Edýän işlerimize höwesli bolsaňyz, täze mümkinçilikleri açmagy gowy
					görýän bolsaňyz, siziň bilen duşuşmaga sabyrsyzlyk bilen garaşýarys.
				</h1>
			</motion.div>

			{/* Contact Section */}
			<motion.div variants={itemVariants}>
				<ContactUs />
			</motion.div>

			{/* Download Section */}
			<motion.div variants={itemVariants}>
				<DownloadDoneWork />
			</motion.div>

			{/* Address */}
			<motion.div
				className='bg-[#F8F8F8] border mb-84 border-border dark:border-borderDark dark:bg-[#313133] rounded-[28px] py-[14px] px-[75px]'
				variants={itemVariants}
			>
				<div className='w-full flex items-center dark:text-white'>
					<div className='w-full border-r border-[#47627F]'>
						<p className='text-[14px] font-[regular] uppercase mb-2'>
							Company Address
						</p>
						<h1 className='text-[34px] font-[semibold]'>
							Turkmenistan, Ashgabat, Ankara str., 10
						</h1>
					</div>

					<div className='w-full gap-4 py-7 border-r border-[#47627F] h-full flex items-center justify-center'>
						<div className='bg-blue rounded-[18px] py-3 px-4'>
							<SlPhone className='text-white text-[42px]' />
						</div>
						<div className='flex items-baseline justify-start flex-col'>
							<p className='text-[#41444B] dark:text-white text-[14px] font-[regular] mb-2'>
								ASHGABAT OFFICE
							</p>
							<p className='text-[16px] font-[semibold]'>+993 67 77 77 77</p>
							<p className='text-[16px] font-[semibold]'>+993 67 77 77 77</p>
						</div>
					</div>

					<div className='w-full gap-4 py-7 h-full flex items-center justify-center'>
						<div className='bg-blue rounded-[18px] py-3 px-4'>
							<SlPhone className='text-white text-[42px]' />
						</div>
						<div className='flex items-baseline justify-start flex-col'>
							<p className='text-[#41444B] dark:text-white text-[14px] font-[regular] mb-2'>
								TURKMENBASHY OFFICE
							</p>
							<p className='text-[16px] font-[semibold]'>+993 243 5 25 90</p>
							<p className='text-[16px] font-[semibold]'>info@yashylgala.com</p>
						</div>
					</div>
				</div>
			</motion.div>

			{/* Certificates Carousel */}
			<motion.div
				className='w-full flex gap-5 items-start mb-16'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.2 }}
				variants={containerVariants}
			>
				<CertificatesCarousel />
			</motion.div>
		</motion.div>
	)
}

export default AboutUs
>>>>>>> 79beaac15ae2517c6e88e0d069e056e8bb9cc177
