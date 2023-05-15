import { useEffect } from "react";
import { searchCategory, loadingData } from "../../features/news";
import NewsCard from "../ui/NewsCard";
import { getEverything } from "../../features/newsApi";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";

const ArticlesSearch = () => {
  const dispatch = useAppDispatch();
  const { searchArticles, inputValue } = useAppSelector((state) => state.news);

  const fetchData = async () => {
    const data = await getEverything(inputValue);
    dispatch(searchCategory(data.articles));
    dispatch(loadingData(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-8 px-5 py-8 mb-10 sm:grid-cols-2 md:grid-cols-3 md:px-16">
      {searchArticles?.length > 0 ? (
        searchArticles?.map((article, index: number) => (
          <NewsCard {...article} key={index} />
        ))
      ) : (
        <p className="text-lg">no results data found for " {inputValue} "</p>
      )}
    </div>
  );
};
export default ArticlesSearch;
