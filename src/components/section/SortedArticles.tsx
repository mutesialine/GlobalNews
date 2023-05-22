import { useAppSelector } from "../../hooks/storeHooks";
import NewsCategories from "../ui/NewsCategories";

const SortedArticles = () => {
  const { newsArticle } = useAppSelector((state) => state.news);
  return (
    <div className="space-y-12 ">
      <h1 className="text-2xl font-bold"> All Categories</h1>
      <div className="grid grid-cols-3 gap-8">
        {newsArticle?.slice(4, 10).map((article, index) => (
          <a href="" key={`articles-index${index}`} className="w-full h-full">
            <NewsCategories {...article} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SortedArticles;
