import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Carousel = ({ images, interval = 3000, className = '' }) => {
	const [index, setIndex] = useState(0)
	const [paused, setPaused] = useState(false)

	useEffect(() => {
		if (paused) return

		const id = setInterval(() => {
			setIndex(prev => (prev + 1) % images.length)
		}, interval)

		return () => clearInterval(id)
	}, [paused, images.length, interval])

	return (
		<div
			className={`overflow-hidden relative ${className}`}
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			<motion.div
				className='flex h-full'
				animate={{ x: `-${index * 100}%` }}
				transition={{ duration: 0.8, ease: 'easeInOut' }}
			>
				{images.map((img, i) => (
					<img
						key={i}
						src={img}
						alt={`slide-${i}`}
						className='w-full rounded-[20px] md:max-h-[360px]  h-full object-cover flex-shrink-0'
					/>
				))}
			</motion.div>
		</div>
	)
}

export default Carousel
