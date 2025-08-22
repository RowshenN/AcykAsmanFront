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
			className='w-full mb-84'
			variants={containerVariants}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: false }}
			data-aos='fade-up'
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
				className='w-full flex items-start gap-9'
				variants={containerVariants}
			>
				{/* Image */}
				<motion.div className='w-1/2' variants={itemVariants}>
					<img
						src={surat}
						alt='image'
						className='w-full object-cover h-full max-h-[400px] rounded-[14px]'
					/>
				</motion.div>

				{/* Form */}
				<motion.form
					onSubmit={handleSubmit}
					className='w-1/2 flex items-center justify-center flex-col gap-6'
					variants={itemVariants}
				>
					<motion.input
						type='text'
						placeholder='Ady'
						className='outline-none w-full bg-[#F6F8FC] dark:bg-[#313133] border border-[#E3E7EE] dark:border-borderDark dark:text-white rounded-[12px] py-5 px-4 font-[regular]'
						variants={itemVariants}
					/>
					<motion.input
						type='email'
						placeholder='E-mail'
						className='outline-none w-full bg-[#F6F8FC] dark:bg-[#313133] border border-[#E3E7EE] dark:border-borderDark dark:text-white rounded-[12px] py-5 px-4 font-[regular]'
						variants={itemVariants}
					/>
					<motion.textarea
						placeholder='Bellik...'
						className='outline-none min-h-[146px] w-full bg-[#F6F8FC] dark:bg-[#313133] border border-[#E3E7EE] dark:border-borderDark dark:text-white rounded-[12px] py-5 px-4 font-[regular]'
						variants={itemVariants}
					></motion.textarea>
					<motion.button
						type='submit'
						className='w-full text-white outline-none rounded-[12px] text-center py-3 text-[18px] font-[regular] bg-blue'
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
