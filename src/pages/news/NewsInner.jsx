import { Carousel } from 'antd'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import NewsCard from '../../components/newsCard/NewsCard'
import surat from '../../images/carouselImg.png'

const NewsInner = () => {
	const navigate = useNavigate()
	return (
		<div className='w-full'>
			<div className='w-full flex items-center justify-start'>
				<RiArrowLeftSLine
					onClick={() => navigate(-1)}
					className='text-[24px] dark:text-white cursor-pointer mb-[38px] '
				/>
			</div>
			{/* carousel div */}
			<div className='w-full mb-[48px] '>
				<Carousel
					arrows
					infinite={false}
					// prevArrow={
					// 	<button className='absolute left-2 top-1/2 -translate-y-1/2 z-10'>
					// 		<img src={left} alt='prev' className='w-[50px] h-[38px]' />
					// 	</button>
					// }
					// nextArrow={
					// 	<button className='absolute right-2 top-1/2 -translate-y-1/2 z-10'>
					// 		<img src={right} alt='next' className='w-[50px] h-[38px]' />
					// 	</button>
					// }
				>
					<div className='max-h-[80vh] h-full w-full '>
						<img
							src={surat}
							alt='image'
							className='w-full h-full object-cover '
						/>
					</div>
					<div className='max-h-[80vh] h-full w-full '>
						<img
							src={surat}
							alt='image'
							className='w-full h-full object-cover '
						/>
					</div>
					<div className='max-h-[80vh] h-full w-full '>
						<img
							src={surat}
							alt='image'
							className='w-full h-full object-cover '
						/>
					</div>
				</Carousel>
			</div>
			{/* header */}
			<div className='w-full mb-8 flex items-center justify-start gap-6 '>
				<h1 className='text-[32px] font-[semibold] dark:text-white '>
					{' '}
					Жаркий Новый Год
				</h1>
				<div className='w-fit bg-[#DBDBDB] rounded-[6px] py-[13px] px-[27px] text-[18px] font-[regular] '>
					<p>15.05.2025</p>
				</div>
			</div>
			<p className='text-[18px] font-[regular] dark:text-white mb-7 '>
				1 августа 2025 года Кабинетом Министров Республики Узбекистан было
				принято Постановление №490, официально закрепляющее параметры реализации
				проекта всесезонного курорта Sea Breeze Uzbekistan и подтверждающее
				готовность государства к сотрудничеству с Agalarov Development на основе
				открытости, экологической ответственности и стратегического подхода к
				развитию туристической инфраструктуры. 1 августа 2025 года Кабинетом
				Министров Республики Узбекистан было принято Постановление №490,
				официально закрепляющее параметры реализации проекта всесезонного
				курорта Sea Breeze Uzbekistan и подтверждающее готовность государства к
				сотрудничеству с Agalarov Development на основе открытости,
				экологической ответственности и стратегического подхода к развитию
				туристической инфраструктуры.1 августа 2025 года Кабинетом Министров
				Республики Узбекистан было принято Постановление №490, официально
				закрепляющее параметры реализации проекта всесезонного курорта Sea
				Breeze Uzbekistan и подтверждающее готовность государства к
				сотрудничеству с Agalarov Development на основе открытости,
				экологической ответственности и стратегического подхода к развитию
				туристической инфраструктуры.1 августа 2025 года Кабинетом Министров
				Республики Узбекистан было принято Постановление №490, официально
				закрепляющее параметры реализации проекта всесезонного курорта Sea
				Breeze Uzbekistan и подтверждающее готовность государства к
				сотрудничеству с Agalarov Development на основе открытости,
				экологической ответственности и стратегического подхода к развитию
				туристической инфраструктуры.1 августа 2025 года Кабинетом Министров
				Республики Узбекистан было принято Постановление №490, официально
				закрепляющее параметры реализации проекта всесезонного курорта Sea
				Breeze Uzbekistan и подтверждающее готовность государства к
				сотрудничеству с Agalarov Development на основе открытости,
				экологической ответственности и стратегического подхода к развитию
				туристической инфраструктуры.
			</p>
			<div className='w-full text-[18px] dark:text-white font-[regular]  mb-[116px] '>
				<ul>
					<li>
						общая площадь будущего курорта составит 577 гектаров на территории
						Бостанлыкского района Ташкентской области;
					</li>

					<li>
						общая площадь будущего курорта составит 577 гектаров на территории
						Бостанлыкского района Ташкентской области;
					</li>
				</ul>
			</div>
			{/* other videos */}
			<div className='w-full'>
				<h1 className='text-left mb-7 text-[24px] dark:text-white font-[semibold] '>
					Beýleki wideolar
				</h1>
				<div className='w-full grid grid-cols-news-cards gap-5 '>
					<NewsCard />
					<NewsCard />
					<NewsCard />
				</div>{' '}
			</div>
		</div>
	)
}

export default NewsInner
