

import { Box, Container, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../../css/order.css";
import TabContext from "@mui/lab/TabContext";
import Tab from "@mui/material/Tab";
import Tablist from "@mui/lab/TabList";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import PausedOrders from "../../components/orders/pausedOrders";
import ProcessOrders from "../../components/orders/processOrders";
import FinishedOrders from "../../components/orders/finishedOrders";
import { Order} from "../../../css/types/order";
import TabList from "@mui/lab/TabList";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveChosenRestaurant,
  retrieveRandomRestaurants,
  retrieveTargetProducts,
  retrieveTargetRestaurants,
} from "../RestaurantPage/selector";
import { createSelector } from "reselect";
import { Member, Restaurant } from "../../../css/types/user";

import { Dispatch } from "@reduxjs/toolkit";
import {
  setPausedOrders,
  setProcessOrders,
  setFinishedOrders,
} from "../OrdersPage/slice";
import { useHistory, useParams } from "react-router-dom";
import OrderApiService from "../../apiServices/orderApiServices";

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispach(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispach(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispach(setFinishedOrders(data)),

});


export function OrdersPage(props: any) {
  // INITIALIZATIONS
  const [value, setValue] = useState("1");
  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    actionDispatch(useDispatch());

  const verifiedMemberData: Member | null = props.verifiedMemberData;

  useEffect(() => {
    const orderService = new OrderApiService();
    orderService
      .getMyOrders("paused")
      .then((data) => setPausedOrders(data))
      .catch((err) => console.log(err));
    orderService
      .getMyOrders("process")
      .then((data) => setProcessOrders(data))
      .catch((err) => console.log(err));
    orderService
      .getMyOrders("finished")
      .then((data) => setFinishedOrders(data))
      .catch((err) => console.log(err));
  }, [props.orderRebuild]);

  // HANDLERS
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="order_page">
      <Container
        maxWidth="lg"
        style={{ display: "flex", flexDirection: "row" }}
        sx={{ mt: "54px", mb: "54px" }}
      >
        <Stack className={"order_left"}>
          <TabContext value={value}>
            <Box className="order_nav_frame">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Tab label="Buyurtmalarim" value={"1"} />
                  <Tab label="Jarayon" value={"2"} />
                  <Tab label="Yakunlangan" value={"3"} />
                </TabList>
              </Box>
            </Box>
            <Stack className="order_main_content">
              <PausedOrders setOrderRebuild={props.setOrderRebuild} />
              <ProcessOrders setOrderRebuild={props.setOrderRebuild} />
              <FinishedOrders setOrderRebuild={props.setOrderRebuild} />
            </Stack>
          </TabContext>
        </Stack>

      




    <Stack className={"order_right"}>
           <Box className={"order_info_box"}>
             <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <div className={"order_user_img"}>
                <img
               src={verifiedMemberData?.mb_image}
                 
                />
                <div className={"order_user_icon_box"}>
                  <img
                    src={"/icons/user_icon.svg"}
                    className={"order_user_prof_img"}
                  />
                </div>
              </div>
              <span className={"order_user_name"}>
                {verifiedMemberData?.mb_nick}
              </span>
              <span className={"order_user_prof"}>
              {verifiedMemberData?.mb_type ?? 'Foydalanuvchi'}
              </span>
            </Box>
            <Box
              style={{ border: "1px solid #A1A1A1" }}
              width={"100%"}
              sx={{ mt: "40px", mb: "8px" }}
            ></Box>
            <Box className={"order_user_address"}>
              <div style={{ display: "flex" }}>
                <LocationOnIcon />
              </div>
              <div className={"spec_address_txt"}>
              {verifiedMemberData?.mb_address ?? "manzil kiritilmagan"}
              </div>
            </Box>
          </Box>
          <Box className={"order_info_box"} sx={{ mt: "15px" }}>
            <input
              type={"text"}
              name={"card_number"}
              placeholder={"Card number : 4488 1233 7796 7777"}
              className={"card_input"}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <input
                type={"text"}
                name={"card_period"}
                placeholder={"08 / 19"}
                className={"card_half_input"}
              />
              <input
                type={"text"}
                name={"card_cvv"}
                placeholder={"CVV : 012"}
                className={"card_half_input"}
              />
            </div>
            <input
              type={"text"}
              name={"card_creator"}
              placeholder={"Baratov Sherzod"}
              className={"card_input"}
            />
            <div className={"cards_box"}>
              <img src={"/icons/western_card.svg"} />
              <img src={"/icons/master_card.svg"} />
              <img src={"/icons/paypal_card.svg"} />
              <img src={"/icons/visa_card.svg"} />
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}