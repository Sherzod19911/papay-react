import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../../css/types/screen";


const selectRestaurantPage = (state: AppRootState) => state.restaurantPage;
<<<<<<< HEAD
export const retrieveTargetRestaurants = createSelector(
=======
export const retrieveTargetRestaurant = createSelector(
>>>>>>> 7c49bdbc0020b3c9a9144e9e38d8f29405fbb205
    selectRestaurantPage,
(RestaurantPage) => RestaurantPage.targetRestaurants
);
export const retrieveRandomRestaurants = createSelector(
    selectRestaurantPage,
(RestaurantPage) => RestaurantPage.randomRestaurants
);
export const retrieveChosenRestaurants = createSelector(
    selectRestaurantPage,
(RestaurantPage) => RestaurantPage.chosenRestaurant
);
export const retrieveTargetProducts = createSelector(
    selectRestaurantPage,
(RestaurantPage) => RestaurantPage.targetProducts
);
export const retrieveChosenDish = createSelector(
    selectRestaurantPage,
(RestaurantPage) => RestaurantPage.chosenProduct
);
