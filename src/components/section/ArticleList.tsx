import { useAppSelector } from "../../hooks/storeHooks";
import NewsCard from "../ui/NewsCard";
import ImageCard from "../ui/ImageCard";
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useRef } from "react";

const ArticleList = () => {
  const { newsArticle, localLoading } = useAppSelector((state) => state.news);
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <div className="w-3/5 px-5 py-8">
      <div className="relative z-10">
        <Swiper
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          ref={swiperRef}
          className="relative"
        >
          {newsArticle?.map((article, index) => (
            <a href="" key={`articles-index${index}`} className="w-full">
              <SwiperSlide className="relative flex ">
                <NewsCard {...article} />
              </SwiperSlide>
            </a>
          ))}
        </Swiper>
        <div className="absolute right-0 z-20 flex flex-col items-end bottom-16">
          <div onClick={() => swiperRef.current?.swiper.slideNext()}>
            <BsChevronRight size={44} className="p-2 bg-red-600" />
          </div>
          <div onClick={() => swiperRef.current?.swiper.slidePrev()}>
            <BsChevronLeft size={44} className="p-2 bg-white" />
          </div>
        </div>
      </div>
      <div className="flex gap-x-4">
        {newsArticle?.slice(3, 10).map((article, index) => (
          <ImageCard {...article} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
