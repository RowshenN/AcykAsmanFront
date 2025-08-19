import './App.css'
import Router from './router/Router'

function App() {
	return (
		<div className='bg-gradient-light dark:bg-[#161618] max-w-[1500px] w-full mx-auto pt-5 pb-[56px] '>
			<div className='w-[90%] mx-auto'>
				<Router />
			</div>
		</div>
	)
}

export default App
