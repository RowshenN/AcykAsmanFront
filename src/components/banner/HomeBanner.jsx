import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Example banner images
import {
	default as surat1,
	default as surat2,
	default as surat3,
} from '../../images/homeBanner.png'

const slides = [
	{
		image: surat1,
		title: 'Phish Concert | Sphere, Awaza',
		link: '/services/inner?type=video',
	},
	{
		image: surat2,
		title: 'Art Exhibition | Luminar Space',
		link: '/services/inner?type=photo',
	},
	{
		image: surat3,
		title: 'Live Performance | Turkmen Theater',
		link: '/services/inner?type=video',
	},
]

const HomeBanner = () => {
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const id = setInterval(() => {
			setIndex(prev => (prev + 1) % slides.length)
		}, 5000)
		return () => clearInterval(id)
	}, [])

	return (
		<div className='w-full xs:mb-10 md:mb-84 relative xs:min-h-[85vh] md:min-h-[90vh] rounded-[28px] h-full overflow-hidden'>
			{/* Background carousel */}
			<motion.div
				className='flex h-full w-full'
				animate={{ x: `-${index * 100}%` }}
				transition={{ duration: 0.8, ease: 'easeInOut' }}
			>
				{slides.map((slide, i) => (
					<img
						key={i}
						src={slide.image}
						alt={`slide-${i}`}
						className='w-full xs:min-h-[85vh] md:min-h-[90vh] h-full object-cover rounded-[28px] flex-shrink-0'
					/>
				))}
			</motion.div>

			{/* Overlay text & button */}
			<motion.div
				key={index}
				className='absolute text-white left-[3%] xs:bottom-[3%] md:bottom-[7%] xs:w-[80%] md:w-[65%] lg:w-[45%]'
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
			>
				<h1 className='xs:text-[30px] md:text-[40px] lg:text-[60px] font-[bold] xs:mb-5 md:mb-4 leading-tight'>
					{slides[index].title}
				</h1>
				<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }}>
					<Link
						to={slides[index].link}
						className='border hover:bg-white/40 transition-all duration-200 border-white rounded-[28px] xs:py-[11px] md:py-[14px] xs:px-4  md:px-7'
					>
						Giňişleýin
					</Link>
				</motion.div>
			</motion.div>

			{/* numbers  */}
			<div className='flex w-fit top-[25%] right-[7%] absolute text-white flex-col items-center justify-center gap-5'>
				{slides.map((_, i) => (
					<motion.div
						key={i}
						className='w-full cursor-pointer flex items-center justify-end gap-2'
						onClick={() => setIndex(i)}
					>
						{/* line appears only for active */}
						<div
							className={`h-[1px] transition-all duration-500 ${
								index === i ? 'w-[54px] bg-white' : 'w-[20px] bg-white/40'
							}`}
						></div>
						<p
							className={`transition-colors duration-300 ${
								index === i ? 'text-white' : 'text-white/60'
							}`}
						>
							{String(i + 1).padStart(2, '0')}
						</p>
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default HomeBanner
