import { Box, Container, Stack } from "@mui/material";
import React  from "react";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { CssVarsProvider } from "@mui/joy/styles";
import CardOverflow from "@mui/joy/CardOverflow";
import IconButton from "@mui/joy/IconButton";
import { Favorite } from "@mui/icons-material";
import VisibilityIcon from '@mui/icons-material/LocationOnRounded';
//REDUX
import { useSelector} from "react-redux";
import { createSelector } from "reselect";

import {retrieveTopRestaurants } from "../../screens/Homepage/selector"
import { Restaurant } from "../../../css/types/user";

/** OTHERS */
import { serverApi } from "../../../lib/config";
import { sweetErrorHandling, sweetTopSmallSuccessAlert } from "../../../lib/sweetAlert";

import { Definer } from "../../../lib/Definer";
import assert from "assert";
import MemberApiService from "../../apiServices/memberApiServices";
import { useRef } from "react";
import { MemberLiken } from "../../../css/types/others";
import { useHistory } from "react-router-dom";



//REDUX SELECTOR
const topRestaurantRetriever = createSelector(
  retrieveTopRestaurants,
  (topRestaurants) => ({
    topRestaurants,
  })
);



export function TopRestaurants() {
  //INITIALIZITION
  const history = useHistory();
  const { topRestaurants } = useSelector(topRestaurantRetriever);
  console.log("toprestaurants::", topRestaurants);
  const refs: any = useRef([]);

         /** HANDLERS */    

         const chosenRestaurantHandler = (id: string) => {
          history.push(`/restaurant/${id}`);
         }
         const targetLikeTop =  async (e: any, id: string) => {
          try {
             assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);
             const memberService = new MemberApiService();
              const like_result: any = await memberService.memberLikeTarget({
                like_ref_id: id, 
                group_type: 'member'
              });
              assert.ok(like_result, Definer.general_err1);
              if(like_result.like_status >0) {
                e.target.style.fill = 'red';
                refs.current[like_result.like_ref_id].innerHTML++;


              }else {
                e.target.style.fill = 'white';
                refs.current[like_result.like_ref_id].innerHTML--;
              }
              await sweetTopSmallSuccessAlert("success", 700, false);

          }catch(err: any) {
            console.log(`ERROR :::targetLikeTop ${err.message}`);
            sweetErrorHandling(err).then();
          }}
          
         return (
            <div className="top_restaurant_frame">
           <Container>
              <Stack
                 flexDirection={"column"}
                 alignItems={"center"}
                 sx={{mt: "45px" }} 
              >
                <Box className="category_title">Top Restaurants</Box>
                <Stack
                sx={{ mt: "43px" }}
                flexDirection={"row"}
                right="16px"       
                 >
   
              
                
                   

                {topRestaurants.map((ele: Restaurant) => {
                  const image_path = `${serverApi}/${ele.mb_image}`;
                  return (
                  <CssVarsProvider key={ele._id}>
                    <Card onClick = {() => chosenRestaurantHandler(ele._id)}
                 sx={{ minHeight: "430px",   
                 width: 325, 
                 marginRight: "35px", cursor: "pointer" 
                 }}      
                 >    
                   <CardCover>
                      <img
                         src={image_path}
                         loading="lazy"
                         alt=""
                      />
                    </CardCover>
                    <CardCover     
                        sx={{
                    background:
                          'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                     }}
                    />
                    <CardContent sx={{ justifyContent: 'flex-end' }}>
                     <Typography level="h2" fontSize="lg" textColor="#fff" mb={"1"}>
                   {ele.mb_nick}
                    </Typography>
                    <Typography
                       startDecorator={<LocationOnRoundedIcon />}
                       textColor="neutral.300"
                      >
                    {ele.mb_address}
                     </Typography>
                     </CardContent>
                     <CardOverflow 
                     sx={{     
                      display: "flex", 
                      gap: 1.5, 
                      py: 1.5, 
                      px: "var(--Card-padding)", 
                      borderTop: "1px solid"
                      }}
                      >
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
                                 bottom: 45,
                                 transform: "translateY(50%)",
                                 color: "rgba(0,0,0,.4)",
                                 }}
                                 onClick = {(e) => {e.stopPropagation()}}
                            >
                            <Favorite 
                            onClick={(e) => targetLikeTop(e, ele._id)}
                            style={{
                              fill: 
                              ele?.me_liked && ele?.me_liked[0]?.my_favorite
                              ? "red"
                              : "white",
                            }}
                            />

                            </IconButton>
                           <Stack sx={{flexDirection: "row"}}>
                        <Typography 
            
                          sx={{
                            fontWeight: "md", 
                            color: "neutral.300", 
                            alignItems: "center",
                            display: "flex" }}
                           >
                          {ele.mb_views}
                          <VisibilityIcon 
                            sx={{ 
                             fontSize: 20, 
                             marginLeft: "5px"}}/>
                         </Typography>

                         <Box sx={{ width: 2, bgcolor: "divider", ml: "6px", mr: "6px"}}/>
                        <Typography 
                          sx={{ 
                           fontWeight: "md", 
                           color: "neutral.300", 
                           alignItems: "center", 
                           display: "flex" 
                          }}
                         >

                        <div
                         ref={(element) => refs.current[ele._id] = element}
                         > 
                         {ele.mb_likes} 
                         </div>
                       <Favorite sx={{ fontSize: 20, marginLeft: "5px"}}/>
                       </Typography>
                     </Stack>
                   </CardOverflow>

                  </Card>
                     </CssVarsProvider>)
                  
                })}

               

              </Stack>
            </Stack>
          </Container>
      </div>)
    }

