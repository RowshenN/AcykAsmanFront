import { Link } from "react-router-dom";
import Carousel from "../carousel/Carousel";
import VideoPlayer from "../videPlayer/VideoPlayer";
import { SebedimContext } from "../../utils/Context";
import { useContext } from "react";
import { BASE_URL } from "../../utils/Axios";

const ServiceCard = ({ service }) => {
  const { dil } = useContext(SebedimContext);

  const base_url = `${BASE_URL}uploads/service/`;

  const images =
    service.Imgs?.map((img) => `${base_url}${img.src.split("\\").pop()}`) || [];

  const videos =
    service.Videos?.map((vid) => `${base_url}${vid.src.split("\\").pop()}`) ||
    [];

  const hasImages = images.length > 0;
  const hasVideos = videos.length > 0;

  return (
    <Link
      to={`/services/inner?type=photo&id=${service.id}`}
      className="relative overflow-hidden"
    >
      {/* tag */}
      <div className="absolute bg-border/30 dark:bg-borderDark/30 rounded-[6px] py-1 px-[10px] text-white xs:text-[14px] md:text-[18px] font-[regular] xs:top-[5%] md:top-[2%] xs:left-[6%] md:left-[3%] z-10">
        <p>
          {hasImages
            ? dil === "tm"
              ? "Surat"
              : dil === "ru"
              ? "Фото"
              : "Photo"
            : hasVideos
            ? dil === "tm"
              ? "Wideo"
              : dil === "ru"
              ? "Видео"
              : "Video"
            : ""}
        </p>
      </div>

      <div className="border border-border dark:border-borderDark rounded-[20px] xs:max-h-[250px] md:max-h-[360px] w-full relative">
        {hasImages ? (
          images.length > 1 ? (
            <Carousel images={images} overlay={true} />
          ) : (
            <>
              <img
                src={images[0]}
                alt={service.name_en || service.name_tm}
                className="w-full h-full object-cover rounded-[20px]"
              />
              <div className="absolute inset-0 bg-black/30 rounded-[20px]"></div>
            </>
          )
        ) : hasVideos ? (
          <>
            <div className="xs:h-[250px] md:h-[360px] ">
              <VideoPlayer src={videos[0]} />
            </div>
            <div className="absolute inset-0 bg-black/30 rounded-[20px]"></div>
          </>
        ) : null}
      </div>

      {/* text */}
      <div className="xs:mt-3 md:mt-6 dark:text-white w-full">
        <h1 className="xs:mb-1 leading-tight md:mb-[10px] xs:text-[18px] md:text-[24px] font-[semibold] ">
          {dil === "tm"
            ? service.name_tm
            : dil === "ru"
            ? service.name_ru
            : service.name_en}
        </h1>
        <p className="xs:text-[14px] xs:line-clamp-2 md:text-[18px] font-[regular]">
          {dil === "tm"
            ? service.text_tm
            : dil === "ru"
            ? service.text_ru
            : service.text_en}
        </p>
      </div>
    </Link>
  );
};

export default ServiceCard;
