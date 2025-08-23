import { motion } from 'framer-motion'

const variants = {
	initial: { opacity: 0, y: 20 },
	enter: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: 'easeOut' },
	},
	exit: {
		opacity: 0,
		y: 40,
		transition: { duration: 0.7, ease: 'easeInOut' },
	},
}

const PageWrapper = ({ children }) => {
	return (
		<motion.div
			variants={variants}
			initial='initial'
			animate='enter'
			exit='exit'
			className='w-full'
		>
			{children}
		</motion.div>
	)
}

export default PageWrapper
