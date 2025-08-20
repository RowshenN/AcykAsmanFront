import { LuMoon, LuSunDim } from 'react-icons/lu'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../images/logo.png'
import video from '../../images/video.svg'
import { useTheme } from '../../utils/ThemeContext'

const Navigation = () => {
	const location = useLocation()
	const { theme, setTheme } = useTheme()

	return (
		<div
			className={`w-full ${
				theme === 'dark' ? 'bg-[#161618]' : 'bg-white'
			} sticky top-2 z-50 mb-9 border pl-[60px] pr-[9px] flex items-center justify-between py-1 border-border dark:border-borderDark rounded-[54px]`}
		>
			<Link to={'/'}>
				<div className='w-[86px] cursor-pointer'>
					<img src={logo} alt='logo' className='w-full h-full object-contain' />
				</div>
			</Link>

			<div className='w-fit flex items-center justify-center gap-[22px] '>
				{/* nav links */}
				<div className='flex items-center text-[16px] justify-center gap-7'>
					<Link
						className={
							location.pathname === '/'
								? 'font-[medium] text-blue'
								: 'text-black dark:text-white font-[regular]'
						}
						to={'/'}
					>
						Home
					</Link>
					<Link
						className={
							location.pathname === '/works'
								? 'font-[medium] text-blue'
								: 'text-black dark:text-white font-[regular]'
						}
						to={'/works'}
					>
						<div className='flex items-center justify-center gap-1'>
							<p>Works</p>
							<img src={video} alt='video' />
						</div>
					</Link>
					<Link
						className={
							location.pathname === '/services'
								? 'font-[medium] text-blue'
								: 'text-black dark:text-white font-[regular]'
						}
						to={'/services'}
					>
						Services
					</Link>
					<Link
						className={
							location.pathname === '/news' ||
							location.pathname.includes('/news')
								? 'font-[medium] text-blue'
								: 'text-black dark:text-white font-[regular]'
						}
						to={'/news'}
					>
						News
					</Link>
					<Link
						className={
							location.pathname === '/about'
								? 'font-[medium] text-blue'
								: 'text-black dark:text-white font-[regular]'
						}
						to={'/about'}
					>
						About Us
					</Link>
				</div>

				{/* dark and light controller */}
				<div className='w-fit cursor-pointer py-2 px-2 border border-border dark:border-borderDark rounded-[24px] flex items-center justify-center '>
					{/* Light button */}
					<div
						onClick={() => setTheme('light')}
						className={
							theme === 'light'
								? 'bg-blue cursor-pointer rounded-full py-1 px-[9.5px]'
								: 'cursor-pointer rounded-full py-1 px-[9.5px]'
						}
					>
						<LuSunDim className='text-[24px] text-white' />
					</div>

					{/* Dark button */}
					<div
						onClick={() => setTheme('dark')}
						className={
							theme === 'dark'
								? 'bg-blue cursor-pointer rounded-full py-1 px-[9.5px]'
								: 'cursor-pointer rounded-full py-1 px-[9.5px]'
						}
					>
						<LuMoon
							className={`text-[24px] ${
								theme === 'dark' ? 'text-white' : 'text-[#292D32]'
							}`}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navigation
