import { Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Navigation from '../components/nav/Navigation'
import PageLoading from '../components/pageLoading/PageLoading'
import Home from '../pages/home/Home'
import NotFound from '../pages/notFound/NotFound'
import { AboutUs, News, NewsInner, ServiceInner, Services, Works } from './Lazy'

const ScrollToTop = ({ children }) => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return children
}
const Router = () => {
	return (
		<BrowserRouter>
			<Navigation />
			<ScrollToTop>
				<Suspense fallback={<PageLoading />}>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/works' element={<Works />} />
						<Route path='/about' element={<AboutUs />} />
						<Route path='/news' element={<News />} />
						<Route path='/news/inner' element={<NewsInner />} />
						<Route path='/services' element={<Services />} />
						<Route path='/services/inner' element={<ServiceInner />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Suspense>
			</ScrollToTop>
			<Footer />
		</BrowserRouter>
	)
}

export default Router
