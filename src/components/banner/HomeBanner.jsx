import { Link } from 'react-router-dom'
import surat from '../../images/homeBanner.png'

const HomeBanner = () => {
	return (
		<div className='w-full mb-84 relative min-h-[90vh] rounded-[28px] h-full '>
			<img
				src={surat}
				alt='surat'
				className='w-full min-h-[90vh] h-full rounded-[28px] object-cover  '
			/>
			<div className='absolute text-white left-[3%] bottom-[7%] w-[45%]'>
				<h1 className='text-[60px] font-[bold] mb-2 '>
					Phish Concert | Sphere, Awaza
				</h1>
				<Link
					to={'/services/inner?type=video'}
					className='border hover:bg-white/40 transition-all duration-200 border-white rounded-[28px] py-[14px] px-7 '
					type='button'
				>
					Ginişleýin
				</Link>
			</div>

			<div className='flex w-fit top-[25%] right-[7%] absolute text-white flex-col items-center justify-center gap-5'>
				<div className='w-full cursor-pointer flex items-center justify-end gap-2'>
					<div className='w-[54px] h-[1px] bg-white '></div>
					<p>01</p>
				</div>

				<div className='w-full cursor-pointer flex items-center justify-end gap-2'>
					<div className='w-[54px] h-[1px] bg-white '></div>
					<p>02</p>
				</div>

				<div className='w-full cursor-pointer flex items-center justify-end gap-2'>
					<div className='w-[54px] h-[1px] bg-white '></div>
					<p>03</p>
				</div>
			</div>
		</div>
	)
}

export default HomeBanner
