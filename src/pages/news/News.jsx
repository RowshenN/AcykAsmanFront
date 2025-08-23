import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import NewsCard from '../../components/newsCard/NewsCard'

const News = () => {
	const location = useLocation()

	const containerVariants = {
		hidden: {},
		visible: {
			transition: { staggerChildren: 0.2 },
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: 'easeOut' },
		},
	}

	const newsArray = [...Array(7)]

	return (
		<motion.div
			key={location.pathname}
			className='w-full'
			initial='hidden'
			animate='visible'
			variants={containerVariants}
		>
			{/* Page Header */}
			<motion.div
				className='w-full flex items-center justify-start mb-[18px]'
				variants={itemVariants}
			>
				<h1 className='text-[24px] font-[semibold] dark:text-white'>
					Tazelikler
				</h1>
			</motion.div>

			{/* Cards */}
			<motion.div
				className='w-full grid xs:grid-cols-2 md:grid-cols-news-cards gap-5'
				variants={containerVariants}
			>
				<AnimatePresence>
					{newsArray.map((_, i) => (
						<motion.div
							key={i}
							variants={itemVariants}
							initial='hidden'
							animate='visible'
						>
							<NewsCard />
						</motion.div>
					))}
				</AnimatePresence>
			</motion.div>
		</motion.div>
	)
}

export default News
