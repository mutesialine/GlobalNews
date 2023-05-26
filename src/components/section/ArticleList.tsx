import { useRef } from "react";
import NewsCard from "../ui/NewsCard";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
  useGetArticleFromPublisherQuery,
  useGetTopNewsQuery,
} from "../../features/apiSlice";
import { Article } from "../../interfaces/interface";
import NewsCategories from "../ui/NewsCategories";
import { useAppSelector } from "../../hooks/storeHooks";

const ArticleList = () => {
  const selectedPublisher = useAppSelector((state) => {
    return state.news.selectedPublisher;
  });

  const { data } = useGetTopNewsQuery("us");
  const { data: articleFromPublisher } =
    useGetArticleFromPublisherQuery(selectedPublisher);

  const newsArticle: Article[] = selectedPublisher
    ? articleFromPublisher?.articles
    : data?.articles;

  const swiperRef = useRef<SwiperRef>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-x-12">
        {/* main news */}
        <div className="w-3/5 px-5 py-8 space-y-3">
          <div className="relative z-10">
            <Swiper
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              ref={swiperRef}
              autoplay={{
                delay: 2000,
              }}
              className="relative mySwiper"
              modules={[Autoplay]}
            >
              {newsArticle?.map((article, index) => (
                <a href="" key={`articles-index-${index}`} className="w-full">
                  <SwiperSlide className="relative flex ">
                    <NewsCard {...article} />
                  </SwiperSlide>
                </a>
              ))}
            </Swiper>
            <div className="absolute bottom-0 right-0 z-20 flex flex-col items-end">
              <div onClick={() => swiperRef.current?.swiper.slideNext()}>
                <BsChevronRight
                  size={44}
                  className="p-2 text-white bg-red-600"
                />
              </div>
              <div onClick={() => swiperRef.current?.swiper.slidePrev()}>
                <BsChevronLeft size={44} className="p-2 bg-white" />
              </div>
            </div>
          </div>
        </div>
        {/* trending section */}
        {/* <div>
          <p className="py-6 text-lg font-bold">Trending</p>
          <div className="flex flex-col gap-y-2">
            {newsArticle?.slice(5, 9).map((article, index) => (
              <div
                className="flex items-center justify-between text-black cursor-pointer gap-x-4 group hover:opacity-90"
                key={index}
              >
                <div className="w-full">
                  <img src={article.urlToImage} alt="image" className="" />
                </div>

                <div className="">
                  <p className="text-base font-bold gap-x-2 hover:underline">
                    {article.title}
                  </p>
                  <ul className="pt-2 pl-5 space-y-3 text-sm text-white list-disc marker:text-white">
                    <li>{article.publishedAt}hours ago</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
      <div className="grid grid-cols-3 gap-4 ">
        {newsArticle?.slice(5, 11).map((article, index) => (
          <div key={index}>
            <NewsCategories {...article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
