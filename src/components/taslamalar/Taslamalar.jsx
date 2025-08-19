import { useState } from 'react'
import { FaAlignLeft, FaThLarge } from 'react-icons/fa'
import Card from '../taslamaCard/Card'
import LongCard from '../taslamaCard/LongCard'

const Taslamalar = () => {
	const [grid, setGrid] = useState(true)
	return (
		<div className='w-full mb-[42px]'>
			{/* header */}
			<div className='w-full mb-[34px] flex items-center justify-between'>
				<h1 className='text-[32px] font-[semibold] '>
					Taslamalar we sergiler{' '}
				</h1>

				{/* grid controller */}
				<div className='flex items-center justify-center gap-[26px]'>
					<FaThLarge
						onClick={() => setGrid(true)}
						className={`w-[32px] ${
							grid ? 'text-blue' : 'text-[#797979]'
						}  transition-all duration-200 hover:text-blue h-[32px] object-contain cursor-pointer`}
					/>

					<FaAlignLeft
						onClick={() => setGrid(false)}
						className={`w-[32px] ${
							!grid ? 'text-blue' : 'text-[#797979]'
						}  transition-all duration-200 hover:text-blue h-[32px] object-contain cursor-pointer`}
					/>
				</div>
			</div>

			{/* cards */}
			<div className='w-full mb-[44px] '>
				{grid ? (
					<div className='grid grid-cols-3 gap-[34px] w-full'>
						<Card />
						<Card />
						<Card />
					</div>
				) : (
					<div className='flex flex-col items-center justify-center gap-5 w-full divide-y divide-border '>
						<LongCard />
						<LongCard />
						<LongCard />
					</div>
				)}
			</div>

			{/* button */}
			<div className='w-full flex items-center justify-center'>
				<button className='w-fit text-center hover:bg-blue/80 transition-all duration-200 bg-blue text-white text-[14px] font-[regular] rounded-[28px] py-[14px] px-[32.5px] '>
					Ählisini görmek
				</button>
			</div>
		</div>
	)
}

export default Taslamalar
