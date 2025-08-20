import NewsCard from '../../components/newsCard/NewsCard'

const News = () => {
	return (
		<div className='w-full'>
			<div className='w-full flex items-center justify-start mb-[18px] '>
				<h1 className='text-[24px] font-[semibold] dark:text-white '>
					Tazelikler
				</h1>
			</div>
			<div className='w-full grid grid-cols-news-cards gap-5 '>
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
			</div>{' '}
		</div>
	)
}

export default News
