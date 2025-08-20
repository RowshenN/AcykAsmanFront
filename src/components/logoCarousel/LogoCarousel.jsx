import { useEffect, useRef } from 'react'
import logo1 from '../../images/logo1.png'
import logo2 from '../../images/logo2.png'
import logo3 from '../../images/logo3.png'
import logo4 from '../../images/logo4.png'

const LogosCarousel = () => {
	const logos = [logo1, logo2, logo3, logo4] // base list
	const scrollerRef = useRef(null)

	useEffect(() => {
		const el = scrollerRef.current
		if (!el) return

		let rafId
		let last = performance.now()
		const pxPerMs = 0.08 // ~4.8px/sec (tweak to taste)

		const tick = now => {
			const dt = now - last
			last = now

			// advance the scroll
			el.scrollLeft += dt * pxPerMs

			// when we've scrolled past half (first copy), jump back by half
			const half = el.scrollWidth / 2
			if (el.scrollLeft >= half) {
				el.scrollLeft -= half
			}

			rafId = requestAnimationFrame(tick)
		}

		rafId = requestAnimationFrame(tick)
		return () => cancelAnimationFrame(rafId)
	}, [])

	return (
		<div className='mb-[106px] dark:text-white '>
			<div className='w-full flex items-center justify-center mb-6'>
				<h1 className='text-[24px] font-[semibold]'>
					Hyzmatdaş we müşderi tarapyndan ynamdar
				</h1>
			</div>

			<div className='relative w-full py-6'>
				{/* Fade edges */}
				<div className='pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white dark:from-black to-transparent z-10' />
				<div className='pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white dark:from-black to-transparent z-10' />

				{/* Scroll viewport */}
				<div ref={scrollerRef} className='w-full overflow-hidden'>
					{/* Track (rendered twice, side-by-side) */}
					<div className='flex w-max'>
						{[...logos, ...logos].map((logo, i) => (
							<div
								key={i}
								className='shrink-0 mx-3 border py-2 px-6 border-border dark:border-borderDark rounded-[18px]'
							>
								<img
									src={logo}
									alt={`logo-${i}`}
									className='h-[75px] w-auto object-contain'
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default LogosCarousel
