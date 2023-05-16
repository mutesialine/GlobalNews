import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsArticles from "./Pages/NewsArticle";
import ArticleDetails from "./Pages/ArticleDetails";
import PageLayout from "./components/layouts/PageLayout";
import "swiper/css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<NewsArticles />} />
          <Route path="/fullArticle" element={<ArticleDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
