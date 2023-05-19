export interface Article {
  id?: string;
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
  category?: string;
  source: Publisher;
}

export interface Publisher {
  id: string | null;
  name: string;
  category: string;
}
