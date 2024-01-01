import TabPanel from "@mui/lab/TabPanel";
import { Box, Stack } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";

// Redux
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePausedOrders } from "../../screens/OrdersPage/selector";

// Redux Selector
const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({
    pausedOrders,
  })
);

const pausedOrders = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
];

 export default function PausedOrders (props: any) {
    // Initializations
  // const { pausedOrders } = useSelector(pausedOrdersRetriever);
    return (
        <TabPanel value={"1"}>
          <Stack>
            {pausedOrders?.map ((order) => {
                return (
                    <Box className={"order_main_box"}>
                        <Box className={"order_box_scroll"}>
                            {order.map(() => {
                                const image_path = '/others/shashlik.jpg';
                                return (
                                    <Box className={"ordersName_price"}>
                                        <img src={image_path} className={"orderDishImg"} />
                                        < p className={"titleDish"}>Shashlik</p>
                                        <Box className={"priceBox"}>
                                            <p>$15</p>
                                            <img src={"/icons/close.svg"} />
                                            <p>3</p>
                                            <img src={"/icons/pause.svg"} />
                                            <p style={{ marginLeft: "15px "}}>$45</p>
                                        </Box>
                                    </Box>   
                                );
                            })}
                        </Box>

                        <Box className={"total_price_box black_solid"}>
                        <Box className={"boxTotal"}>
                            <p>maxsulot narxi</p>
                                <p> $22</p>
                                <img
                                src={"/icons/plus.svg"}
                                style={{marginLeft: "20px" }}
                                />
                                <p>yetkazish xizmati</p>
                                <p>$3</p>
                                <img
                                src={"/icons/pause.svg"}
                                style={{marginLeft: "20px" }}
                                />
                                <p> jami narx</p>
                                <p> $25</p>
                                
                            </Box>
                            <Button
                                    variant="contained"
                                    color="secondary"
                                    style={{
                                        borderRadius: "10px",
                                       
                                    }}
                                >
                                    Bekor qilish
                                </Button>

                                <Button
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
    )
}