import { useEffect } from "react";
import { useAppDispatch } from "./hooks/storeHooks";
import ArticlePublisher from "./components/section/ArticlePubisher";
import Navbar from "./components/layouts/Navbar";
import { getSources, getTopHeadlines } from "./features/newsApi";
import { loadingData, updateArticles, updatePublisher } from "./features/news";
import ArticleList from "./components/section/ArticleList";

const NewsArticles = () => {
  const dispatch = useAppDispatch();

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
      <ArticlePublisher />
      <ArticleList />
    </div>
  );
};

export default NewsArticles;
