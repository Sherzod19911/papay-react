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
        setBestRestaurants: (state, action)=> {
            state.topRestaurants = action.payload
        },
        setTrendProducts: (state, action)=> {
            state.topRestaurants = action.payload
        },
        setBestBoarticles: (state, action)=> {
            state.topRestaurants = action.payload
        },
        setTrendBoarticles: (state, action)=> {
            state.topRestaurants = action.payload
        },
        setNewsBoarticles: (state, action)=> {
            state.topRestaurants = action.payload
        }
    }
});

export const {
    setTopRestaurants, 
    setBestRestaurants, 
    setTrendBoarticles, 
    setBestBoarticles,
    setNewsBoarticles
} = HomePageSlice.actions;

const HomePageReducer = HomePageSlice.reducer;

export default HomePageReducer;