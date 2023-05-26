import { useGetArticleFromPublisherQuery } from "../../features/apiSlice";
import { useAppSelector } from "../../hooks/storeHooks";
import { Article } from "../../interfaces/interface";
import NewsCategories from "../ui/NewsCategories";

const SortedArticles = () => {
  const selectedPublisher = useAppSelector((state) => {
    return state.news.selectedPublisher;
  });
  const { data: articleFromPublisher } =
    useGetArticleFromPublisherQuery(selectedPublisher);

  const newsArticle: Article[] = selectedPublisher
    ? articleFromPublisher?.articles
    : null;

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
