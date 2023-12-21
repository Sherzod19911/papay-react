import { createSlice} from "@reduxjs/toolkit";
import { HomePageState } from "../../../css/types/screen";

const initialState :  HomePageState = {
    topRestaurants: [],
    bestRestaurants: [],
    trendProducts: [],
    bestBoarticles: [],
    trendBoarticles: [],
    newsBoarticles: [],
    
}

const HomePageSlice = createSlice({
    name: 'homePage',
    initialState,
    reducers: {
        setTopRestaurants: (state, action)=> {
            state.topRestaurants = action.payload
        },
        bestRestaurants: (state, action)=> {
            state.topRestaurants = action.payload
        },
        trendProducts: (state, action)=> {
            state.topRestaurants = action.payload
        },
        bestBoarticles: (state, action)=> {
            state.topRestaurants = action.payload
        },
        trendBoarticles: (state, action)=> {
            state.topRestaurants = action.payload
        },
        newsBoarticles: (state, action)=> {
            state.topRestaurants = action.payload
        }
    }
});

export const {
    setTopRestaurants, 
    bestRestaurants, 
    trendBoarticles, 
    bestBoarticles,
    newsBoarticles
} = HomePageSlice.actions;

const HomePageReducer = HomePageSlice.reducer;

export default HomePageReducer;