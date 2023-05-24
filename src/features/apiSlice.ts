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
  }),
});

export const { useGetTopNewsQuery, useGetSourcesQuery } = newsApi;
export default newsApi;
