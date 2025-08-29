<<<<<<< HEAD
import { Link } from "react-router-dom";
import surat from "../../images/newscard.png";

const NewsCard = () => {
  return (
    <Link to={"/news/inner"}>
      <div className="hover:bg-[#F3F3F3] dark:hover:bg-[#313133] transition-all duration-200  w-full border cursor-pointer hoverbg- border-border dark:border-borderDark rounded-[20px] pt-[10px] px-[10px] pb-[33px] ">
        <div className="w-full">
          {/* img div */}
          <div className="w-full mb-[10px] ">
            <img
              src={surat}
              alt="surat"
              className="w-full h-full xs:max-h-[175px] md:max-h-[221px] object-cover rounded-[10px] "
            />
          </div>
          {/* text div */}
          <div className="w-full flex flex-col items-baseline justify-start gap-[10px] ">
            <h1 className="xs:text-[16px] md:text-[18px] dark:text-white font-[semibold] leading-tight ">
              Türkmenistanyň Ministrler Kabinetiniň mejlisi
            </h1>
            <div className="w-fit bg-[#DBDBDB] rounded-[5px] py-[5px] px-[9px] ">
              <p className="text-[12px] font-[regular]">28 Mart 2024 ý</p>
            </div>{" "}
            <p className="xs:line-clamp-2 md:line-clamp-3  dark:text-white xs:text-[15px] md:text-[16px] font-[regular] leading-tight">
              Geçen hepdede Änew şäheriniň 2024-nji ýylda «Türki dünýäsiniň
              medeni paýtagty» diýlip yglan edilmegi mynasybetli ...
            </p>{" "}
          </div>{" "}
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
=======
import { Link } from 'react-router-dom'
import surat from '../../images/newscard.png'

const NewsCard = () => {
	return (
		<Link to={'/news/inner'}>
			<div className='hover:bg-[#F3F3F3] dark:hover:bg-[#313133] transition-all duration-200  w-full border cursor-pointer hoverbg- border-border dark:border-borderDark rounded-[20px] pt-[10px] px-[10px] pb-[33px] '>
				<div className='w-full'>
					{/* img div */}
					<div className='w-full mb-[10px] '>
						<img
							src={surat}
							alt='image'
							className='w-full h-full max-h-[221px] object-cover rounded-[10px] '
						/>
					</div>
					{/* text div */}
					<div className='w-full flex flex-col items-baseline justify-start gap-[10px] '>
						<h1 className='text-[18px] dark:text-white font-[semibold] leading-tight '>
							Türkmenistanyň Ministrler Kabinetiniň mejlisi
						</h1>
						<div className='w-fit bg-[#DBDBDB] rounded-[5px] py-[5px] px-[9px] '>
							<p className='text-[12px] font-[regular]'>28 Mart 2024 ý</p>
						</div>{' '}
						<p className='line-clamp-3  dark:text-white text-[16px] font-[regular] leading-tight'>
							Geçen hepdede Änew şäheriniň 2024-nji ýylda «Türki dünýäsiniň
							medeni paýtagty» diýlip yglan edilmegi mynasybetli ...
						</p>{' '}
					</div>{' '}
				</div>
			</div>
		</Link>
	)
}

export default NewsCard
>>>>>>> 79beaac15ae2517c6e88e0d069e056e8bb9cc177
