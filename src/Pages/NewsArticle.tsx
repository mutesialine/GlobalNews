// import { useEffect } from "react";

// import ArticleListCardSkeleton from "../components/section/ArticleListCardSkeleton";
import ArticleList from "../components/section/ArticleList";
import PublisherList from "../components/section/PubisherList";

const NewsArticles = () => {
  return (
    <div className="max-w-screen-xl min-h-screen mx-auto">
      <PublisherList />
      <ArticleList />
    </div>
  );
};

export default NewsArticles;
