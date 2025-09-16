import { Link } from "react-router-dom";
import surat from "../../images/newscard.png";
import { SebedimContext } from "../../utils/Context";
import { useContext } from "react";
import { BASE_URL } from "../../utils/Axios";

const NewsCard = ({ news }) => {
  const { dil } = useContext(SebedimContext);
  const title =
    dil === "tm" ? news.name_tm : dil === "ru" ? news.name_ru : news.name_en;

  const text =
    dil === "tm" ? news.text_tm : dil === "ru" ? news.text_ru : news.text_en;

  const imgSrc =
    news.Imgs && news.Imgs.length > 0
      ? `${BASE_URL}uploads/news/${news.Imgs[0].src.split("\\").pop()}`
      : surat;

  const date = news.date ? new Date(news.date).toLocaleDateString() : "";

  return (
    <Link to={`/news/inner/${news.id}?type=photo`}>
      <div className="hover:bg-[#F3F3F3] dark:hover:bg-[#313133] transition-all duration-200  w-full border cursor-pointer hoverbg- border-border dark:border-borderDark rounded-[20px] xs:pt-[6px] md:pt-[10px] xs:px-[6px] md:px-[10px] xs:pb-3 md:pb-[33px] ">
        <div className="w-full">
          {/* img div */}
          <div className="w-full mb-[10px] ">
            <img
              src={imgSrc}
              alt={title || "news image"}
              className="w-full h-full xs:min-h-[125px] md:max-h-[221px] object-cover rounded-[10px] "
            />
          </div>
          {/* text div */}
          <div className="w-full flex flex-col items-baseline justify-start gap-[10px] ">
            <h1 className="xs:text-[16px] xs:line-clamp-2 md:line-clamp-none md:text-[18px] dark:text-white font-[semibold] leading-tight ">
              {title}
            </h1>
            <div className="w-fit bg-[#DBDBDB] rounded-[5px] py-[5px] px-[9px] ">
              <p className="text-[12px] font-[regular]">{date}</p>
            </div>
            <p className="xs:line-clamp-2 md:line-clamp-3 dark:text-white xs:text-[15px] md:text-[16px] font-[regular] leading-tight">
              {text}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
