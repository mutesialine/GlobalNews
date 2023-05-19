import { useRef, RefObject } from "react";
import { getTopHeadlines } from "../../features/newsApi";
import {
  choosePublisher,
  loadingData,
  updateArticles,
  setLocalLoading,
} from "../../features/news";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";

const PublisherList = () => {
  const dispatch = useAppDispatch();
  const { newsPublisher, selectedPublisher } = useAppSelector(
    (state) => state.news
  );
  console.log("jskfd", newsPublisher);

  const refInput: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const handleScroll = (scrollOffset: number) => {
    const inputElement = refInput.current;
    if (inputElement) {
      inputElement.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  const handleSelectedPublisher = async (publisher: string | null) => {
    dispatch(setLocalLoading(true));
    dispatch(choosePublisher(publisher));
    const data = await getTopHeadlines("us", publisher);
    dispatch(updateArticles(data.articles));
    dispatch(loadingData(false));
    dispatch(setLocalLoading(false));
  };
  return (
    <div className="flex items-center px-8 py-2 text-white bg-gray-900 gap-x-6">
      <div
        onClick={() => handleScroll(-200)}
        className="p-2 rounded-full cursor-pointer hover:bg-gray-600"
      >
        <BsChevronLeft size={20} />
      </div>

      <div ref={refInput} className="flex overflow-hidden gap-x-8">
        <p
          className={`underline cursor-pointer hover:text-blue-50`}
          onClick={() => handleSelectedPublisher(null)}
        >
          All
        </p>
        {newsPublisher?.map((publisher?) => (
          <p
            key={publisher?.id}
            className={`underline cursor-pointer font-bold hover:text-blue-700 shrink-0 ${
              selectedPublisher === publisher?.name ? "text-blue-700" : ""
            }`}
            onClick={() => handleSelectedPublisher(publisher?.id)}
          >
            {publisher.name}
          </p>
        ))}
      </div>
      <div
        onClick={() => handleScroll(200)}
        className="p-2 rounded-full cursor-pointer hover:bg-gray-600"
      >
        <BsChevronRight size={20} />
      </div>
    </div>
  );
};

export default PublisherList;
