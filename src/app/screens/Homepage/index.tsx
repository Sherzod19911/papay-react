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

export function HomePage() {
    useEffect (() => {
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