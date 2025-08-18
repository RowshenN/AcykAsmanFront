import { Link } from 'react-router-dom'
import call from '../../images/call.svg'
import instagram from '../../images/instagram.svg'
import logo from '../../images/logo.png'
import sms from '../../images/sms.svg'
import telegram from '../../images/telegram.svg'
import tiktok from '../../images/tiktok.svg'
import whatsapp from '../../images/whatsapp.svg'
import youtube from '../../images/youtube.svg'

const Footer = () => {
	return (
		<div className='w-full border border-border roounded-[28px] divide-y divide-border '>
			<div className='w-full flex items-center justify-center'>
				<div className='w-full mt-[-100px] bg-white shadow-md max-w-[520px]  border border-border rounded-[15px] flex items-center justify-between divide-x divide-border py-3 px-[34px] '>
					<div className='flex w-full items-center justify-center'>
						<p className='text-[16px] font-[semibold] text-[#656565] '>
							Manager: <span>WekilOs</span>
						</p>
					</div>

					<div className='flex text-[16px] font-[semibold] w-full items-center justify-start flex-center'>
						<div className='w-full '>
							<div className='flex items-center justify-start gap-1 mb-4'>
								<img src={call} alt='call' />
								<p>+993 67 77 77 77</p>
							</div>

							<div className='flex items-center justify-start gap-1'>
								<img src={sms} alt='sms' />
								<p>name@gmai.com</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className=' flex items-center justify-center'>
				<Link to={'/'}>
					<div className='h-[104px] bg-blue-200 cursor-pointer'>
						<img
							src={logo}
							alt='logo'
							className='w-full h-full object-contain '
						/>
					</div>
				</Link>

				<div className='bg-green-600'>
					<p className='text-[#008DD2] w-[60%] text-center flex items-center justify-center  bg-red-400 text-[18px] font-[semibold] '>
						{' '}
						FDBC0463, Compass Building, Al Shohada Road, Al Hamra Industrial
						Zone-FZ, Ras Al Khaimah, United Arab Emirates.
					</p>
				</div>

				<div className=' bg-yellow-400  flex items-center justify-center gap-[14px]'>
					<img src={instagram} alt={`${instagram}`} />
					<img src={telegram} alt={`${telegram}`} />
					<img src={whatsapp} alt={`${whatsapp}`} />
					<img src={tiktok} alt={`${tiktok}`} />
					<img src={youtube} alt={`${youtube}`} />
				</div>
			</div>

			<div></div>
		</div>
	)
}

export default Footer
