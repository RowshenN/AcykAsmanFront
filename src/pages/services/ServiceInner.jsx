import { Carousel } from 'antd'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { useNavigate, useSearchParams } from 'react-router-dom'

import PhotoCard from '../../components/taslamaCard/PhotoCard'
import VideoCard from '../../components/taslamaCard/VideoCard'
import VideoPlayer from '../../components/videPlayer/VideoPlayer'
import surat from '../../images/carouselImg.png'

const ServiceInner = () => {
	const [searchParams] = useSearchParams()
	const type = searchParams.get('type') // "photo" or "video"
	const navigate = useNavigate()

	return (
		<div className='w-full'>
			{/* back button */}
			<div className='w-full flex items-center justify-start'>
				<RiArrowLeftSLine
					onClick={() => navigate(-1)}
					className='text-[24px] dark:text-white cursor-pointer mb-[38px]'
				/>
			</div>

			{/* header info */}
			<div className='w-full flex mb-7 items-center justify-start gap-6 '>
				<h1 className='text-[32px] dark:text-white font-[semibold] '>
					Жаркий Новый Год
				</h1>

				<div className='py-[13px] px-[30.5px] rounded-[6px] text-[18px] font-[regular] bg-border '>
					<p>{type === 'photo' ? 'Foto' : 'Wideo'}</p>
				</div>

				<p className='text-[18px] font-[regular] dark:text-white '>
					15.05.2025
				</p>
			</div>

			{/* conditional rendering */}
			<div className='w-full mb-[72px]'>
				{type === 'photo' ? (
					// ----- PHOTO CAROUSEL -----
					<Carousel arrows infinite autoplay speed={1000} autoplaySpeed={4000}>
						{[surat, surat, surat].map((img, i) => (
							<div key={i} className='max-h-[80vh] h-full w-full'>
								<img
									src={img}
									alt='carousel'
									className='w-full h-full object-cover'
								/>
							</div>
						))}
					</Carousel>
				) : (
					// ----- VIDEO PLAYER -----
					<div className='w-full rounded-2xl overflow-hidden'>
						<VideoPlayer src={'/videos/video.mp4'} />
					</div>
				)}
			</div>

			{/* other photos (only for photo type) */}
			{type === 'photo' ? (
				<div className='w-full'>
					<h1 className='mb-[42px] dark:text-white text-[24px] font-[semibold] '>
						Beýleki suratlar
					</h1>
					<div className='w-full grid grid-cols-taslama-cards gap-8'>
						<PhotoCard type='photo' />
						<PhotoCard type='photo' />
						<PhotoCard type='photo' />
					</div>
				</div>
			) : (
				<div className='w-full'>
					<h1 className='mb-[42px] dark:text-white text-[24px] font-[semibold] '>
						Beýleki wideolar
					</h1>
					<div className='w-full grid grid-cols-taslama-cards gap-8'>
						<VideoCard type='video' />
						<VideoCard type='video' />
						<VideoCard type='video' />
					</div>
				</div>
			)}
		</div>
	)
}

export default ServiceInner
