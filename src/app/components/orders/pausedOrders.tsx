import TabPanel from "@mui/lab/TabPanel";
import { Box, Stack } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";

// Redux
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePausedOrders } from "../../screens/OrdersPage/selector";
import { Order } from "../../../css/types/order";
import { serverApi } from "../../../lib/config";
import { Product } from "../../../css/types/product";
import { sweetErrorHandling, sweetFailureProvider } from "../../../lib/sweetAlert";
import OrderApiService from "../../apiServices/orderApiServices";

// REDUX SELECTOR
const pausedOrdersRetriever = createSelector(
    retrievePausedOrders,
    (pausedOrders) => ({
      pausedOrders,
    })
  );
  
  export default function PausedOrders(props: any) {
    /**INITIALIZATIONS */
    const { pausedOrders } = useSelector(pausedOrdersRetriever);
  
    /**HANDLERS */
    const deleteOrderHandler = async (event: any) => {
      try {
        const order_id = event.target.value;
        const data = { order_id: order_id, order_status: "DELETED" };
  
        if (!localStorage.getItem("member_data")) {
          sweetFailureProvider("Please login first", true);
        }
  
        let confirmation = window.confirm(
          "Buyurtmani bekor qilishni xohlaysizmi?"
        );
        if (confirmation) {
          const orderService = new OrderApiService();
          await orderService.updateOrderStatus(data);
          props.setOrderRebuild(new Date())
        }
      } catch (err) {
        console.log("deleteOrderHandler, ERROR:", err);
        sweetErrorHandling(err).then();
      }
    };
  
    const processOrderHandler = async (event: any) => {
      try {
        const order_id = event.target.value;
        const data = { order_id: order_id, order_status: "PROCESS" };
  
        if (!localStorage.getItem("member_data")) {
          sweetFailureProvider("Please login first", true);
        }
  
        let confirmation = window.confirm(
          "Buyurtmangizga tolov qilishini xohlaysizmi?"
        );
        if (confirmation) {
          const orderService = new OrderApiService();
          await orderService.updateOrderStatus(data);
          props.setOrderRebuild(new Date())
        }
      } catch (err) {
        console.log("processOrderHandler, ERROR:", err);
        sweetErrorHandling(err).then();
      }
    };
  
    return (
      <TabPanel value={"1"}>
        <Stack>
          {pausedOrders?.map((order: Order) => {
            return (
              <Box className={"order_main_box"}>
                <Box className={"order_box_scroll"}>
                  {order.order_items.map((item) => {
                    const product: Product = order.product_data.filter(
                      (ele) => ele._id === item.product_id
                    )[0];
                    const image_path = `${serverApi}/${product.product_images[0]}`;
                    return (
                      <Box className={"ordersName_price"}>
                        <img src={image_path} className="orderDishImg" />
                        <p className="titleDish">{product.product_name}</p>
                        <Box className={"priceBox"}>
                          <p>${item.item_price}</p>
                          <img src="/icons/Close.svg" alt="" />
                          <p>{item.item_quantity}</p>
                          <img src="/icons/Pause.svg" />
                          <p style={{ marginLeft: "15px" }}>
                            ${item.item_price * item.item_quantity}
                          </p>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
  
                <Box className={"total_price_box black_solid"}>
                  <Box className={"boxTotal"}>
                    <p>mahsulot narxi</p>
                    <p>${order.order_total_amount - order.order_delivery_cost}</p>
                    <img src="/icons/Plus.svg" style={{ marginLeft: "20px" }} />
                    <p>yetkazish xizmati</p>
                    <p>${order.order_delivery_cost}</p>
                    <img src="/icons/Pause.svg" style={{ marginLeft: "20px" }} />
                    <p>jami narx</p>
                    <p>${order.order_total_amount}</p>
                  </Box>
                  <Button
                    value={order._id}
                    onClick={deleteOrderHandler}
                    variant="contained"
                    color="secondary"
                    style={{
                      borderRadius: "10px",
                    }}
                  >
                    Bekor qilish
                  </Button>
  
                  <Button
                    value={order._id}
                    onClick={processOrderHandler}
                    variant="contained"
                    color="primary"
                    style={{
                      borderRadius: "10px",
                    }}
                  >
                    To'lov qilish
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Stack>
      </TabPanel>
    );
  }