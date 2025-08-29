import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import './App.css'
import Router from './router/Router'
import SebedimContextProvider from './utils/Context'
import { useTheme } from './utils/ThemeContext'

function App() {
	const { theme } = useTheme()
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
			easing: 'ease-out',
		})
	}, [])

	return (
		<SebedimContextProvider>
			<div
				className={`${
					theme === 'dark' ? 'bg-gradient-dark' : 'bg-gradient-light'
				} min-h-screen w-full xs:pt-2 md:pt-5 pb-[56px]`}
			>
				<div className='max-w-[1500px] xs:w-[95%] md:w-[90%] mx-auto'>
					<Router />
				</div>
			</div>
		</SebedimContextProvider>
	)
}

export default App
