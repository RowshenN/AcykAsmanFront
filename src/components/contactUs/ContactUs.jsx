import { useLocation } from 'react-router-dom'
import surat from '../../images/contactUs.png'

const ContactUs = () => {
	const handleSubmit = e => {
		e.preventDefault()
	}

	const location = useLocation()
	return (
		<div className='w-full mb-84 '>
			{location.pathname === '/' && (
				<h1 className='text-left w-full text-[24px] font-[semibold] mb-[18px] dark:text-white '>
					Habarlaşmak üçin
				</h1>
			)}

			<div className='w-full flex items-start  gap-9  '>
				<div className='w-1/2'>
					<img
						src={surat}
						alt='image'
						className='w-full object-cover h-full max-h-[400px] rounded-[14px] '
					/>
				</div>

				<form
					onSubmit={handleSubmit}
					className='w-1/2 flex items-center justify-center flex-col gap-6 '
				>
					<input
						type='text'
						placeholder='Ady'
						className='outline-none w-full bg-[#F6F8FC] dark:bg-[#313133] border border-[#E3E7EE] dark:border-borderDark dark:text-white rounded-[12px] py-5 px-4 font-[regular] '
					/>
					<input
						type='email'
						placeholder='E-mail'
						className='outline-none w-full bg-[#F6F8FC] dark:bg-[#313133] border border-[#E3E7EE] dark:border-borderDark dark:text-white rounded-[12px] py-5 px-4 font-[regular] '
					/>
					<textarea
						placeholder='Bellik...'
						className='outline-none min-h-[146px] w-full bg-[#F6F8FC] dark:bg-[#313133] border border-[#E3E7EE] dark:border-borderDark dark:text-white rounded-[12px] py-5 px-4 font-[regular] '
					></textarea>
					<button
						className='w-full text-white outline-none rounded-[12px] text-center py-3 text-[18px] font-[regular] bg-blue '
						type='submit'
					>
						Ugratmak
					</button>
				</form>
			</div>
		</div>
	)
}

export default ContactUs
