import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import surat from '../../images/homeBanner.png'

const HomeBanner = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
			easing: 'ease-out',
		})
	}, [])

	const numberVariants = {
		hidden: { opacity: 0 },
		visible: i => ({
			opacity: 1,
			transition: { delay: i * 0.2, duration: 0.5 },
		}),
	}

	return (
		<div className='w-full xs:mb-10 md:mb-84 relative xs:min-h-[85vh] md:min-h-[90vh] rounded-[28px] h-full overflow-hidden'>
			{/* Background image */}
			<motion.img
				src={surat}
				alt='surat'
				className='w-full xs:min-h-[85vh] md:min-h-[90vh] h-full rounded-[28px] object-cover'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
			/>

			{/* Text and button */}
			<motion.div
				className='absolute text-white left-[3%] xs:bottom-[3%] md:bottom-[7%] xs:w-[80%] md:w-[65%] lg:w-[45%]'
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
			>
				<h1 className='xs:text-[30px] md:text-[40px] lg:text-[60px] font-[bold] xs:mb-5 md:mb-2'>
					Phish Concert | Sphere, Awaza
				</h1>
				<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }}>
					<Link
						to={'/services/inner?type=video'}
						className='border hover:bg-white/40 transition-all duration-200 border-white rounded-[28px] xs:py-[11px] md:py-[14px] xs:px-4  md:px-7'
					>
						Ginişleýin
					</Link>
				</motion.div>
			</motion.div>

			{/* Right-side numbers */}
			<div className='flex w-fit top-[25%] right-[7%] absolute text-white flex-col items-center justify-center gap-5'>
				{['01', '02', '03'].map((num, index) => (
					<motion.div
						className='w-full cursor-pointer flex items-center justify-end gap-2'
						key={num}
						custom={index}
						variants={numberVariants}
						initial='hidden'
						animate='visible'
					>
						<div className='w-[54px] h-[1px] bg-white'></div>
						<p>{num}</p>
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default HomeBanner
