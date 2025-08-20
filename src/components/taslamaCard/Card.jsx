import surat from '../../images/cardImage.png'

const Card = () => {
	return (
		<div className='hover:bg-[#F3F3F3] dark:hover:bg-[#313133] transition-all duration-200 rounded-[20px] cursor-pointer px-[14px] pt-[10px] pb-[35px] '>
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
		</div>
	)
}

export default Card
