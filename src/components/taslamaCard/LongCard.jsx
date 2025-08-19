import surat from '../../images/cardImage.png'

const LongCard = () => {
	return (
		<div className='w-full flex items-center justify-start py-[18px] cursor-pointer px-[18px] hover:bg-[#F3F3F3] transition-all duration-200  '>
			<div className='flex w-[50%] items-center justify-start gap-[22px] '>
				<div className='max-w-[334px] h-full w-full max-h-[296px] '>
					<img src={surat} alt='image' className='w-full h-full object-cover' />
				</div>

				<div className=''>
					<h1 className=' mb-[10px] text-[24px] font-[semibold] '>
						Concert New World
					</h1>
					<p className='text-[18px] font-[regular]'>
						An immersive multimedia exhibition at the art space Luminar
					</p>
				</div>
			</div>

			<div className='w-1/2 flex items-center justify-center '>
				<p>15.05.2025</p>
			</div>
		</div>
	)
}

export default LongCard
