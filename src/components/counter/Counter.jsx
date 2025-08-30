import { useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const Counter = ({ end, duration = 2 }) => {
	const [count, setCount] = useState(0)
	const ref = useRef(null)

	const isInView = useInView(ref, { amount: 0.5, once: false })

	useEffect(() => {
		if (!isInView) return

		setCount(0)

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
	}, [isInView, end, duration])

	return <span ref={ref}>{count}</span>
}

export default Counter
