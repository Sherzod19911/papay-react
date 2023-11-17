import { Container } from "@mui/material";
import React from "react";
import { Statistics } from "./statistics";
import { TopRestaurants } from "./topRestaurants";
import { BestRestaurants } from "./bestRestaurants";
import { BestDishes } from "./bestdishes";
import { Adverticements } from "./adverticements";
import { Events } from "./events";
import { Recommendations } from "./recommendations";    
import '../../../css/home.css';
export function HomePage() {
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