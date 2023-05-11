import { NewsArticle } from './../interfaces/interface';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface state {
  newsArticle:NewsArticle[];
    newsPublisher:NewsArticle[];
    selectedPublisher:string |null 
    searchArticles:NewsArticle[];
    loading:boolean;
     localLoading:boolean; 
     inputValue:string|null
    }

const initialState:state = {
  newsArticle: [],
  newsPublisher: [],
  selectedPublisher: null,
  searchArticles: [],
  inputValue: "",
  loading: true,
  localLoading: false,
};
export const newSlice = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {
    updateArticles: (state, action:PayloadAction<NewsArticle[]>) => {
      state.newsArticle = action.payload;
    },
    updatePublisher: (state, action:PayloadAction<NewsArticle[]>) => {
      state.newsPublisher = action.payload;
    },
    choosePublisher: (state, action :PayloadAction<string |null >) => {
     // state.inputValue = null;
      state.selectedPublisher = action.payload;
    },
    searchCategory: (state, action:PayloadAction<NewsArticle[]>) => {
      state.searchArticles = action.payload;
    },
    setInputValue: (state, action:PayloadAction<string |null>) => {
      state.inputValue = action.payload;
    },
    loadingData: (state, action:PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setLocalLoading: (state, action:PayloadAction<boolean>) => {
      state.localLoading = action.payload;
    },
  },
});

export const {
  updateArticles,
  updatePublisher,
  choosePublisher,
  searchCategory,
  setInputValue,
  loadingData,
  setLocalLoading,
} = newSlice.actions;
export default newSlice.reducer;
