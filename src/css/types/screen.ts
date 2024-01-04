
import { createSlice } from "@reduxjs/toolkit";
import { BoArticle } from "./boArticle";
import { Product } from "./product";
import { Restaurant } from "./user";
import { Order } from "./order";

       /*react app state*/
export interface AppRootState {
    homePage: HomePageState;
    restaurantPage: RestaurantPageState;
    ordersPage: OrdersPageState;
    communityPage: CommunityPageState;


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
    pausedOrders: Order[];
    processOrders: Order[];
    finishedOrders: Order[];
  }
  /**COMMUNITY PAGE */
export interface CommunityPageState {
    targetBoArticles: BoArticle[]
  }