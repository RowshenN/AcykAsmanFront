import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import PhotoCard from '../../components/taslamaCard/PhotoCard'
import VideoCard from '../../components/taslamaCard/VideoCard'

const Services = () => {
	const location = useLocation()

	const [name, setName] = useState('all')
	return (
		<div className='w-full  '>
			<div className='flex mb-[52px] items-center justify-center'>
				<div className='w-[55%] mx-auto '>
					<h1 className='text-[48px] mb-[48px] text-center font-[semibold] text-blue '>
						Her pikiri hakykata öwürmek üçin hyzmatlaryň doly spektrini
						hödürleýäris
					</h1>

					<div className='w-full flex items-center justify-between '>
						<div
							onClick={() => setName('all')}
							className={`${
								name === 'all'
									? 'bg-blue text-white '
									: ' bg-white dark:bg-dark dark:text-white text-black '
							}  border border-border dark:border-borderDark dark:hover:bg-blue rounded-full cursor-pointer hover:bg-blue/80 hover:text-white transition-all duration-200 py-[13px] px-[91px] text-[18px] font-[regular] `}
						>
							<p>Ahlisi</p>
						</div>

						<div
							onClick={() => setName('photos')}
							className={`${
								name === 'photos'
									? 'bg-blue text-white '
									: ' bg-white dark:bg-dark dark:text-white text-black '
							}  border border-border dark:border-borderDark dark:hover:bg-blue rounded-full cursor-pointer hover:bg-blue/80 hover:text-white transition-all duration-200 py-[13px] px-[91px] text-[18px] font-[regular] `}
						>
							<p>Photo</p>
						</div>

						<div
							onClick={() => setName('videos')}
							className={`${
								name === 'videos'
									? 'bg-blue text-white '
									: ' bg-white dark:bg-dark dark:text-white text-black '
							}  border border-border dark:border-borderDark dark:hover:bg-blue rounded-full cursor-pointer hover:bg-blue/80 hover:text-white transition-all duration-200 py-[13px] px-[91px] text-[18px] font-[regular] `}
						>
							<p>Wideo</p>
						</div>
					</div>
				</div>
			</div>

			<div className='w-full grid grid-cols-taslama-cards gap-9 '>
				<PhotoCard />
				<VideoCard />
				<PhotoCard />
				<VideoCard />
				<PhotoCard />
				<VideoCard />
				<PhotoCard />
				<PhotoCard />
				<VideoCard />
			</div>
		</div>
	)
}

export default Services
