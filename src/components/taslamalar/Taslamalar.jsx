import AOS from 'aos'
import 'aos/dist/aos.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaAlignLeft, FaThLarge } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import LongPhotoCard from '../taslamaCard/LongPhotoCard'
import PhotoCard from '../taslamaCard/PhotoCard'
// import LongVideoCard from '../taslamaCard/LongVideoCard'
// import VideoCard from '../taslamaCard/VideoCard'

const Taslamalar = () => {
	const [grid, setGrid] = useState(true)

	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
			easing: 'ease-out',
		})
	}, [])

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

	return (
		<div className='w-full mb-[42px]'>
			{/* Header */}
			<motion.div
				className='w-full xs:mb-5 md:mb-[34px] flex items-center justify-between'
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false }}
				data-aos='fade-up'
			>
				<motion.h1
					className='xs:text-[25px] md:text-[32px] dark:text-white font-[semibold]'
					variants={itemVariants}
					data-aos='fade-up'
				>
					Taslamalar we sergiler
				</motion.h1>

				{/* Grid controller */}
				<motion.div
					className='flex items-center justify-center xs:gap-3 md:gap-[26px]'
					variants={itemVariants}
				>
					<FaThLarge
						onClick={() => setGrid(true)}
						className={`xs:w-5 md:w-[28px] ${
							grid ? 'text-blue' : 'text-[#797979]'
						} transition-all duration-200 hover:text-blue h-[28px] object-contain cursor-pointer`}
					/>
					<FaAlignLeft
						onClick={() => setGrid(false)}
						className={`xs:w-5 md:w-[28px] ${
							!grid ? 'text-blue' : 'text-[#797979]'
						} transition-all duration-200 hover:text-blue h-[28px] object-contain cursor-pointer`}
					/>
				</motion.div>
			</motion.div>

			{/* Cards */}
			<div className='w-full mb-[44px]'>
				<AnimatePresence mode='wait'>
					{grid ? (
						<motion.div
							key='grid'
							className='grid xs:grid-cols-2 md:grid-cols-taslama-cards xs:gap-3 md:gap-[34px] w-full'
							variants={{
								hidden: {},
								visible: { transition: { staggerChildren: 0.2 } },
							}}
							initial='hidden'
							animate='visible'
							exit='hidden'
							layout
						>
							{[...Array(5)].map((_, i) => (
								<motion.div
									key={i}
									layout
									variants={{
										hidden: { opacity: 0, y: 20 },
										visible: {
											opacity: 1,
											y: 0,
											transition: { duration: 0.5 },
										},
									}}
									className='w-full md:hover:bg-[#F3F3F3] rounded-[20px] relative cursor-pointer md:px-[14px] xs:px-2 pt-[10px] xs:pb-5 md:pb-[35px]  dark:hover:bg-[#313133] transition-all duration-200'
								>
									<PhotoCard />
									{/* <VideoCard /> */}
								</motion.div>
							))}
						</motion.div>
					) : (
						<motion.div
							key='list'
							className='flex flex-col items-center justify-center w-full divide-y divide-border'
							variants={{
								hidden: {},
								visible: { transition: { staggerChildren: 0.2 } },
							}}
							initial='hidden'
							animate='visible'
							exit='hidden'
							layout
						>
							{[...Array(3)].map((_, i) => (
								<motion.div
									key={i}
									layout
									variants={{
										hidden: { opacity: 0, y: 20 },
										visible: {
											opacity: 1,
											y: 0,
											transition: { duration: 0.5 },
										},
									}}
									className='w-full'
								>
									<LongPhotoCard />
									{/* <LongVideoCard /> */}
								</motion.div>
							))}
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			{/* Button */}

			<Link to={'/services'}>
				<motion.div
					className='w-full flex items-center justify-center'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: false }}
					data-aos='fade-up'
				>
					<motion.button
						className='w-fit text-center hover:bg-blue/80 transition-all duration-200 bg-blue text-white text-[14px] font-[regular] rounded-[28px] py-[14px] px-[32.5px]'
						variants={itemVariants}
					>
						Ählisini görmek
					</motion.button>
				</motion.div>
			</Link>
		</div>
	)
}

export default Taslamalar
