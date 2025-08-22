import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { BsDownload } from 'react-icons/bs'

const DownloadDoneWork = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
			easing: 'ease-out',
		})
	}, [])

	// Container variants
	const containerVariants = {
		hidden: {},
		visible: { transition: { staggerChildren: 0.2 } },
	}

	// Item variants
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
			className='mb-[138px] w-full border border-border dark:border-borderDark rounded-[28px] bg-[#F8F8F8] dark:bg-[#313133] flex items-center justify-center py-[25px]'
			variants={containerVariants}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: false }}
			data-aos='fade-up'
		>
			<motion.div
				className='w-fit flex items-center justify-center flex-col gap-4'
				variants={itemVariants}
			>
				<motion.h1
					className='text-[32px] font-[bold] dark:text-white'
					variants={itemVariants}
				>
					Mahabat we ýerine ýetirilen işler bir ýerde
				</motion.h1>
				<motion.div
					className='bg-blue h-[2px] rounded-[3px] w-[240px]'
					variants={itemVariants}
				></motion.div>
				<motion.p
					className='text-[20px] font-[regular] dark:text-white'
					variants={itemVariants}
				>
					Kompaniýa mahabat kitapçasy (Katalogy)
				</motion.p>
				<motion.button
					className='w-fit flex items-center justify-center gap-[10px] bg-blue outline-none text-white rounded-[28px] py-[14.5px] px-[44px] text-[16px] font-[regular]'
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<BsDownload className='text-[24px] text-white' /> Ýüklap almak
				</motion.button>
			</motion.div>
		</motion.div>
	)
}

export default DownloadDoneWork
