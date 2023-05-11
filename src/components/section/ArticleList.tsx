
import { Link } from "react-router-dom";
import NewsCard from "../ui/NewsCard";
import { NewsArticle, NewsArticleList } from "../../interfaces/interface";
import { useAppSelector } from "../../store";

const ArticleList = () => {
  const { newsArticle}:{ newsArticle: NewsArticleList } = useAppSelector((state) => state.news);

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8 px-5 md:px-16 mb-10`}
    >
      {newsArticle.articles?.map((article:NewsArticle, index:number) => (
        <Link
          to={"/fullArticle"}
          state={article}
          key={`articles-index${index}`}
        >
          <NewsCard {...article} />
        </Link>
      ))}
    </div>
  );
};

export default ArticleList;
