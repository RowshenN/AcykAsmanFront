import { Link } from 'react-router-dom'
import surat from '../../images/cardImage.png'

const LongPhotoCard = () => {
	return (
		<Link
			to={'/services/inner?type=photo'}
			className='w-full md:flex-row xs:flex-col flex items-center justify-start xs:py-2 md:py-[18px] cursor-pointer xs:px-2 md:px-[18px] hover:bg-[#F3F3F3] dark:hover:bg-[#313133] dark:text-white transition-all duration-200  '
		>
			<div className='flex xs:w-full md:w-[50%] items-center justify-start gap-[22px] '>
				<div
					className='border xs:min-w-[150px] md:max-w-[334px] border-border dark:border-borderDark rounded-[20px] 
				 w-full  '
				>
					<img
						src={surat}
						alt='surat'
						className='w-full xs:min-h-[150px] md:max-h-[296px] h-full object-cover rounded-[20px]'
					/>
				</div>

				<div className=''>
					<h1 className=' xs:mb-1 md:mb-[10px] xs:text-[20px] md:text-[24px] font-[semibold] '>
						Concert New World
					</h1>
					<p className='xs:text-[16px] md:line-clamp-none xs:line-clamp-2 md:text-[18px] font-[regular]'>
						An immersive multimedia exhibition at the art space Luminar
					</p>
				</div>
			</div>

			<div className=' w-1/2 flex items-center xs:justify-end md:justify-center '>
				<p>15.05.2025</p>
			</div>
		</Link>
	)
}

export default LongPhotoCard
