
import { createSlice } from "@reduxjs/toolkit";
import { BoArticle } from "./boArticle";
import { Product } from "./product";
import { Restaurant } from "./user";
export interface AppRootState {
    restaurantPage: any;
    homePage: HomePageState;

}

export interface HomePageState {
    topRestaurants: Restaurant[];
    bestRestaurants: Restaurant[];
    trendProducts: Product[];
    bestBoarticles: BoArticle[];
    trendBoarticles: BoArticle[];
    newsBoarticles: BoArticle[];
}
  // Restaurant page

  export interface  RestaurantPageState {
    targetRestaurants: Restaurant[],
    randomRestaurants: Restaurant[],
    chosenRestaurant:  Restaurant | null,
    targetProducts: Product[],
    chosenProduct: Product | null,
 }

