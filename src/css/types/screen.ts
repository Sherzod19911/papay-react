
import { createSlice } from "@reduxjs/toolkit";
import { BoArticle } from "./boArticle";
import { Product } from "./product";
import { Restaurant } from "./user";

       /*react app state*/
export interface AppRootState {
    restaurantPage: any;
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
<<<<<<< HEAD
  // Restaurant page

  export interface  RestaurantPageState {
    targetRestaurants: Restaurant[],
    randomRestaurants: Restaurant[],
    chosenRestaurant:  Restaurant | null,
    targetProducts: Product[],
    chosenProduct: Product | null,
 }

=======

  /**RESTAURANT PAGE  */
   export interface RestaurantPageState {
    targetRestaurants: Restaurant[];
    randomRestaurants: Restaurant[];
    chosenRestaurant: Restaurant | null;
    targetProducts: Product[];
    chosenProduct: Product | null;
}
>>>>>>> 7c49bdbc0020b3c9a9144e9e38d8f29405fbb205
