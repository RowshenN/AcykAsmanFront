import AOS from 'aos'
import 'aos/dist/aos.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PhotoCard from '../../components/taslamaCard/PhotoCard'
import VideoCard from '../../components/taslamaCard/VideoCard'

const Services = () => {
	const location = useLocation()
	const [name, setName] = useState('all')

	// Initialize AOS
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
			<div className='flex mb-[52px] items-center justify-center'>
				<div className='w-[55%] mx-auto'>
					<h1 className='text-[48px] mb-[48px] text-center font-[semibold] text-blue'>
						Her pikiri hakykata öwürmek üçin hyzmatlaryň doly spektrini
						hödürleýäris
					</h1>

					<div className='w-full flex items-center justify-between'>
						<div
							onClick={() => setName('all')}
							className={`${
								name === 'all'
									? 'bg-blue text-white '
									: ' bg-white dark:bg-dark dark:text-white text-black '
							}  border border-border dark:border-borderDark dark:hover:bg-blue rounded-full cursor-pointer hover:bg-blue/80 hover:text-white transition-all duration-200 py-[13px] px-[91px] text-[18px] font-[regular]`}
						>
							<p>Ahlisi</p>
						</div>

						<div
							onClick={() => setName('photos')}
							className={`${
								name === 'photos'
									? 'bg-blue text-white '
									: ' bg-white dark:bg-dark dark:text-white text-black '
							}  border border-border dark:border-borderDark dark:hover:bg-blue rounded-full cursor-pointer hover:bg-blue/80 hover:text-white transition-all duration-200 py-[13px] px-[91px] text-[18px] font-[regular]`}
						>
							<p>Photo</p>
						</div>

						<div
							onClick={() => setName('videos')}
							className={`${
								name === 'videos'
									? 'bg-blue text-white '
									: ' bg-white dark:bg-dark dark:text-white text-black '
							}  border border-border dark:border-borderDark dark:hover:bg-blue rounded-full cursor-pointer hover:bg-blue/80 hover:text-white transition-all duration-200 py-[13px] px-[91px] text-[18px] font-[regular]`}
						>
							<p>Wideo</p>
						</div>
					</div>
				</div>
			</div>

			{/* Cards with animations */}
			<AnimatePresence mode='wait'>
				<motion.div
					className='w-full grid grid-cols-taslama-cards gap-9'
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
