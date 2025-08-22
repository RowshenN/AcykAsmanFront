import { Link } from 'react-router-dom'
import surat from '../../images/videoImg.png'

const VideoCard = () => {
	return (
		<Link to={'/services/inner?type=video'} className='relative '>
			<div className='absolute bg-border/30 dark:bg-borderDark/30 rounded-[6px] py-1 px-[10px] text-white text-[18px] font-[regular] top-[2%] left-[3%] '>
				<p>wideo</p>
			</div>

			{/* image div */}
			<div className='border border-border dark:border-borderDark  rounded-[20px] max-h-[360px] h-full w-full  '>
				<img
					src={surat}
					alt='image'
					className='w-full h-full object-cover rounded-[20px]'
				/>
			</div>

			<div className='mt-6 dark:text-white w-full '>
				<h1 className=' mb-[10px] text-[24px] font-[semibold] '>
					Concert New World
				</h1>
				<p className='text-[18px] font-[regular]'>
					An immersive multimedia exhibition at the art space Luminar
				</p>
			</div>
		</Link>
	)
}

export default VideoCard
