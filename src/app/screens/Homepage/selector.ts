import { createSelector } from "@reduxjs/toolkit"
import { AppRootState } from "../../../css/types/screen"
import { StaticDatePicker } from "@mui/lab"

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrieveTopRestaurants = createSelector(
    selectHomePage,
(HomePage) => HomePage.topRestaurants
);

export const retrieveBestRestaurants = createSelector(
    selectHomePage,
(HomePage) => HomePage.topRestaurants
);

export const retrieveTrendProducts = createSelector(
    selectHomePage,
(HomePage) => HomePage.topRestaurants
);

export const retrieveBestBoarticles = createSelector(
    selectHomePage,
(HomePage) => HomePage.topRestaurants
);

export const retrieveTrendBoarticles= createSelector(
    selectHomePage,
(HomePage) => HomePage.topRestaurants
);

export const retrieveNewsBoarticles= createSelector(
    selectHomePage,
(HomePage) => HomePage.topRestaurants
);