import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../images/logo.png'
import moon_dark from '../../images/moon dark .svg'
import moon_light from '../../images/moon light .svg'
import sun from '../../images/sun.svg'
import video from '../../images/video.svg'

const Navigation = () => {
	const [dark, setDark] = useState(false)
	const location = useLocation()
	return (
		<div className='w-full border pl-[60px] pr-[9px] flex items-center justify-between py-1 border-border rounded-[54px] '>
			<Link to={'/'}>
				<div className='w-[86px]  cursor-pointer'>
					<img src={logo} alt='logo' className='w-full h-full object-contain' />
				</div>
			</Link>

			<div className='w-fit flex items-center justify-center gap-[22px] '>
				<div className='flex items-center text-[16px] justify-center gap-7'>
					<Link
						className={
							location.pathname === '/'
								? 'font-[medium] text-[#008DD2] '
								: 'text-black font-[regular] '
						}
						to={'/'}
					>
						Home
					</Link>
					<Link
						className={
							location.pathname === '/works'
								? 'font-[medium] text-[#008DD2] '
								: 'text-black font-[regular] '
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
								? 'font-[medium] text-[#008DD2] '
								: 'text-black font-[regular] '
						}
						to={'/services'}
					>
						Services
					</Link>
					<Link
						className={
							location.pathname === '/news'
								? 'font-[medium] text-[#008DD2] '
								: 'text-black font-[regular] '
						}
						to={'/news'}
					>
						News
					</Link>
					<Link
						className={
							location.pathname === '/about'
								? 'font-[medium] text-[#008DD2] '
								: 'text-black font-[regular] '
						}
						to={'/about'}
					>
						About Us
					</Link>
				</div>

				<div className='w-fit  py-2 px-2 border border-border rounded-[24px] flex items-center justify-center '>
					<div
						onClick={() => setDark(!dark)}
						className={
							!dark
								? 'bg-[#008DD2] cursor-pointer rounded-full py-1 px-[9.5px]  '
								: 'cursor-pointer rounded-full py-1 px-[9.5px] '
						}
					>
						<img src={sun} alt='sun' />
					</div>

					<div
						onClick={() => setDark(!dark)}
						className={
							dark
								? 'bg-[#008DD2] cursor-pointer rounded-full py-1 px-[9.5px]  '
								: 'cursor-pointer rounded-full py-1 px-[9.5px] '
						}
					>
						{!dark ? (
							<img src={moon_dark} alt='moon' />
						) : (
							<img src={moon_light} alt='moon' />
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navigation
