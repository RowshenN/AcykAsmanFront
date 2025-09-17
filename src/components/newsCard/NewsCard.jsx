import { Link } from "react-router-dom";
import { SebedimContext } from "../../utils/Context";
import { useContext } from "react";
import { BASE_URL } from "../../utils/Axios";
import VideoPlayer from "../videPlayer/VideoPlayer";
import Carousel from "../carousel/Carousel"; // import your existing Carousel
import CarouselNews from "../carousel/CarouselNews";
import NewsVideoPlayer from "../videPlayer/NewsVideoPlayer";

const NewsCard = ({ news }) => {
  const { dil } = useContext(SebedimContext);

  const images =
    news.Imgs?.map(
      (img) => `${BASE_URL}uploads/news/${img.src.split("\\").pop()}`
    ) || [];

  const videos =
    news.Videos?.map(
      (vid) => `${BASE_URL}uploads/news/${vid.src.split("\\").pop()}`
    ) || [];

  const hasImages = images.length > 0;
  const hasVideos = videos.length > 0;

  const title =
    dil === "tm" ? news.name_tm : dil === "ru" ? news.name_ru : news.name_en;

  const text =
    dil === "tm" ? news.text_tm : dil === "ru" ? news.text_ru : news.text_en;

  const date = news.date ? new Date(news.date).toLocaleDateString() : "";

  return (
    <Link to={`/news/inner/${news.id}`}>
      <div className="hover:bg-[#F3F3F3] dark:hover:bg-[#313133] transition-all duration-200  w-full border cursor-pointer hoverbg- border-border dark:border-borderDark rounded-[20px] xs:pt-[6px] md:pt-[10px] xs:px-[6px] md:px-[10px] xs:pb-3 md:pb-[33px] ">
        {/* media */}
        <div className="border border-border dark:border-borderDark rounded-[20px] xs:max-h-[175px] md:max-h-[250px] h-fit w-full relative">
          {hasImages ? (
            images.length > 1 ? (
              <CarouselNews images={images} />
            ) : (
              <>
                <img
                  src={images[0]}
                  alt={title}
                  className="w-full xs:h-[175px] md:h-[250px] object-cover rounded-[20px]"
                />
                <div className="absolute inset-0 bg-black/30 rounded-[20px]"></div>
              </>
            )
          ) : hasVideos ? (
            <>
              <NewsVideoPlayer src={videos[0]} />
              <div className="absolute inset-0 bg-black/30 rounded-[20px]"></div>
            </>
          ) : null}
        </div>

        {/* text */}
        <div className="xs:mt-3 md:mt-6 dark:text-white w-full">
          <h1 className="xs:mb-1 leading-tight md:mb-[10px] xs:text-[18px] md:text-[24px] font-[semibold] ">
            {title}
          </h1>
          <div className="w-fit mb-3 bg-[#DBDBDB] rounded-[5px] py-[5px] px-[9px] ">
            <p className="text-[12px] font-[regular]">{date}</p>
          </div>
          <p className="xs:text-[14px] xs:line-clamp-2 md:text-[18px] font-[regular]">
            {text}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
