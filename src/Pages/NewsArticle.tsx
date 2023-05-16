import { useEffect } from "react";

import ArticleListCardSkeleton from "../components/section/ArticleListCardSkeleton";
import PublisherList from "../components/section/PubisherList";
import ArticleList from "../components/section/ArticleList";
import ArticlesSearch from "../components/section/ArticlesSearch";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { getSources, getTopHeadlines } from "../features/newsApi";
import { loadingData, updateArticles, updatePublisher } from "../features/news";

const NewsArticles = () => {
  const dispatch = useAppDispatch();
  const { loading, inputValue } = useAppSelector((state) => state.news);
  async function fetchData() {
    const publishers = await getSources();
    const data = await getTopHeadlines("us");
    dispatch(updateArticles(data.articles));
    dispatch(updatePublisher(publishers));
    dispatch(loadingData(false));
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-screen-xl min-h-screen mx-auto">
      {loading ? (
        <ArticleListCardSkeleton />
      ) : (
        <>
          {!inputValue ? <ArticleList /> : <ArticlesSearch />}
          <PublisherList />
        </>
      )}
    </div>
  );
};

export default NewsArticles;
