export interface NewsArticle {
  urlToImage: string;
  title: string;
  formattedTime: string;
  index: number;
}

export interface NewsArticleList {
  articles: NewsArticle[];
}

export interface NewsPublisher {
  publisher: string;
}
