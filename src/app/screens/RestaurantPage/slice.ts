import { createSlice } from "@reduxjs/toolkit";
import { RestaurantPageState } from "../../../css/types/screen";

const initialState: RestaurantPageState = {
    targetRestaurants: [],
    randomRestaurants: [],
    chosenRestaurant: null,
    targetProducts: [],
<<<<<<< HEAD
    chosenProduct: null,
}  
     
=======
    chosenProduct: null
}  

>>>>>>> 7c49bdbc0020b3c9a9144e9e38d8f29405fbb205
const restaurantPageSlice = createSlice({
    name: "restaurantPage",
    initialState,
    reducers: {
<<<<<<< HEAD
    setTargetRestaurants: (state, action) => {
    state.targetRestaurants = action.payload;
=======
        setTargetRestaurants: (state, action) => {
           state.targetRestaurants = action.payload;
>>>>>>> 7c49bdbc0020b3c9a9144e9e38d8f29405fbb205
    },
    setRandomRestaurants: (state, action) => {
        state.randomRestaurants = action.payload;
    },
     setChosenRestaurant: (state, action) => {
    state.chosenRestaurant = action.payload;
    },
    setTargetProducts: (state, action) => {
    state.targetProducts = action.payload;
    },
    setChosenProduct: (state, action) => {
    state.chosenProduct = action.payload;
    },
  }
});

export const {
    setTargetRestaurants,
    setRandomRestaurants,
    setChosenRestaurant,
    setTargetProducts,
    setChosenProduct
} = restaurantPageSlice.actions;

const RestaurantPageReducer = restaurantPageSlice.reducer;
export default RestaurantPageReducer;