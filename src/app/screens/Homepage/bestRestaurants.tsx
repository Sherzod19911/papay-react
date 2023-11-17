import React from "react";
import { Favorite, Visibility } from "@mui/icons-material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { CardOverflow, Card, CssVarsProvider,AspectRatio, IconButton, Typography,Link } from "@mui/joy";
import { Box, Container, Stack, } from "@mui/material";
import CallIcon from "@mui/icons-material/Call"




export function BestRestaurants() {
    return (
    <div className="best_restaurant_frame">
        <img src={"icons/line_group.svg"}
        style={{position: "absolute", left: "6%", transform: "rotate(360deg)"}}
        />
    
      <Container sx={{ mt: "120px" }}>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box  className="category_title">Zo’r Restaurantlar</Box>
          <Stack sx={{ mt: "43px" }}
          flexDirection={"row"}>   

             <CssVarsProvider>

              {/* The first restaurant */}

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
                         src="restaurant/burak_1.jpg"
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
                    </Card> 

                   {/* The Second restaurant */}

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
                    </Card> 

                    {/* The Third restaurant */}

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
                    </Card> 
                  
                  
                  </CssVarsProvider>   
               </Stack>    
             </Stack>
          </Container>    
      </div>
   );
}
