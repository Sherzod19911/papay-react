
import { createSlice } from "@reduxjs/toolkit";
import { BoArticle } from "./boArticle";
import { Product } from "./product";
import { Restaurant } from "./user";

       /*react app state*/
export interface AppRootState {
    homePage: HomePageState;
    restaurantPage: RestaurantPageState;

}
   /**HOMEPAGE */
export interface HomePageState {
    topRestaurants: Restaurant[];
    bestRestaurants: Restaurant[];
    trendProducts: Product[];
    bestBoarticles: BoArticle[];
    trendBoarticles: BoArticle[];
    newsBoarticles: BoArticle[];
}

  /**RESTAURANT PAGE  */
   export interface RestaurantPageState {
    targetRestaurants: Restaurant[];
    randomRestaurants: Restaurant[];
    chosenRestaurant: Restaurant | null;
    targetProducts: Product[];
    chosenProduct: Product | null;
}

// OrdersPageState Interface
export interface OrdersPageState {
    // pausedOrders: Order[];
    // processOrders: Order[];
    // finishedOrders: Order[];
  }