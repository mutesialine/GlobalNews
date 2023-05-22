import { Publisher } from "./../interfaces/interface";
const API_KEY = "a69cb9134c1d45e4a58314cca10a7809";
const API_URL = "https://news-proxy.netlify.app/api";

export const getTopHeadlines = async (
  country: string,
  sources: string | null = null
) => {
  try {
    const url = sources
      ? `${API_URL}/top-headlines?sources=${sources}&apiKey=${API_KEY}&pageSize=12`
      : `${API_URL}/top-headlines?country=${country}&apiKey=${API_KEY}&pageSize=12`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return { message: "An error occurred. Please try again later." };
  }
};

export const getSources = async (): Promise<Publisher[]> => {
  try {
    const url = `${API_URL}/top-headlines/sources?apiKey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    const source = data.sources;
    return source;
  } catch (error) {
    throw Error("An error occurred. Please try again later.");
  }
};

export const getEverything = async (value: string) => {
  try {
    const url = `${API_URL}/everything?q=${value}&apiKey=${API_KEY}&pageSize=20`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return { message: "An error occurred. Please try again later." };
  }
};
