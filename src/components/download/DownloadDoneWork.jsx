import { BsDownload } from 'react-icons/bs'

const DownloadDoneWork = () => {
	return (
		<div className=' mb-[138px] w-full border border-border dark:border-borderDark rounded-[28px] bg-[#F8F8F8] dark:bg-[#313133] flex items-center justify-center py-[25px] '>
			<div className='w-fit flex items-center justify-center flex-col gap-4 '>
				<h1 className='text-[32px] font-[bold] dark:text-white '>
					Mahabat we ýerine ýetirilen işler bir ýerde
				</h1>
				<div className='bg-blue h-[2px] rounded-[3px] w-[240px] '></div>
				<p className=' text-[20px] font-[regular] dark:text-white '>
					Kompaniýa mahabat kitapçasy (Katalogy)
				</p>
				<button className='w-fit flex items-center justify-center gap-[10px] bg-blue outline-none text-white rounded-[28px] py-[14.5px] px-[44px]	 text-[16px] font-[regular] '>
					{' '}
					<BsDownload className='text-[24px] text-white ' /> Ýüklap almak
				</button>
			</div>
		</div>
	)
}

export default DownloadDoneWork
