import surat from '../../images/donework.png'

const DoneWork = () => {
	return (
		<div className='w-full mb-84 text-white bg-blue rounded-[28px] py-5 px-5'>
			<div className='w-full flex items-start gap-6'>
				{/* text div */}
				<div className='w-[40%] flex pt-3 flex-col '>
					<h1 className='text-[31px] mb-6 font-[bold]'>
						Açyk Asman Yyldyzy (LOGO)
					</h1>
					<h2 className='text-[18px] font-[bold mb-[10px] '>
						Olympic Arena Opening Ceremony
					</h2>
					<div className='bg-white rounded-[5px] py-[5px] px-3 w-fit mb-[11px] '>
						<p className='text-[12px] font-[regular] text-black '>
							28 Sent 2017 ý
						</p>
					</div>
					<p className='text-[16px] font-[regular] mb-[30px] '>
						Olimpiýa arenasynda köp garaşylýan açylyş dabarasy 5000-den gowrak
						meşhur myhmany garşy aldy we bu dabara dünýäniň millionlarça
						tomaşaçylaryna göni efirde görkezildi. Sport ussatlygynyň we iň täze
						täzelikleriň baýramçylygy boldy...
					</p>
					<button className='px-[56px] w-fit py-[14px] bg-blue hover:bg-blue/10 border border-white rounded-[28px] text-white'>
						Giňişleýin
					</button>
				</div>

				{/* image div */}
				<div className='w-[60%]'>
					<img
						src={surat}
						alt='image'
						className='w-full h-full max-h-[345px] object-cover rounded-[20px]'
					/>
				</div>
			</div>
		</div>
	)
}

export default DoneWork
