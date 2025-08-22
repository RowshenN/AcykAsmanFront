import { Drawer } from 'antd'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { LuMoon, LuSunDim } from 'react-icons/lu'
import { MdOutlineCancel } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../images/logo.png'
import video from '../../images/video.svg'
import { useTheme } from '../../utils/ThemeContext'
import VideoPlayer from '../videPlayer/VideoPlayer'

const Navigation = () => {
	const location = useLocation()
	const { theme, setTheme } = useTheme()
	const [isVideoOpen, setIsVideoOpen] = useState(false)
	const videoRef = useRef(null)

	useEffect(() => {
		const handleClickOutside = event => {
			if (videoRef.current && !videoRef.current.contains(event.target)) {
				setIsVideoOpen(false)
			}
		}

		if (isVideoOpen) {
			document.addEventListener('mousedown', handleClickOutside)
		} else {
			document.removeEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isVideoOpen])

	useEffect(() => {
		setOpen(false)
	}, [location])

	// Framer Motion variants
	const containerVariants = {
		hidden: {},
		visible: { transition: { staggerChildren: 0.15 } },
	}

	const itemVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: 'easeOut' },
		},
	}

	const modalBackdropVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
		exit: { opacity: 0 },
	}

	const modalContentVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.3, ease: 'easeOut' },
		},
		exit: {
			opacity: 0,
			scale: 0.8,
			transition: { duration: 0.2, ease: 'easeIn' },
		},
	}

	const [open, setOpen] = useState(false)
	const showDrawer = () => {
		setOpen(true)
	}
	const onClose = () => {
		setOpen(false)
	}

	return (
		<motion.div
			className={`w-full ${
				theme === 'dark' ? 'bg-[#161618]' : 'bg-white'
			} sticky top-2 z-50 xs:mb-5 md:mb-9 border xs:px-3 md:pl-[60px] md:pr-[9px] flex items-center justify-between py-1 border-border dark:border-borderDark rounded-[54px]`}
			variants={containerVariants}
			initial='hidden'
			animate='visible'
		>
			<div className='hidden'>
				<Drawer
					placement={'left'}
					closable={false}
					onClose={onClose}
					open={open}
					key={'left'}
					className='!px-0 !py-0 !my-0 !mx-0'
				>
					<div className='flex-col relative px-5 py-5 flex items-baseline dark:bg-black h-full text-[16px] justify-start gap-7'>
						<MdOutlineCancel
							className='absolute dark:text-white  top-5 right-5 text-[25px] cursor-pointer '
							onClick={() => setOpen(false)}
						/>

						<motion.div variants={itemVariants}>
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
						</motion.div>

						<motion.div
							variants={itemVariants}
							onClick={() => setIsVideoOpen(true)}
						>
							<div
								className={
									isVideoOpen
										? 'font-[medium] text-blue cursor-pointer'
										: 'text-black dark:text-white font-[regular] cursor-pointer'
								}
							>
								<div className='flex items-center justify-center gap-1'>
									<p>Works</p>
									<img src={video} alt='video' />
								</div>
							</div>
						</motion.div>

						<motion.div variants={itemVariants}>
							<Link
								className={
									location.pathname === '/services' ||
									location.pathname.includes('/services')
										? 'font-[medium] text-blue'
										: 'text-black dark:text-white font-[regular]'
								}
								to={'/services'}
							>
								Services
							</Link>
						</motion.div>

						<motion.div variants={itemVariants}>
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
						</motion.div>

						<motion.div variants={itemVariants}>
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
						</motion.div>
					</div>
				</Drawer>
			</div>
			{/* Logo */}
			<motion.div variants={itemVariants}>
				<Link to={'/'}>
					<div className='w-[86px] cursor-pointer'>
						<img
							src={logo}
							alt='logo'
							className='w-full h-full object-contain'
						/>
					</div>
				</Link>
			</motion.div>

			{/* Navigation links & theme toggle */}
			<motion.div
				className='w-fit flex items-center justify-center xs:gap-4 md:gap-[22px]'
				variants={itemVariants}
			>
				{/* nav links */}
				<div className='md:flex xs:hidden items-center text-[16px] justify-center gap-7'>
					<motion.div variants={itemVariants}>
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
					</motion.div>

					<motion.div
						variants={itemVariants}
						onClick={() => setIsVideoOpen(true)}
					>
						<div
							className={
								isVideoOpen
									? 'font-[medium] text-blue cursor-pointer'
									: 'text-black dark:text-white font-[regular] cursor-pointer'
							}
						>
							<div className='flex items-center justify-center gap-1'>
								<p>Works</p>
								<img src={video} alt='video' />
							</div>
						</div>
					</motion.div>

					<motion.div variants={itemVariants}>
						<Link
							className={
								location.pathname === '/services' ||
								location.pathname.includes('/services')
									? 'font-[medium] text-blue'
									: 'text-black dark:text-white font-[regular]'
							}
							to={'/services'}
						>
							Services
						</Link>
					</motion.div>

					<motion.div variants={itemVariants}>
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
					</motion.div>

					<motion.div variants={itemVariants}>
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
					</motion.div>
				</div>

				{/* Theme toggle */}
				<motion.div
					className='w-fit cursor-pointer py-2 px-2 border border-border dark:border-borderDark rounded-[24px] flex items-center justify-center'
					variants={itemVariants}
				>
					<motion.div
						onClick={() => setTheme('light')}
						layout
						className={
							theme === 'light'
								? 'bg-blue cursor-pointer rounded-full py-1 px-[9.5px]'
								: 'cursor-pointer rounded-full py-1 px-[9.5px]'
						}
					>
						<LuSunDim className='xs:text-[20px] md:text-[24px] text-white' />
					</motion.div>

					<motion.div
						onClick={() => setTheme('dark')}
						layout
						className={
							theme === 'dark'
								? 'bg-blue cursor-pointer rounded-full py-1 px-[9.5px]'
								: 'cursor-pointer rounded-full py-1 px-[9.5px]'
						}
					>
						<LuMoon
							className={`xs:text-[20px] md:text-[24px] ${
								theme === 'dark' ? 'text-white' : 'text-[#292D32]'
							}`}
						/>
					</motion.div>
				</motion.div>

				<div className='xs:flex md:hidden py-[10px] px-4 border border-border dark:border-borderDark rounded-[24px] items-center justify-center cursor-pointer'>
					<RxHamburgerMenu
						onClick={showDrawer}
						className='text-[20px] dark:text-white '
					/>
				</div>
			</motion.div>

			{/* Video Modal */}
			<AnimatePresence>
				{isVideoOpen && (
					<motion.div
						className='fixed inset-0 flex items-center justify-center z-[1000] bg-black/70'
						variants={modalBackdropVariants}
						initial='hidden'
						animate='visible'
						exit='exit'
					>
						<motion.div
							ref={videoRef}
							className='relative w-[80%] mx-auto rounded-xl overflow-hidden'
							variants={modalContentVariants}
							initial='hidden'
							animate='visible'
							exit='exit'
						>
							<div
								onClick={() => setIsVideoOpen(false)}
								className='border absolute top-3 right-5 border-white rounded-full py-1 px-3 flex items-center justify-center'
							>
								<button className='text-white text-2xl z-50'>✕</button>
							</div>
							<VideoPlayer src={'/videos/video.mp4'} />
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	)
}

export default Navigation
