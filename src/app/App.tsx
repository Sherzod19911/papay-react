import {Box, Button, Container, Stack, Typography} from '@mui/material';
import React, { useState , useEffect} from 'react';
import '../css/App.css';   
import '../css/navbar.css'; 
import '../css/footer.css';          
import { RippleBadge } from './MaterialTheme/styled';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./components/users";
import Dishes from "./components/dishes";
   
import { RestaurantPage } from "./screens/RestaurantPage";
import { CommunityPage } from "./screens/CommunityPage";
import { OrdersPage } from "./screens/OrdersPage";
import { MemberPage } from "./screens/MemberPage";
import { HelpPage } from "./screens/HelpPage";
import { LoginPage } from "./screens/LoginPage";
import { HomePage } from "./screens/Homepage";
import { NavbarHome } from './components/header';
import { NavbarRestaurant } from './components/header/restaurant';
import { NavbarOthers } from './components/header/others';
import { Footer } from './components/footer';
import Car from './screens/testCar';
import AuthenticationModal from './components/auth';

   
function App() {
  /**INITIALIZATION */

  const [path, setPath] = useState();
  const main_path = window.location.pathname;
  const [SignUpOpen, setSignUpOpen] = useState(false); // ekranda paydo bulmaydi avtomatik
   const[ loginOpen, setLoginOpen] = useState(false); // ekranda paydo bulmaydi avtomatik

   /**HANDLERS */
    const handleSignUpOpen = ()  =>  setSignUpOpen((true));    //  ruyxatdan utishni bossa true byulgani uchun ekranda chiqadi
    const handleSignUpClose = ()  =>  setSignUpOpen((false));
    const handleLoginOpen = ()  =>  setLoginOpen((true));  //  kirishni bossa true byulgani uchun ekranda chiqadi
    const handleLoginClose = ()  =>  setLoginOpen((false));
  
    
 return (
    <Router>
      { main_path =="/" ? (
        <NavbarHome setPath={setPath}
        handleLoginOpen = {handleLoginOpen}
        handleSignUpOpen = {handleSignUpOpen}
        />
            
      ): main_path.includes("/restaurant") ? (
        <NavbarRestaurant
        handleLoginOpen = {handleLoginOpen}
        handleSignUpOpen = {handleSignUpOpen}
        /> 
  )
       : (
        <NavbarOthers setPath={setPath}
        handleLoginOpen = {handleLoginOpen}
        handleSignUpOpen = {handleSignUpOpen}
        />
  )}

 
      <Switch>
        <Route path="/restaurant">
          <RestaurantPage />
        </Route>
        <Route path="/community">
          <CommunityPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <MemberPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          {/* <Car /> */}
          <HomePage />
        </Route>
      </Switch>
     <Footer/>
     <AuthenticationModal
      loginOpen = {loginOpen}
       handleLoginOpen = {handleLoginOpen}
       handleLoginClose = {handleLoginClose}
       SignUpOpen = {SignUpOpen}
       handleSignUpOpen = {handleSignUpOpen}       
       handleSignUpClose = {handleSignUpClose}
     />
  </Router>
  )
}
   
function Home() {
  return <h2>Home</h2>;
}

export default App;




