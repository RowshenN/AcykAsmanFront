import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

import HomeBanner from '../../components/banner/HomeBanner'
// import ContactUs from '../../components/contactUs/ContactUs'
// import DownloadDoneWork from '../../components/download/DownloadDoneWork'
// import DoneWork from '../../components/homeDoneWork/DoneWork'
// import LogosCarousel from '../../components/logoCarousel/LogoCarousel'
import Taslamalar from '../../components/taslamalar/Taslamalar'

const Home = () => {
	// Initialize AOS
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
			easing: 'ease-out',
		})
	}, [])

	return (
		<div className='w-full h-full'>
			<HomeBanner />

			{/* Grid with animations */}
			<motion.div
				className='w-full xs:mb-10 md:mb-84 grid xs:grid-cols-2 md:grid-cols-auto-fill-250 xs:gap-3 md:gap-5 '
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: false }}
				data-aos='fade-up'
			>
				<div
					className='w-full flex flex-col items-center justify-center'
					data-aos='fade-up'
					data-aos-delay='100'
				>
					<p className='text-blue xs:text-[30px] md:text-[48px] font-[semibold]'>
						1200+
					</p>
					<p className='text-[#797979] dark:text-white xs:text-[20px] md:text-[28px] font-[regular]'>
						Müşderiler
					</p>
				</div>

				<div
					className='w-full flex flex-col items-center justify-center'
					data-aos='fade-up'
					data-aos-delay='200'
				>
					<p className='text-blue xs:text-[30px] md:text-[48px] font-[semibold]'>
						99+
					</p>
					<p className='text-[#797979] dark:text-white xs:text-[20px] md:text-[28px] font-[regular]'>
						Hünärmenler
					</p>
				</div>

				<div
					className='w-full flex flex-col items-center justify-center'
					data-aos='fade-up'
					data-aos-delay='300'
				>
					<p className='text-blue xs:text-[30px] md:text-[48px] font-[semibold]'>
						12+
					</p>
					<p className='text-[#797979] dark:text-white xs:text-[20px] md:text-[28px] font-[regular]'>
						Hyzmatlarymyz
					</p>
				</div>

				<div
					className='w-full flex flex-col items-center justify-center'
					data-aos='fade-up'
					data-aos-delay='400'
				>
					<p className='text-blue xs:text-[30px] md:text-[48px] font-[semibold]'>
						50+
					</p>
					<p className='text-[#797979] dark:text-white xs:text-[20px] md:text-[28px] font-[regular]'>
						Ýerine ýetirilen işler
					</p>
				</div>
			</motion.div>

			<Taslamalar />
			{/* <DoneWork />
			<LogosCarousel />
			<DownloadDoneWork />
			<ContactUs /> */}

			{/* Send Email Section */}
			{/* <motion.div
				className='w-full border border-border dark:border-borderDark bg-[#F8F8F8] dark:bg-[#313133] py-[45px] px-[71px] rounded-[28px] flex items-center justify-between'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: false }}
				data-aos='fade-up'
				data-aos-delay='100'
			>
				<div className='w-[40%]'>
					<h1 className='text-[28px] dark:text-white font-[semibold] text-center'>
						BIZE GOŞULYŇ WE BIZIŇ TÄZELIKLERIMIZDEN HABARLY BOLUŇ!
					</h1>
				</div>

				<div className='flex w-[40%] items-center justify-center bg-[#F6F8FC] dark:bg-[#313133] border border-border dark:border-borderDark rounded-[10px]'>
					<input
						type='email'
						placeholder='Email'
						className='w-[70%] pl-5 py-[17.5px] outline-none dark:text-white font-[regular] dark:bg-[#313133] bg-[#F6F8FC] rounded-tl-[10px] rounded-bl-[10px]'
					/>
					<button className='w-[30%] bg-blue outline-none rounded-tr-[10px] rounded-br-[10px] py-[15px] px-[44px] text-white font-[medium] text-[20px]'>
						Ugrat
					</button>
				</div>
			</motion.div> */}
		</div>
	)
}

export default Home
