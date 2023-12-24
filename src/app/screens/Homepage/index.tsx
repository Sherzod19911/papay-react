import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { Statistics } from "./statistics";
import { TopRestaurants } from "./topRestaurants";
import { BestRestaurants } from "./bestRestaurants";
import { BestDishes } from "./bestdishes";
import { Adverticements } from "./adverticements";
import { Events } from "./events";
import { Recommendations } from "./recommendations";    
import '../../../css/home.css';
//REDUX
import { useDispatch, useSelector} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {setTopRestaurants, setBestRestaurants, } from "../../screens/Homepage/slice"
//import {retrieveTopRestaurants } from "../../screens/Homepage/selector"
import { Restaurant } from "../../../css/types/user";
import RestaurantApiService from "../../apiServices/restaurantApiService";

//REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
    setTopRestaurants: (data: Restaurant[]) => dispach(setTopRestaurants(data)),
    setBestRestaurants: (data: Restaurant[]) => dispach(setBestRestaurants(data)),
  });

export function HomePage() {
//INITIALIZATION
const { setTopRestaurants,  setBestRestaurants} = actionDispatch(useDispatch());
//const { topRestaurants } = useSelector(topRestaurantRetriever);

//console.log("tiprestaurants::", topRestaurants);
//selector: store => data


    useEffect (() => {

      const restaurantService = new RestaurantApiService();

      restaurantService.getTopRestaurants().then(data => {
        setTopRestaurants(data);


      }).catch(err => console.log(err));

      restaurantService.getRestaurants({page: 1, limit: 4, order: 'mb_point'}).then(data => {
        setBestRestaurants(data);

      }).catch(err => console.log(err));
        
       
            
        
      
        // console.log("componentDidMount => Data fetch");
        // return () => {
        //     console.log("componentWillUnmountrocess")
        // };

    }, []);
    return (
    <div className="homepage">           
        <Statistics/>
        <TopRestaurants/>
        <BestRestaurants/>
        <BestDishes/>
        <Adverticements/>
        <Events/>
        <Recommendations/>
    </div>
    );
}


