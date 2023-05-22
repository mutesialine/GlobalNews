import {
  choosePublisher,
  loadingData,
  setLocalLoading,
  updateArticles,
} from "../../features/news";
import { getTopHeadlines } from "../../features/newsApi";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";

const Categories = () => {
  const { newsCategory } = useAppSelector((state) => state.news);
  console.log(newsCategory);
  const dispatch = useAppDispatch();
  const handleSelectedCategory = async (source: string | null) => {
    dispatch(setLocalLoading(true));
    const data = await getTopHeadlines("us", source);
    dispatch(updateArticles(data.articles));
    dispatch(loadingData(false));
    dispatch(setLocalLoading(false));
  };
  const categories = newsCategory.map((element?) => element?.category);
  const uniqueCategories = [...new Set(categories)];
  return (
    <div className="flex flex-col p-6 pb-3 text-black bg-white border shadow-md w-fit">
      {uniqueCategories.map((category, index) => (
        <p
          key={index}
          className="font-bold underline cursor-pointer hover:text-blue-700 shrink-0"
          onClick={() => handleSelectedCategory(null)}
        >
          {category}
        </p>
      ))}
    </div>
  );
};

export default Categories;
