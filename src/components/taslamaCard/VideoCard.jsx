import { Link } from 'react-router-dom'
import surat from '../../images/videoImg.png'

const VideoCard = () => {
	return (
		<Link to={'/services/inner?type=video'} className='relative'>
			<div className='absolute bg-border/30 dark:bg-borderDark/30 rounded-[6px] py-1 px-[10px] text-white xs:text-[14px] md:text-[18px] font-[regular] xs:top-[5%] md:top-[2%] xs:left-[6%] md:left-[3%] '>
				<p>video</p>
			</div>

			{/* image div */}
			<div className='border border-border dark:border-borderDark  rounded-[20px] xs:max-h-[70%] md:max-h-[360px] h-full w-full  '>
				<img
					src={surat}
					alt='image'
					className='w-full h-full object-cover rounded-[20px]'
				/>
			</div>

			<div className='xs:mt-3 md:mt-6 dark:text-white w-full '>
				<h1 className='xs:mb-1 leading-tight md:mb-[10px] xs:text-[18px] md:text-[24px] font-[semibold] '>
					Concert New World
				</h1>
				<p className='xs:text-[14px]  xs:line-clamp-2 md:text-[18px] font-[regular]'>
					An immersive multimedia exhibition at the art space Luminar
				</p>
			</div>
		</Link>
	)
}

export default VideoCard
