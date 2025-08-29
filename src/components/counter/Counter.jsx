import { useEffect, useState } from 'react'

const Counter = ({ end, duration = 2 }) => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		let start = 0
		const incrementTime = 50
		const increment = end / ((duration * 1000) / incrementTime)

		const timer = setInterval(() => {
			start += increment
			if (start >= end) {
				start = end
				clearInterval(timer)
			}
			setCount(Math.floor(start))
		}, incrementTime)

		return () => clearInterval(timer)
	}, [end, duration])

	return <>{count}</>
}

export default Counter
