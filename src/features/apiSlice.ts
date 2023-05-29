import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_KEY = "a69cb9134c1d45e4a58314cca10a7809";
const API_URL = "https://news-proxy.netlify.app/api/";
const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getTopNews: builder.query({
      query: (country) =>
        `/top-headlines?country=${country}&apiKey=${API_KEY}&pageSize=12`,
    }),
    getSources: builder.query({
      query: () => `/top-headlines/sources?apiKey=${API_KEY}`,
    }),
    getArticleFromPublisher: builder.query({
      query: (source: string | null) => {
        return `/top-headlines?sources=${source}&apiKey=${API_KEY}&pageSize=12`;
      },
    }),
    getArticleFromCategory: builder.query({
      query: (category: string | null) => {
        return `/top-headlines?category=${category}&apiKey=${API_KEY}&pageSize=12`;
      },
    }),
  }),
});

export const {
  useGetTopNewsQuery,
  useGetSourcesQuery,
  useGetArticleFromPublisherQuery,
  useGetArticleFromCategoryQuery,
} = newsApi;
export default newsApi;
