<<<<<<< HEAD
import { Link } from "react-router-dom";
import surat from "../../images/cardImage.png";

const LongPhotoCard = () => {
  return (
    <Link
      to={"/services/inner?type=photo"}
      className="w-full flex items-center justify-start py-[18px] cursor-pointer px-[18px] hover:bg-[#F3F3F3] dark:hover:bg-[#313133] dark:text-white transition-all duration-200  "
    >
      <div className="flex w-[50%] items-center justify-start gap-[22px] ">
        <div className="border border-border dark:border-borderDark  rounded-[20px] xs:max-h-[70%] md:max-h-[360px] h-full w-full  ">
          <img
            src={surat}
            alt="surat"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>

        <div className="">
          <h1 className=" mb-[10px] text-[24px] font-[semibold] ">
            Concert New World
          </h1>
          <p className="text-[18px] font-[regular]">
            An immersive multimedia exhibition at the art space Luminar
          </p>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center ">
        <p>15.05.2025</p>
      </div>
    </Link>
  );
};

export default LongPhotoCard;
=======
import { Link } from 'react-router-dom'
import surat from '../../images/cardImage.png'

const LongPhotoCard = () => {
	return (
		<Link
			to={'/services/inner?type=photo'}
			className='w-full flex items-center justify-start py-[18px] cursor-pointer px-[18px] hover:bg-[#F3F3F3] dark:hover:bg-[#313133] dark:text-white transition-all duration-200  '
		>
			<div className='flex w-[50%] items-center justify-start gap-[22px] '>
				<div className='border border-border dark:border-borderDark  rounded-[20px] xs:max-h-[70%] md:max-h-[360px] h-full w-full  '>
					<img
						src={surat}
						alt='image'
						className='w-full h-full object-cover rounded-[20px]'
					/>
				</div>

				<div className=''>
					<h1 className=' mb-[10px] text-[24px] font-[semibold] '>
						Concert New World
					</h1>
					<p className='text-[18px] font-[regular]'>
						An immersive multimedia exhibition at the art space Luminar
					</p>
				</div>
			</div>

			<div className='w-1/2 flex items-center justify-center '>
				<p>15.05.2025</p>
			</div>
		</Link>
	)
}

export default LongPhotoCard
>>>>>>> 79beaac15ae2517c6e88e0d069e056e8bb9cc177
