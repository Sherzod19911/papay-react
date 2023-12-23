import { createSelector } from "@reduxjs/toolkit"
import { AppRootState } from "../../../css/types/screen"


const selectHomePage = (state: AppRootState) => state.homePage;

export const retrieveTopRestaurants = createSelector(
    selectHomePage,
(HomePage) => HomePage.topRestaurants
);

export const retrieveBestRestaurants = createSelector(
    selectHomePage,
(HomePage) => HomePage.bestRestaurants
);

export const retrieveTrendProducts = createSelector(
    selectHomePage,
(HomePage) => HomePage.trendProducts
);

export const retrieveBestBoarticles = createSelector(
    selectHomePage,
(HomePage) => HomePage.bestBoarticles
);

export const retrieveTrendBoarticles= createSelector(
    selectHomePage,
(HomePage) => HomePage.trendBoarticles
);

export const retrieveNewsBoarticles= createSelector(
    selectHomePage,
(HomePage) => HomePage.newsBoarticles
);     