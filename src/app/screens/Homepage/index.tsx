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
import {setTopRestaurants, bestBoarticles, } from "../../screens/Homepage/slice"
import {retrieveTopRestaurants } from "../../screens/Homepage/selector"
import { Restaurant } from "../../../css/types/user";
import RestaurantApiService from "../../apiServices/restaurantApiService";

//REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
    setTopRestaurants: (data: Restaurant[]) => dispach(setTopRestaurants(data)),
  });
//REDUX SELECTOR
const topRestaurantRetriever = createSelector(
    retrieveTopRestaurants,
    (topRestaurants) => ({
      topRestaurants,
    })
  );

export function HomePage() {
//INITIALIZATION
const { setTopRestaurants } = actionDispatch(useDispatch());
//const { topRestaurants } = useSelector(topRestaurantRetriever);

//console.log("tiprestaurants::", topRestaurants);
//selector: store => data


    useEffect (() => {

      const restaurantService = new RestaurantApiService();

      restaurantService.getTopRestaurants().then(data => {
        setTopRestaurants(data);


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


