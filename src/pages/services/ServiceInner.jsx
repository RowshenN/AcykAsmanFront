import { Carousel } from 'antd'
import { AnimatePresence, motion } from 'framer-motion'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { useNavigate, useSearchParams } from 'react-router-dom'

import PhotoCard from '../../components/taslamaCard/PhotoCard'
import VideoCard from '../../components/taslamaCard/VideoCard'
import VideoPlayer from '../../components/videPlayer/VideoPlayer'
import surat from '../../images/carouselImg.png'

const ServiceInner = () => {
	const [searchParams] = useSearchParams()
	const type = searchParams.get('type')
	const navigate = useNavigate()

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
		<motion.div
			initial='hidden'
			animate='visible'
			exit='hidden'
			variants={containerVariants}
			className='w-full'
		>
			{/* back button */}
			<motion.div
				className='w-full flex items-center justify-start mb-[38px]'
				variants={itemVariants}
			>
				<RiArrowLeftSLine
					onClick={() => navigate(-1)}
					className='text-[24px] dark:text-white cursor-pointer'
				/>
			</motion.div>

			{/* header info */}
			<motion.div
				className='w-full md:flex-row xs:flex-col flex xs:mb-5 md:mb-7 xs:items-baseline md:items-center justify-start xs:gap-3 md:gap-6'
				variants={itemVariants}
			>
				<h1 className='xs:text-[25px] md:text-[32px] dark:text-white font-[semibold]'>
					Жаркий Новый Год
				</h1>

				<div className='xs:py-[6px] md:py-[13px] xs:px-5 md:px-[30.5px] rounded-[6px] xs:text-[16px] md:text-[18px] font-[regular] bg-border'>
					<p>{type === 'photo' ? 'Foto' : 'Wideo'}</p>
				</div>

				<p className='text-[18px] font-[regular] dark:text-white'>15.05.2025</p>
			</motion.div>

			{/* carousel or video */}
			<motion.div
				className='w-full xs:mb-9 md:mb-[72px]'
				variants={itemVariants}
			>
				<AnimatePresence mode='wait'>
					{type === 'photo' ? (
						<motion.div
							key='photoCarousel'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.5 }}
						>
							<Carousel
								arrows
								infinite
								autoplay
								speed={1000}
								autoplaySpeed={4000}
							>
								{[surat, surat, surat].map((img, i) => (
									<div key={i} className=' md:max-h-[80vh] h-full w-full'>
										<img
											src={img}
											alt='carousel'
											className='w-full xs:min-h-[300px] md:min-h-full h-full object-cover'
										/>
									</div>
								))}
							</Carousel>
						</motion.div>
					) : (
						<motion.div
							key='videoPlayer'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.5 }}
							className='w-full rounded-2xl overflow-hidden'
						>
							<VideoPlayer src={'/videos/video.mp4'} />
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>

			{/* other photos/videos grid */}
			<motion.div
				className='w-full'
				variants={containerVariants}
				initial='hidden'
				animate='visible'
			>
				<h1 className='xs:mb-5 md:mb-[42px] dark:text-white xs:text-[20px] md:text-[24px] font-[semibold]'>
					{type === 'photo' ? 'Beýleki suratlar' : 'Beýleki wideolar'}
				</h1>

				<motion.div
					className='grid xs:grid-cols-2 md:grid-cols-taslama-cards xs:gap-3 md:gap-8 w-full'
					variants={containerVariants}
				>
					{type === 'photo'
						? [...Array(3)].map((_, i) => (
								<motion.div
									key={i}
									variants={itemVariants}
									initial='hidden'
									animate='visible'
									className='w-full md:hover:bg-[#F3F3F3] rounded-[20px] relative cursor-pointer md:px-[14px] xs:px-2 pt-[10px] xs:pb-5 md:pb-[35px]  dark:hover:bg-[#313133] transition-all duration-200'
								>
									<PhotoCard type='photo' />
								</motion.div>
						  ))
						: [...Array(3)].map((_, i) => (
								<motion.div
									key={i}
									variants={itemVariants}
									initial='hidden'
									animate='visible'
								>
									<VideoCard type='video' />
								</motion.div>
						  ))}
				</motion.div>
			</motion.div>
		</motion.div>
	)
}

export default ServiceInner
