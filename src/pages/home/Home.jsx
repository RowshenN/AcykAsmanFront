import HomeBanner from '../../components/banner/HomeBanner'
import DoneWork from '../../components/homeDoneWork/DoneWork'
import LogosCarousel from '../../components/logoCarousel/LogoCarousel'
import Taslamalar from '../../components/taslamalar/Taslamalar'

const Home = () => {
	return (
		<div className='w-full h-full'>
			<HomeBanner />

			{/* grid */}
			<div className='w-full mb-84 grid grid-cols-4 divide-x divide-border '>
				<div className='w-full flex flex-col items-center justify-center '>
					<p className=' text-blue text-[48px] font-[semibold] '>1200+</p>
					<p className=' text-[#797979] text-[28px] font-[regular] '>
						Müşderiler
					</p>
				</div>

				<div className='w-full flex flex-col items-center justify-center '>
					<p className=' text-blue text-[48px] font-[semibold] '>99+</p>
					<p className=' text-[#797979] text-[28px] font-[regular] '>
						Hünärmenler
					</p>
				</div>

				<div className='w-full flex flex-col items-center justify-center '>
					<p className=' text-blue text-[48px] font-[semibold] '>12+</p>
					<p className=' text-[#797979] text-[28px] font-[regular] '>
						Hyzmatlarymyz
					</p>
				</div>

				<div className='w-full flex flex-col items-center justify-center '>
					<p className=' text-blue text-[48px] font-[semibold] '>50+</p>
					<p className=' text-[#797979] text-[28px] font-[regular] '>
						Ýerine ýetirilen işler
					</p>
				</div>
			</div>

			<Taslamalar />
			<DoneWork />
			<LogosCarousel />
		</div>
	)
}

export default Home
