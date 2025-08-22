import { AnimatePresence } from 'framer-motion'
import { Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Navigation from '../components/nav/Navigation'
import PageLoading from '../components/pageLoading/PageLoading'
import PageWrapper from '../components/PageWrapper'
import Home from '../pages/home/Home'
import NotFound from '../pages/notFound/NotFound'
import { AboutUs, News, NewsInner, ServiceInner, Services } from './Lazy'

const ScrollToTop = ({ children }) => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return children
}

const Router = () => {
	const location = useLocation()

	return (
		<>
			<Navigation />
			<ScrollToTop>
				<AnimatePresence mode='wait'>
					<Suspense fallback={<PageLoading />}>
						<Routes location={location} key={location.pathname}>
							<Route
								path='/'
								element={
									<PageWrapper>
										<Home />
									</PageWrapper>
								}
							/>
							<Route
								path='/about'
								element={
									<PageWrapper>
										<AboutUs />
									</PageWrapper>
								}
							/>
							<Route
								path='/news'
								element={
									<PageWrapper>
										<News />
									</PageWrapper>
								}
							/>
							<Route
								path='/news/inner'
								element={
									<PageWrapper>
										<NewsInner />
									</PageWrapper>
								}
							/>
							<Route
								path='/services'
								element={
									<PageWrapper>
										<Services />
									</PageWrapper>
								}
							/>
							<Route
								path='/services/inner'
								element={
									<PageWrapper>
										<ServiceInner />
									</PageWrapper>
								}
							/>
							<Route
								path='*'
								element={
									<PageWrapper>
										<NotFound />
									</PageWrapper>
								}
							/>
						</Routes>
					</Suspense>
				</AnimatePresence>
			</ScrollToTop>
			<Footer />
		</>
	)
}

export default () => (
	<BrowserRouter>
		<Router />
	</BrowserRouter>
)
