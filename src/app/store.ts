
<<<<<<< HEAD
=======

>>>>>>> 7c49bdbc0020b3c9a9144e9e38d8f29405fbb205

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import HomePageReducer from "./screens/Homepage/slice";
import reduxLogger from "redux-logger"
import RestaurantPageReducer from './screens/RestaurantPage/slice';


export const store = configureStore({
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,
<<<<<<< HEAD
    restaurantPage: RestaurantPageReducer,
=======
    restaurantpage: RestaurantPageReducer
>>>>>>> 7c49bdbc0020b3c9a9144e9e38d8f29405fbb205
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;