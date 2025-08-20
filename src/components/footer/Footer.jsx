import {
	FaInstagram,
	FaTelegramPlane,
	FaTiktok,
	FaWhatsapp,
	FaYoutube,
} from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png' // keep your logo

const Footer = () => {
	return (
		<footer className='w-full mt-[130px] bg-[#F8F8F8] dark:bg-[#313133] border rounded-[28px] border-border dark:border-[#797979] divide-y divide-border dark:divide-[#797979]'>
			{/* Manager Card */}
			<div className='w-full flex py-[33px] items-center justify-center'>
				<div className='w-full mt-[-80px] bg-white dark:bg-[#313133] shadow-md max-w-[520px] border border-border dark:border-[#797979] rounded-[15px] flex flex-col sm:flex-row items-center justify-between divide-y sm:divide-y-0 sm:divide-x divide-border dark:divide-[#797979] py-3 px-[34px]'>
					{/* Manager Info */}
					<div className='flex w-full items-center justify-center sm:justify-start'>
						<p className='text-[16px] font-semibold text-[#656565] dark:text-white'>
							Manager: <span>WekilOS</span>
						</p>
					</div>

					{/* Contact */}
					<div className='flex flex-col gap-3 w-full items-start justify-center pl-4'>
						<div className='flex items-center gap-2 '>
							<FiPhone className='text-blue text-[20px] ' />
							<p className='font-[semibold] text-[16px] dark:text-white'>
								+993 67 77 77 77
							</p>
						</div>
						<div className='flex items-center gap-2 '>
							<MdEmail className='text-blue text-[20px] ' />
							<p className='font-[semibold] text-[16px] dark:text-white'>
								name@gmail.com
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Middle Section */}
			<div className='flex flex-col md:flex-row items-center justify-between px-84 mx-auto py-3 gap-6'>
				{/* Logo */}
				<Link to={'/'}>
					<div className='h-[104px] cursor-pointer'>
						<img src={logo} alt='logo' className='h-full w-auto object-cover' />
					</div>
				</Link>

				{/* Address */}
				<p className='text-blue text-center text-[18px] font-[semibold] max-w-[30%] leading-relaxed'>
					FDBC0463, Compass Building, Al Shohada Road, Al Hamra Industrial
					Zone-FZ, Ras Al Khaimah, United Arab Emirates.
				</p>

				{/* Social Icons */}
				<div className='flex items-center justify-center gap-[14px]'>
					<a
						href='#'
						className='p-2 rounded-lg border shadow-md bg-white border-[#EEEEEE] dark:border-[#797979]   transition'
					>
						<FaInstagram className='text-xl' />
					</a>
					<a
						href='#'
						className='p-2 rounded-lg border shadow-md bg-white border-[#EEEEEE] dark:border-[#797979]   transition'
					>
						<FaTelegramPlane className='text-xl' />
					</a>
					<a
						href='#'
						className='p-2 rounded-lg border shadow-md bg-white border-[#EEEEEE] dark:border-[#797979]   transition'
					>
						<FaWhatsapp className='text-xl' />
					</a>
					<a
						href='#'
						className='p-2 rounded-lg border shadow-md bg-white border-[#EEEEEE] dark:border-[#797979]   transition'
					>
						<FaTiktok className='text-xl' />
					</a>
					<a
						href='#'
						className='p-2 rounded-lg border shadow-md bg-white border-[#EEEEEE] dark:border-[#797979]   transition'
					>
						<FaYoutube className='text-xl' />
					</a>
				</div>
			</div>

			{/* Copyright */}
			<div className='w-full pt-[33px] pb-[22px] flex items-center justify-center'>
				<p className='text-[#3D3D3D] dark:text-[#FFFFFF] text-[14px] font-regular text-center'>
					Copyright © 2025 •{' '}
					<span className='font-bold'>Açyk Asman Ýyldyzy</span>
				</p>
			</div>
		</footer>
	)
}

export default Footer
