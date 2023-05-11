

import NewsCard from "../ui/NewsCard";
import { useAppSelector } from "../../hooks/storeHooks";

const ArticleList = () => {
  const { newsArticle, localLoading } = useAppSelector((state) => state.news);
  console.log(newsArticle, '===================')

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-5 md:px-16 mb-10 ${
        localLoading ? "opacity-30" : ""
      }`}
    >
      {newsArticle?.map((article, index) => (
        <div
          key={`articles-index${index}`}
        >
          <NewsCard {...article} />
        </div>
      ))}
    </div>
  );
};

export default ArticleList;