import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import surat from '../../images/donework.png'

const DoneWork = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
			easing: 'ease-out',
		})
	}, [])

	// Container variants for staggered animation
	const containerVariants = {
		hidden: {},
		visible: { transition: { staggerChildren: 0.2 } },
	}

	// Item animation
	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	}

	return (
		<motion.div
			className='w-full mb-84 text-white bg-blue rounded-[28px] py-5 px-5'
			variants={containerVariants}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: false }}
			data-aos='fade-up'
		>
			<div className='w-full flex items-start gap-6'>
				{/* text div */}
				<motion.div
					className='w-[40%] flex pt-3 flex-col'
					variants={itemVariants}
				>
					<h1 className='text-[31px] mb-6 font-[bold]'>
						Açyk Asman Yyldyzy (LOGO)
					</h1>
					<h2 className='text-[18px] font-[bold mb-[10px]'>
						Olympic Arena Opening Ceremony
					</h2>
					<div className='bg-white rounded-[5px] py-[5px] px-3 w-fit mb-[11px]'>
						<p className='text-[12px] font-[regular] text-black'>
							28 Sent 2017 ý
						</p>
					</div>
					<p className='text-[16px] font-[regular] mb-[30px]'>
						Olimpiýa arenasynda köp garaşylýan açylyş dabarasy 5000-den gowrak
						meşhur myhmany garşy aldy we bu dabara dünýäniň millionlarça
						tomaşaçylaryna göni efirde görkezildi. Sport ussatlygynyň we iň täze
						täzelikleriň baýramçylygy boldy...
					</p>
					<motion.button
						className='px-[56px] w-fit py-[14px] bg-blue hover:bg-blue/10 border border-white rounded-[28px] text-white'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Giňişleýin
					</motion.button>
				</motion.div>

				{/* image div */}
				<motion.div className='w-[60%]' variants={itemVariants}>
					<img
						src={surat}
						alt='image'
						className='w-full h-full max-h-[345px] object-cover rounded-[20px]'
					/>
				</motion.div>
			</div>
		</motion.div>
	)
}

export default DoneWork
