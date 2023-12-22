import React from "react";
import { Favorite, Visibility } from "@mui/icons-material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { CardOverflow, Card, CssVarsProvider,AspectRatio, IconButton, Typography,Link, } from "@mui/joy";
import { Box, Container, Stack, Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call"
//REDUX
import { useSelector} from "react-redux";
import { createSelector } from "reselect";
import {retrieveBestRestaurants } from "../../screens/Homepage/selector"
import { Restaurant } from "../../../css/types/user";
import RestaurantApiService from "../../apiServices/restaurantApiService";
import { serviceApi } from "../../../lb/config";

//REDUX SELECTOR
const bestRestaurantRetriever = createSelector(
  retrieveBestRestaurants,
  (bestRestaurants) => ({
    bestRestaurants,
  })
);





export function BestRestaurants() {
  const { bestRestaurants } = useSelector(bestRestaurantRetriever);
    return (
    <div className="best_restaurant_frame">
        <img src={"icons/line_group.svg"}
        style={{position: "absolute", left: "6%", transform: "rotate(360deg)"}}
        />
    
      <Container sx={{ paddingTop: "125px" }}>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box  className="category_title">Zo’r Restaurantlar</Box>
          <Stack sx={{ mt: "43px" }}
          flexDirection={"row"}>  
          {bestRestaurants.map((ele: Restaurant) => {
             const image_path = `${serviceApi}/${ele.mb_image}`;
            return(
              <CssVarsProvider>
                
               <Card    
                variant="outlined"   
                 sx={{ minHeight: 433,   
                 minWidth: 325, 
                 mr: "35px" 
                          
                 }}
              >      
                  <CardOverflow>
                       <AspectRatio ratio="1">
                       <img
                         src={image_path}
                        alt=""/>       
                       </AspectRatio>
                       <IconButton
                         aria-label="Like minimal photography" 
                         size="md" 
                         variant="solid" 
                         color="neutral"
                              sx={{
                                 position: "absolute",
                                 zIndex: 2,
                                 borderRadius: "50%",
                                 right: "1rem",
                                 bottom: 0 ,
                                 transform: "translateY(50%)",
                                 color: "rgba(0,0,0,.4)"


                              }}
                            >
                            <Favorite 
                                style={{
                                   color: "white"
                                  }}
                                />

                            </IconButton> 

                 </CardOverflow>

                 <Typography level = "h2" sx={{ fontsize: "md", mt: 2 }} >
                  {ele.mb_nick} restaurant
                 </Typography>

                 <Typography  sx={{mt: 0.5, mb: 2 }}>
                  <Link
                     href=""
                      startDecorator={<LocationOnRoundedIcon />}
                      textColor="neutral.700"
                      >
                        {ele.mb_address}
                  </Link> 
                  </Typography>

                  <Typography  sx={{mt: 0.5, mb: 2 }}>
                  <Link
                     href=""
                      startDecorator={<CallIcon />}
                      textColor="neutral.700"
                      >
                        {ele.mb_phone}
                  </Link> 
                  </Typography>
                  <CardOverflow
                  variant="soft"
                     sx={{
                      display: "flex", 
                     
                      gap: 1.5, 
                      py: 1.5, 
                      px: "var(--Card-padding)", 
                      borderTop: "1px solid",
                      borderColor: "neutral.outlinedBorder",
                      bgcolor: "background.level1"
                      }}
                      >
                        <Stack sx={{flexDirection: "row" }}>
                        <Typography 
                    
                    sx={{
                      fontWeight: "md", 
                      color: "text.secondary", 
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "row" 
                    }}
                     >
                    {ele.mb_views}     
                    <Visibility
                      sx={{ 
                       fontSize: 20, 
                       marginLeft: "5px"}}/>
                   </Typography>

                   <Box sx={{ width: 2, bgcolor: "divider",ml: "6px", mr: "5px" }}/>
                  <Typography 
                    sx={{ 
                     fontWeight: "md", 
                     color: "text.secondary", 
                     alignItems: "center", 
                     display: "flex" 
                   }}
                   >

                  <div>{ele.mb_likes}</div>
                 <Favorite sx={{ fontSize: 20, marginLeft: "5px"}} />
                 </Typography>
                        </Stack>
                     </CardOverflow>
                    </Card> 

              </CssVarsProvider>

            )
          })} 

             

              {/* The first restaurant */}


                   {/* The Second restaurant */}
{/* 
                   <Card    
                variant="outlined"   
                 sx={{ minHeight: 433,   
                 minWidth: 325, 
                 mr: "35px" 
                          
                 }}
              >      
                  <CardOverflow>
                       <AspectRatio ratio="1">
                       <img
                         src="restaurant/burak_2.jpg"
                        alt=""/>       
                       </AspectRatio>
                       <IconButton
                         aria-label="Like minimal photography" 
                         size="md" 
                         variant="solid" 
                         color="neutral"
                              sx={{
                                 position: "absolute",
                                 zIndex: 2,
                                 borderRadius: "50%",
                                 right: "1rem",
                                 bottom: 0 ,
                                 transform: "translateY(50%)",
                                 color: "rgba(0,0,0,.4)"


                              }}
                            >
                            <Favorite 
                                style={{
                                   color: "white"
                                  }}
                                />

                            </IconButton> 

                 </CardOverflow>

                 <Typography level = "h2" sx={{ fontsize: "md", mt: 2 }} >
                  Texas De Brazil resataurant
                 </Typography>

                 <Typography  sx={{mt: 0.5, mb: 2 }}>
                  <Link
                     href=""
                      startDecorator={<LocationOnRoundedIcon />}
                      textColor="neutral.700"
                      >
                        Toshkent Yunusabod 4-1
                  </Link> 
                  </Typography>

                  <Typography  sx={{mt: 0.5, mb: 2 }}>
                  <Link
                     href=""
                      startDecorator={<CallIcon />}
                      textColor="neutral.700"
                      >
                        +998972886654
                  </Link> 
                  </Typography>
                  <CardOverflow
                  variant="soft"
                     sx={{
                      display: "flex", 
                     
                      gap: 1.5, 
                      py: 1.5, 
                      px: "var(--Card-padding)", 
                      borderTop: "1px solid",
                      borderColor: "neutral.outlinedBorder",
                      bgcolor: "background.level1"
                      }}
                      >
                        <Stack sx={{flexDirection: "row" }}>
                        <Typography 
                    
                    sx={{
                      fontWeight: "md", 
                      color: "text.secondary", 
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "row" 
                    }}
                     >
                    100 {" "}      
                    <Visibility
                      sx={{ 
                       fontSize: 20, 
                       marginLeft: "5px"}}/>
                   </Typography>

                   <Box sx={{ width: 2, bgcolor: "divider",ml: "6px", mr: "5px" }}/>
                  <Typography 
                    sx={{ 
                     fontWeight: "md", 
                     color: "text.secondary", 
                     alignItems: "center", 
                     display: "flex" 
                   }}
                   >

                  <div>500</div>
                 <Favorite sx={{ fontSize: 20, marginLeft: "5px"}} />
                 </Typography>
                        </Stack>
                     </CardOverflow>
                    </Card>  */}

                    {/* The Third restaurant */}
{/* 
                    <Card    
                variant="outlined"   
                 sx={{ minHeight: 433,   
                 minWidth: 325, 
                 mr: "35px" 
                          
                 }}
              >      
                  <CardOverflow>
                       <AspectRatio ratio="1">
                       <img
                         src="restaurant/burak_3.jpg"
                        alt=""/>       
                       </AspectRatio>
                       <IconButton
                         aria-label="Like minimal photography" 
                         size="md" 
                         variant="solid" 
                         color="neutral"
                              sx={{
                                 position: "absolute",
                                 zIndex: 2,
                                 borderRadius: "50%",
                                 right: "1rem",
                                 bottom: 0 ,
                                 transform: "translateY(50%)",
                                 color: "rgba(0,0,0,.4)"


                              }}
                            >
                            <Favorite 
                                style={{
                                   color: "white"
                                  }}
                                />

                            </IconButton> 

                 </CardOverflow>

                 <Typography level = "h2" sx={{ fontsize: "md", mt: 2 }} >
                  Texas De Brazil resataurant
                 </Typography>

                 <Typography  sx={{mt: 0.5, mb: 2 }}>
                  <Link
                     href=""
                      startDecorator={<LocationOnRoundedIcon />}
                      textColor="neutral.700"
                      >
                        Toshkent Yunusabod 4-1
                  </Link> 
                  </Typography>

                  <Typography  sx={{mt: 0.5, mb: 2 }}>
                  <Link
                     href=""
                      startDecorator={<CallIcon />}
                      textColor="neutral.700"
                      >
                        +998972886654
                  </Link> 
                  </Typography>
                  <CardOverflow
                  variant="soft"
                     sx={{
                      display: "flex", 
                     
                      gap: 1.5, 
                      py: 1.5, 
                      px: "var(--Card-padding)", 
                      borderTop: "1px solid",
                      borderColor: "neutral.outlinedBorder",
                      bgcolor: "background.level1"
                      }}
                      >
                        <Stack sx={{flexDirection: "row" }}>
                        <Typography 
                    
                    sx={{
                      fontWeight: "md", 
                      color: "text.secondary", 
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "row" 
                    }}
                     >
                    100 {" "}      
                    <Visibility
                      sx={{ 
                       fontSize: 20, 
                       marginLeft: "5px"}}/>
                   </Typography>

                   <Box sx={{ width: 2, bgcolor: "divider",ml: "6px", mr: "5px" }}/>
                  <Typography 
                    sx={{ 
                     fontWeight: "md", 
                     color: "text.secondary", 
                     alignItems: "center", 
                     display: "flex" 
                   }}
                   >

                       <div>500</div>
                      <Favorite sx={{ fontSize: 20, marginLeft: "5px"}} />
                      </Typography>
                      </Stack>
                     </CardOverflow>
                    </Card>  */}
                   
               </Stack>  
               <Stack flexDirection={"row"} justifyContent={"flex-end"} sx={{width: "100%", mt: "16px"}}>
                <Button style={{background:"#1976D2",color:"#FFFFFF"}}>BARCHASINI KO’RISH</Button>  
              </Stack>  
             </Stack>
          </Container>    
      </div>
   );           
}
