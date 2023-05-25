import { useRef, RefObject } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useGetSourcesQuery } from "../../features/apiSlice";
import { Publisher } from "../../interfaces/interface";
import { choosePublisher } from "../../features/news";
import { useAppDispatch } from "../../hooks/storeHooks";

const PublisherList = () => {
  const dispatch = useAppDispatch();

  const { data } = useGetSourcesQuery(null);
  const Publishers: Publisher[] = data?.sources;

  const refInput: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const handleScroll = (scrollOffset: number) => {
    const inputElement = refInput.current;
    if (inputElement) {
      inputElement.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  const handleSelectedPublisher = async (publisher: string | null) => {
    dispatch(choosePublisher(publisher));
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
        <p className={`underline cursor-pointer hover:text-blue-50`}>All</p>
        {Publishers?.map((publisher) => (
          <p
            key={publisher?.id}
            className="font-bold underline cursor-pointer hover:text-blue-700 shrink-0"
            onClick={() => handleSelectedPublisher(publisher.id)}
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
