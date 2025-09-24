import { Link } from "react-router-dom";
import Carousel from "../carousel/Carousel";
import VideoPlayer from "../videPlayer/VideoPlayer";
import { SebedimContext } from "../../utils/Context";
import { useContext } from "react";
import { BASE_URL } from "../../utils/Axios";

const base_url = `${BASE_URL}`;

const LongWorkCard = ({ service }) => {
  const { dil } = useContext(SebedimContext);

  // Prepare images
  const images =
    service.Imgs?.map((img) => `${BASE_URL}${img.src.split("\\").pop()}`) || [];

  // Prepare videos
  const videos =
    service.Videos?.map((vid) => `${base_url}${vid.src.split("\\").pop()}`) ||
    [];

  const hasImages = images.length > 0;
  const hasVideos = videos.length > 0;

  return (
    <Link
      to={`/work/inner?id=${service.id}`}
      className="w-full h-full md:flex-row xs:flex-col flex items-center justify-start xs:py-2 md:py-[18px] cursor-pointer xs:px-2 md:px-[18px] hover:bg-[#F3F3F3] dark:hover:bg-[#313133] dark:text-white transition-all duration-200"
    >
      <div className="flex h-full xs:w-full md:w-[50%] items-center justify-start gap-[22px]">
        {/* Media */}
        <div className="relative border xs:max-h-[200px] xs:max-w-[150px] md:max-w-[334px] border-border dark:border-borderDark rounded-[20px] w-full xs:min-h-[150px] md:max-h-[296px] h-full overflow-hidden">
          {hasImages ? (
            <Carousel images={images} overlay={true} />
          ) : hasVideos ? (
            <>
              <VideoPlayer src={videos[0]} />
              <div className="absolute inset-0 bg-black/30 rounded-[20px]"></div>
            </>
          ) : null}
        </div>

        {/* Text */}
        <div className=" w-full flex flex-col items-baseline justify-between  h-[170px] z-20">
          <h1 className="xs:mb-1 md:mb-[10px] xs:text-[20px] md:text-[24px] font-[semibold]">
            {dil === "tm"
              ? service.name_tm
              : dil === "ru"
              ? service.name_ru
              : service.name_en}
          </h1>
          <p className="md:hidden xs:block">
            {service?.date ? new Date(service.date).toLocaleDateString() : ""}
          </p>
          <p className="xs:text-[16px] md:line-clamp-none xs:line-clamp-3 md:text-[18px] font-[regular]">
            {dil === "tm"
              ? service.text_tm
              : dil === "ru"
              ? service.text_ru
              : service.text_en}
          </p>
        </div>
      </div>

      {/* Date */}
      <div className="w-1/2 xs:hidden md:flex items-center xs:justify-end md:justify-center relative z-20">
        <p>
          {service?.date ? new Date(service.date).toLocaleDateString() : ""}
        </p>
      </div>
    </Link>
  );
};

export default LongWorkCard;
