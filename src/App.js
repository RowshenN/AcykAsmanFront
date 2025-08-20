import './App.css'
import Router from './router/Router'
import { useTheme } from './utils/ThemeContext'

function App() {
	const { theme } = useTheme()

	return (
		<div
			className={`${
				theme === 'dark' ? 'bg-gradient-dark' : 'bg-gradient-light'
			} min-h-screen w-full pt-5 pb-[56px]`}
		>
			<div className='max-w-[1500px] w-[90%] mx-auto'>
				<Router />
			</div>
		</div>
	)
}

export default App
