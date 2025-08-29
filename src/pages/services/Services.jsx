import AOS from 'aos'
import 'aos/dist/aos.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import PhotoCard from '../../components/taslamaCard/PhotoCard'
import VideoCard from '../../components/taslamaCard/VideoCard'

const Services = () => {
	const [name, setName] = useState('all')

	// Initialize AOS (optional, for elements that still use it)
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
			easing: 'ease-out',
		})
	}, [])

	// Framer Motion variants
	const containerVariants = {
		hidden: {},
		visible: { transition: { staggerChildren: 0.15 } },
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: 'easeOut' },
		},
	}

	// Decide which cards to show
	const cards = [
		<PhotoCard key='1' />,
		<VideoCard key='2' />,
		<PhotoCard key='3' />,
		<VideoCard key='4' />,
		<PhotoCard key='5' />,
		<VideoCard key='6' />,
		<PhotoCard key='7' />,
		<PhotoCard key='8' />,
		<VideoCard key='9' />,
	]

	const filteredCards = cards.filter((card, idx) => {
		if (name === 'all') return true
		if (name === 'photos' && card.type === PhotoCard) return true
		if (name === 'videos' && card.type === VideoCard) return true
		return false
	})

	return (
		<div className='w-full'>
			{/* Top heading + filters with mount animation */}
			<motion.div
				className='flex xs:mb-5 md:mb-[52px] items-center justify-center'
				initial='hidden'
				animate='visible'
				variants={containerVariants}
			>
				<motion.div
					className='xs:w-full sm:w-[70%] lg:w-[55%] mx-auto'
					variants={itemVariants}
				>
					<motion.h1
						className='xs:text-[20px] md:text-[30px] lg:text-[48px] xs:mb-5 md:mb-[48px] text-center font-[semibold] text-blue'
						variants={itemVariants}
					>
						Her pikiri hakykata öwürmek üçin hyzmatlaryň doly spektrini
						hödürleýäris
					</motion.h1>

					<motion.div
						className='w-full flex items-center xs:justify-center xs:gap-2 md:gap-0 md:justify-between'
						variants={itemVariants}
					>
						<div
							onClick={() => setName('all')}
							className={`${
								name === 'all'
									? 'bg-blue text-white '
									: ' bg-white dark:bg-dark dark:text-white text-black '
							}  border border-border dark:border-borderDark dark:hover:bg-blue rounded-full cursor-pointer hover:bg-blue/80 hover:text-white transition-all duration-200 xs:py-1 md:py-[13px] xs:px-4 md:px-[91px] xs:text-[16px] md:text-[18px] font-[regular]`}
						>
							<p>Ahlisi</p>
						</div>

						<div
							onClick={() => setName('photos')}
							className={`${
								name === 'photos'
									? 'bg-blue text-white '
									: ' bg-white dark:bg-dark dark:text-white text-black '
							}  border border-border dark:border-borderDark dark:hover:bg-blue rounded-full cursor-pointer hover:bg-blue/80 hover:text-white transition-all duration-200 xs:py-1 md:py-[13px] xs:px-4 md:px-[91px] xs:text-[16px] md:text-[18px] font-[regular]`}
						>
							<p>Photo</p>
						</div>

						<div
							onClick={() => setName('videos')}
							className={`${
								name === 'videos'
									? 'bg-blue text-white '
									: ' bg-white dark:bg-dark dark:text-white text-black '
							}  border border-border dark:border-borderDark dark:hover:bg-blue rounded-full cursor-pointer hover:bg-blue/80 hover:text-white transition-all duration-200 xs:py-1 md:py-[13px] xs:px-4 md:px-[91px] xs:text-[16px] md:text-[18px] font-[regular]`}
						>
							<p>Wideo</p>
						</div>
					</motion.div>
				</motion.div>
			</motion.div>

			{/* Cards with animations */}
			<AnimatePresence mode='wait'>
				<motion.div
					className='w-full grid md:gap-9 xs:grid-cols-2 md:grid-cols-taslama-cards xs:gap-2'
					variants={containerVariants}
					initial='hidden'
					animate='visible'
					key={name} // re-render animation on filter change
				>
					{filteredCards.map((card, idx) => (
						<motion.div
							key={idx}
							variants={itemVariants}
							className='hover:bg-[#F3F3F3] dark:hover:bg-[#313133] transition-all duration-200 rounded-[20px] cursor-pointer px-[14px] pt-[10px] pb-[35px]'
							data-aos='fade-up'
						>
							{card}
						</motion.div>
					))}
				</motion.div>
			</AnimatePresence>
		</div>
	)
}

export default Services
