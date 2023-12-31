

import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../css/types/screen";

const initialState: HomePageState = {
  topRestaurants: [],
  bestRestaurants: [],
  trendProducts: [],
  bestBoarticles: [],
  trendBoarticles: [],
  newsBoarticles: [],
};

const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopRestaurants: (state, action) => {
      state.topRestaurants = action.payload;
    },
    setBestRestaurants: (state, action) => {
      state.bestRestaurants = action.payload;
    },
    setTrendProducts: (state, action) => {
      state.trendProducts = action.payload;
    },
    setBestBoArticles: (state, action) => {
      state.bestBoarticles = action.payload;
    },
    setTrendBoArticles: (state, action) => {
      state.trendBoarticles = action.payload;
    },
    setNewsBoArticles: (state, action) => {
      state.newsBoarticles = action.payload;
    },
  },
});

export const {
  setTopRestaurants,
  setBestRestaurants,
  setTrendProducts,
  setBestBoArticles,
  setTrendBoArticles,
  setNewsBoArticles,
} = HomePageSlice.actions;

const HomePageReducer = HomePageSlice.reducer;
export default HomePageReducer;
