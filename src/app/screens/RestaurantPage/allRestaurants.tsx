import React, { useEffect, useRef, useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Container, Stack, Button } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import IconButton from "@mui/joy/IconButton";
import Favorite from "@mui/icons-material/Favorite";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallIcon from "@mui/icons-material/Call";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";


//REDUX
import { useDispatch, useSelector } from "react-redux";
import { retrieveTargetRestaurants } from "../RestaurantPage/selector";
import { createSelector } from "reselect";
import { Restaurant } from "../../../css/types/user";

import { Dispatch } from "@reduxjs/toolkit";
import { setTargetRestaurants } from "../../screens/RestaurantPage/slice";
import RestaurantApiService from "../../apiServices/restaurantApiService";
import { SearchObj } from "../../../css/types/others";
import { serverApi } from "../../../lib/config";
import { Definer } from "../../../lib/Definer";
import assert from "assert";
import MemberApiService from "../../apiServices/memberApiServices";
import { sweetErrorHandling, sweetTopSmallSuccessAlert } from "../../../lib/sweetAlert";
import { useHistory } from "react-router-dom";


const order_list = Array.from(Array(8).keys());  

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setTargetRestaurants: (data: Restaurant[]) =>
    dispach(setTargetRestaurants(data)),
});

// REDUX SELECTOR
const targetRestaurantsRetriever = createSelector(
  retrieveTargetRestaurants,
  (targetRestaurants) => ({
    targetRestaurants,
  })
);

export function AllRestaurants(props: any) {
    //INITIALIZITION
    const history = useHistory();
   const {setTargetRestaurants} = actionDispatch(useDispatch());
   const {targetRestaurants} = useSelector(targetRestaurantsRetriever);
   const [targetSearchObject, setTargetSearchObject] = useState<SearchObj>({
    page: 1,
    limit: 8,
    order: "mb_point",
  });
  const refs: any = useRef([]);
   useEffect(() => {
        const restaurantService = new RestaurantApiService();
        restaurantService
        .getRestaurants(targetSearchObject)
        .then((data) => setTargetRestaurants(data))
         .catch((err) => console.log(err));
     }, [targetSearchObject]); // componentDidUpdate

     /**HANDLERS */
     const chosenRestaurantHandler = (id: string) => {
      history.push(`/restaurant/${id}`);
    };
     const searchHandler = (category: string) => {
      targetSearchObject.page = 1;
      targetSearchObject.order = category;
      setTargetSearchObject({ ...targetSearchObject });// bu oltin qonun target search objectni reference uzgarganda 
      //useeffect ishga tushadi bulmasa ishlamaydi.
    };// BUYERDA  yangi qiymatga uzgarishi  agar 3 ta nuqtani quymasa yangi qiymatga uzgarmaydi 
    //keyin useefect ham ishga tushmaydi
    //didupdate deganda faqat qiymati emas reference ham uzgarishi kerak
                
              /**Pagination davomi  */
         const handlePaginationChange = (event: any, value: number) => {
         targetSearchObject.page = value;
         setTargetSearchObject({ ...targetSearchObject });
         };

         /** about like */
         const targetLikeHandler = async (e: any, id: string) => {
          try {
            assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);
      
            const memberService = new MemberApiService(),
              like_result = await memberService.memberLikeTarget({
                like_ref_id: id,
                group_type: "member",
              });
            assert.ok(like_result, Definer.general_err1);
      
            if (like_result.like_status > 0) {
              e.target.style.fill = "red";
              refs.current[like_result.like_ref_id].innerHTML++;
            } else {
              e.target.style.fill = "white";
              refs.current[like_result.like_ref_id].innerHTML--;
            }
      
            await sweetTopSmallSuccessAlert("success", 700, false);
          } catch (err: any) {
            console.log("targetLikeTop, ERROR:", err);
            sweetErrorHandling(err).then();
          }
        };
    
    return (
        <div className="all_restaurant">
          <Container>
            <Stack flexDirection={"column"} alignItems={"center"}>
              <Box className={"fil_search_box"}>
                <Box className={"fil_box"} style={{cursor: "pointer"}}>
                  <a onClick={() => searchHandler("mb_point")}>Zo'r</a>
                  <a onClick={() => searchHandler("mb_views")}>Mashhurlar</a>
                  <a onClick={() => searchHandler("mb_likes")}>Trenddagi</a>
                  <a onClick={() => searchHandler("createdAt")}>Yangi</a>
                </Box>
                <Box className={"search_big_box"}>
                  <form className="search_form" action="">
                    <input    
                      type="search"
                      className="searchInput"
                      name="resSearch"
                      placeholder="Qiduruv"
                    />
                    <Button
                      className="button_search"
                      variant="contained"
                      endIcon={<SearchIcon />}
                    >
                      Izlash
                    </Button>
                  </form>
                </Box>
              </Box>
              <Stack className="all_res_box">
                <CssVarsProvider>
                   {targetRestaurants.map((ele: Restaurant) => {
                    const image_path = `${serverApi}/${ele.mb_image}`; 
                    return (
                        <Card
                        onClick = {() => chosenRestaurantHandler(ele._id)}
                        variant="outlined"
                        sx={{
                           minHeight: 410, 
                           minWidth: 290, 
                           mx: "17px", 
                           my: "20px",
                           cursor: "pointer",
                          }}
                      >
                        <CardOverflow>
                          <AspectRatio ratio={"1"}>
                            <img src={image_path} alt="" />
                          </AspectRatio>
                          <IconButton
                            aria-label="Like minimal photography"
                            size="md"
                            variant="solid"    
                            color="neutral"
                            onClick={(e) => {
                              e.stopPropagation();
                            }}       
                            sx={{
                              position: "absolute",
                              zIndex: 2,
                              borderRadius: "50%",
                              right: "1rem",
                              bottom: 0,
                              transform: "translateY(50%)",
                              color: "rgba(0,0,0,.4)",
                            }}
                          >
                            <Favorite 
                            onClick={(e) => targetLikeHandler(e, ele._id)}
                            style={{
                              fill: 
                              ele?.me_liked && ele?.me_liked[0]?.my_favorite
                              ? "red"
                              : "white",
                            }}
                              />
                          </IconButton>
                        </CardOverflow>
                        
                        <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                          {ele.mb_nick} restaurant
                        </Typography>
                        <Typography level="body-sm" sx={{ mt: 0.5, mb: 1 }}>
                          <Link
                            startDecorator={<LocationOnRoundedIcon />}
                            textColor={"neutral.700"}
                          >
                           { ele.mb_address}
                          </Link>
                        </Typography>
                        <Typography level="body-sm" sx={{ mt: 0.5, mb: 1 }}>
                          <Link startDecorator={<CallIcon />} textColor={"neutral.700"}>
                         {ele.mb_phone}
                          </Link>
                        </Typography>
                        <CardOverflow
                          variant="soft"
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 1.5,
                            py: 1.5,
                            px: "var(--Card-padding)",
                            borderTop: "1px solid",
                            borderColor: "neutral.outlinedBorder",
                            bgcolor: "background.level1",
                          }}
                        >
                          <Typography
                            level="body-md"
                            sx={{
                              fontWeight: "md",
                              color: "text.secondary",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            {ele.mb_views}
                            <VisibilityIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
                          </Typography>
                          <Box sx={{ width: 2, bgcolor: "divider" }} />
                          <Typography
                            level="body-md"
                            sx={{
                              fontWeight: "md",
                              color: "text.secondary",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            <div
                              ref={(element) => refs.current[ele._id] = element}
                            >{ele.mb_likes}</div>
                            <FavoriteIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
                          </Typography>
                        </CardOverflow>
                      </Card>  
                    )
                   })} 
                  
                </CssVarsProvider>
              </Stack>
    
              <Stack className="bottom_box">
                <img src="/icons/right_angel.svg" className="line_img" alt="" />

                 
                
                <Pagination
                  count={
                    targetSearchObject.page >=3 ? targetSearchObject.page + 1 : 3
                  }
                  page={targetSearchObject.page}
                  renderItem={(item) => (
                    <PaginationItem
                      components={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                      }}
                      {...item}
                      color={"secondary"}
                    />
                  )}
                  onChange={handlePaginationChange}
                />
                <img src="/icons/right_angel.svg" className="line_img_two" alt="" />
              </Stack>
            </Stack>
          </Container>
        </div>
      );
    }

// <<<<<<< HEAD
// const order_list = Array.from(Array(8).keys());


// export function AllRestaurants() {

// =======

// //REDUX
// import { useDispatch, useSelector} from "react-redux";
// import { createSelector } from "reselect";
// import {retrieveTargetRestaurant} from "../../screens/RestaurantPage/selector"
// import {Dispatch} from "@reduxjs/toolkit";
// import { setTargetRestaurants }  from "../../screens/RestaurantPage/slice"
// import { Restaurant } from "../../../css/types/user";
// import RestaurantApiService from "../../apiServices/restaurantApiService";

    

   

// const order_list = Array.from(Array(8).keys());   

// //REDUX SLICE
// const actionDispatch = (dispach: Dispatch) => ({
//   setTargetRestaurants: (data: Restaurant[]) => dispach(setTargetRestaurants(data)),

// });

// //REDUX SELECTOR
// const setTargetRestaurantsRetriever = createSelector(
//   retrieveTargetRestaurant,
//   (targetRestaurants) => ({
//     targetRestaurants,
//   })
// );


// export function AllRestaurants() {
//    //INITIALIZITION
//   const {setTargetRestaurants} = actionDispatch(useDispatch());
//   const {targetRestaurants} = useSelector(setTargetRestaurantsRetriever);

//   useEffect(() => {
//     const restaurantServer = new RestaurantApiService();
//     // restaurantServer
//     //   .getRestaurants(targetSearchObject)
//     //   .then((data) => setTargetRestaurants(data))
//     //   .catch((err) => console.log(err));
//   }, []); // componentDidUpdate
  
// >>>>>>> 7c49bdbc0020b3c9a9144e9e38d8f29405fbb205
//   return (
//     <div className="all_restaurant">
//       <Container>
//         <Stack flexDirection={"column"} alignItems={"center"}>
//           <Box className={"fil_search_box"}>
//             <Box className={"fil_box"}>
//               <a>Zo'r</a>
//               <a>Mashhurlar</a>
//               <a>Trenddagi</a>
//               <a>Yangi</a>
//             </Box>
//             <Box className={"search_big_box"}>
//               <form className="search_form" action="">
//                 <input    
//                   type="search"
//                   className="searchInput"
//                   name="resSearch"
//                   placeholder="Qiduruv"
//                 />
//                 <Button
//                   className="button_search"
//                   variant="contained"
//                   endIcon={<SearchIcon />}
//                 >
//                   Izlash
//                 </Button>
//               </form>
//             </Box>
//           </Box>
//           <Stack className="all_res_box">
//             <CssVarsProvider>
//                {order_list.map(ele => {
//                 return (
//                     <Card
//                     variant="outlined"
//                     sx={{ minHeight: 410, minWidth: 290, mx: "17px", my: "20px" }}
//                   >
//                     <CardOverflow>
//                       <AspectRatio ratio={"1"}>
//                         <img src="/restaurant/burak_photo.jpg" alt="" />
//                       </AspectRatio>
//                       <IconButton
//                         aria-label="Like minimal photography"
//                         size="md"
//                         variant="solid"
//                         color="neutral"
//                         onClick={(e) => {
//                           e.stopPropagation();
//                         }}       
//                         sx={{
//                           position: "absolute",
//                           zIndex: 2,
//                           borderRadius: "50%",
//                           right: "1rem",
//                           bottom: 0,
//                           transform: "translateY(50%)",
//                           color: "rgba(0,0,0,.4)",
//                         }}
//                       >
//                         <Favorite style={{ color: "white" }} />
//                       </IconButton>
//                     </CardOverflow>
                    
//                     <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
//                       Texas De Brazil Restaurant
//                     </Typography>
//                     <Typography level="body-sm" sx={{ mt: 0.5, mb: 1 }}>
//                       <Link
//                         startDecorator={<LocationOnRoundedIcon />}
//                         textColor={"neutral.700"}
//                       >
//                         Tashkent, Yunus Abad 4-1
//                       </Link>
//                     </Typography>
//                     <Typography level="body-sm" sx={{ mt: 0.5, mb: 1 }}>
//                       <Link startDecorator={<CallIcon />} textColor={"neutral.700"}>
//                         99890 3216547
//                       </Link>
//                     </Typography>
//                     <CardOverflow
//                       variant="soft"
//                       sx={{
//                         display: "flex",
//                         flexDirection: "row",
//                         gap: 1.5,
//                         py: 1.5,
//                         px: "var(--Card-padding)",
//                         borderTop: "1px solid",
//                         borderColor: "neutral.outlinedBorder",
//                         bgcolor: "background.level1",
//                       }}
//                     >
//                       <Typography
//                         level="body-md"
//                         sx={{
//                           fontWeight: "md",
//                           color: "text.secondary",
//                           alignItems: "center",
//                           display: "flex",
//                         }}
//                       >
//                         1000{" "}
//                         <VisibilityIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
//                       </Typography>
//                       <Box sx={{ width: 2, bgcolor: "divider" }} />
//                       <Typography
//                         level="body-md"
//                         sx={{
//                           fontWeight: "md",
//                           color: "text.secondary",
//                           alignItems: "center",
//                           display: "flex",
//                         }}
//                       >
//                         <div>500</div>
//                         <FavoriteIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
//                       </Typography>
//                     </CardOverflow>
//                   </Card>  
//                 )
//                })} 
              
//             </CssVarsProvider>
//           </Stack>

//           <Stack className="bottom_box">
//             <img src="/icons/right_angel.svg" className="line_img" alt="" />
//             <Pagination
//               count={3}
//               page={1}
//               renderItem={(item) => (
//                 <PaginationItem
//                   components={{
//                     previous: ArrowBackIcon,
//                     next: ArrowForwardIcon,
//                   }}
//                   {...item}
//                   color={"secondary"}
//                 />
//               )}
//             />
//             <img src="/icons/right_angel.svg" className="line_img_two" alt="" />
//           </Stack>
//         </Stack>
//       </Container>
//     </div>
//   );
// }

// <<<<<<< HEAD
// function targetRestaurantsRetriever(state: unknown): { targetRestaurants: any; } {
//   throw new Error("Function not implemented.");
// }
// =======
// // function useEffect(arg0: () => void, arg1: never[]) {
// //   throw new Error("Function not implemented.");
// // }
// >>>>>>> 7c49bdbc0020b3c9a9144e9e38d8f29405fbb205
