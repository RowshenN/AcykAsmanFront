import { motion } from 'framer-motion'

const PageWrapper = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{
				opacity: 1,
				y: 0,
				transition: { duration: 0.5, ease: 'easeOut' },
			}}
			exit={{
				opacity: 0,
				y: -20,
				transition: { duration: 0.4, ease: 'easeInOut' },
			}}
			className='w-full'
		>
			{children}
		</motion.div>
	)
}

export default PageWrapper
