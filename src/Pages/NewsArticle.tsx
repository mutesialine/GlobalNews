// import { useEffect } from "react";

// import ArticleListCardSkeleton from "../components/section/ArticleListCardSkeleton";
import ArticleList from "../components/section/ArticleList";
import PublisherList from "../components/section/PubisherList";
// import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
// import { getSources, getTopHeadlines } from "../features/newsApi";
// import {
//   loadingData,
//   updateArticles,
//   updateCategory,
//   updatePublisher,
// } from "../features/news";
// import SortedArticles from "../components/section/SortedArticles";

const NewsArticles = () => {
  //   const dispatch = useAppDispatch();
  //   const { loading } = useAppSelector((state) => state.news);
  //   // async function fetchData() {
  //   //   const publishers = await getSources();
  //   //   const categories = await getSources();
  //   //   const data = await getTopHeadlines("us");
  //   //   dispatch(updateArticles(data.articles));
  //   //   dispatch(updatePublisher(publishers));
  //   //   dispatch(updateCategory(categories));
  //   //   dispatch(loadingData(false));
  //   // }
  //   // useEffect(() => {
  //   //   fetchData();
  //   // }, []);

  return (
    <div className="max-w-screen-xl min-h-screen mx-auto">
      <ArticleList />
    </div>
  );
};

export default NewsArticles;
