import { motion } from 'framer-motion'
import {
	LiaLongArrowAltLeftSolid,
	LiaLongArrowAltRightSolid,
} from 'react-icons/lia'
import { SlPhone } from 'react-icons/sl'
import ContactUs from '../../components/contactUs/ContactUs'
import DownloadDoneWork from '../../components/download/DownloadDoneWork'
import surat from '../../images/certificate.png'

const AboutUs = () => {
	// Variants
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
			whileInView='visible'
			viewport={{ once: false, amount: 0.2 }}
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
				className='bg-[#F8F8F8] border mb-84 border-border dark:border-borderDark dark:bg-[#313133]  rounded-[28px] py-[14px] px-[75px]'
				variants={itemVariants}
			>
				<div className='w-full flex items-center dark:text-white'>
					<div className='w-full  border-r border-[#47627F]'>
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
							<p className='text-[16px] font-[semibold]'>+993 243 5 25 90</p>
							<p className='text-[16px] font-[semibold]'>info@yashylgala.com</p>
						</div>
					</div>
				</div>
			</motion.div>

			{/* Certificates */}
			<motion.div
				className='w-full flex gap-5 items-start mb-16'
				variants={itemVariants}
			>
				{/* Left Text */}
				<div className='w-[45%] dark:text-white'>
					<motion.h1
						className='text-[32px] mb-[34px] font-[semibold]'
						variants={itemVariants}
					>
						Our licenses:
					</motion.h1>
					<motion.p
						className='text-[18px] mb-7 font-[regular]'
						variants={itemVariants}
					>
						We are ISO 9001:2008 Certified Company and committed to supply
						highest quality of products and services to our clients. The
						Management makes sure that the material or service rendered meet or
						exceed the customer expectations
					</motion.p>

					<div className='flex items-center justify-start gap-6'>
						<motion.div
							className='py-3 transition-all duration-200 px-3 rounded-full border border-[#66819F] bg-[#F9FAFC] dark:bg-[#161618] cursor-pointer dark:hover:bg-blue hover:bg-blue group'
							variants={itemVariants}
						>
							<LiaLongArrowAltLeftSolid className='text-[24px] group-hover:text-white' />
						</motion.div>

						<motion.div
							className='py-3 transition-all duration-200 px-3 rounded-full border border-[#66819F] bg-[#F9FAFC] dark:bg-[#161618] cursor-pointer hover:bg-blue group dark:hover:bg-blue'
							variants={itemVariants}
						>
							<LiaLongArrowAltRightSolid className='text-[24px] group-hover:text-white' />
						</motion.div>
					</div>
				</div>

				{/* Right Images */}
				<motion.div
					className='w-[55%] dark:text-white flex items-start justify-center gap-10'
					variants={containerVariants}
				>
					{[...Array(3)].map((_, i) => (
						<motion.div
							key={i}
							className='flex flex-col items-center justify-center gap-3'
							variants={itemVariants}
						>
							<img
								src={surat}
								alt={`certificate-${i}`}
								className='object-contain shadow-md max-w-[218px] w-full max-h-[300px] h-full rounded-[4px]'
							/>
							<p className='text-[16px] font-[regular]'>Ministry of Energy</p>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</motion.div>
	)
}

export default AboutUs
