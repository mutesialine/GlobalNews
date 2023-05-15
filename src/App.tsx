import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/storeHooks";
import Navbar from "./components/layouts/Navbar";
import { getSources, getTopHeadlines } from "./features/newsApi";
import { loadingData, updateArticles, updatePublisher } from "./features/news";
import ArticleList from "./components/section/ArticleList";
import PublisherList from "./components/section/PubisherList";
import ArticleListCardSkeleton from "./components/section/ArticleListCardSkeleton";
import ArticlesSearch from "./components/section/ArticlesSearch";

const NewsArticles = () => {
  const dispatch = useAppDispatch();
  const { loading, inputValue } = useAppSelector((state) => state.news);

  console.log(loading, "+++++");
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
    <div className="min-h-screen">
      <Navbar />
      {loading ? (
        <ArticleListCardSkeleton />
      ) : (
        <>
          <PublisherList />
          {!inputValue ? <ArticleList /> : <ArticlesSearch />}
        </>
      )}
    </div>
  );
};

export default NewsArticles;
