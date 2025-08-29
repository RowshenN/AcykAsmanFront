import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import logo1 from '../../images/logo1.png'
import logo2 from '../../images/logo2.png'
import logo3 from '../../images/logo3.png'
import logo4 from '../../images/logo4.png'

const LogosCarousel = () => {
	const logos = [logo1, logo2, logo3, logo4]

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
		<motion.div
			className='xs:mb-[30px] md:mb-[106px] dark:text-white'
			variants={containerVariants}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: false }}
			data-aos='fade-up'
		>
			<motion.div
				className='w-full flex items-center justify-center xs:mb-3 md:mb-6'
				variants={itemVariants}
			>
				<h1 className='xs:text-[20px] md:text-[24px] font-[semibold]'>
					Hyzmatdaş we müşderi tarapyndan ynamdar
				</h1>
			</motion.div>

			<div className='relative w-full py-6 overflow-hidden'>
				{/*  edges */}
				<div className='pointer-events-none absolute left-0 top-0 h-full xs:w-8 md:w-20 bg-gradient-to-r from-white/50 dark:from-black/30 to-transparent z-10' />
				<div className='pointer-events-none absolute right-0 top-0 h-full xs:w-8 md:w-20 bg-gradient-to-l from-white/50 dark:from-black/30 to-transparent z-10' />

				{/*  viewport */}
				<div className='w-full overflow-hidden'>
					<motion.div
						className='flex w-max items-center xs:gap-3 md:gap-6 animate-logo-scroll will-change-transform'
						style={{ ['--duration']: '18s' }}
						variants={containerVariants}
					>
						{[...logos, ...logos].map((logo, i) => (
							<motion.div
								key={i}
								className='shrink-0 xs:mx-1 md:mx-3 border py-2 xs:px-2 md:px-6 border-border dark:border-borderDark rounded-[18px]'
								variants={itemVariants}
							>
								<img
									src={logo}
									alt={`logo-${i % logos.length}`}
									className='xs:h-[50px] md:h-[75px] w-auto object-contain'
								/>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>

			{/* animation*/}
			<style>{`
        @keyframes logo-scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logo-scroll {
          animation: logo-scroll-x var(--duration, 20s) linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-logo-scroll { animation: none; }
        }
      `}</style>
		</motion.div>
	)
}

export default LogosCarousel
