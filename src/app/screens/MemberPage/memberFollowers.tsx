import React, { useEffect, useState } from "react";
import { Box, Container, Pagination, PaginationItem, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveMemberFollowers
} from "./selector";
import { createSelector } from "reselect";
import { Member } from "../../../css/types/user";
import { serverApi } from "../../../lib/config";

import MemberApiService from "../../apiServices/memberApiServices";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setChosenMember,
  setChosenMemberBoArticles,
  setChosenSingleBoArticle,
  setMemberFollowers
} from "./slice";
import { BoArticle, SearchMemberArticlesObj } from "../../../css/types/boArticle";
import { FollowSearchObj, Follower } from "../../../css/types/follow";
import FollowApiService from "../../apiServices/followApiService";
import { useHistory } from "react-router-dom";
import { sweetErrorHandling, 
  sweetTopSmallSuccessAlert, 

} from "../../../lib/sweetAlert";
import { verifiedMemberData } from "../../apiServices/verify";
import assert from "assert";
import { Definer } from "../../../lib/Definer";






// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setMemberFollowers: (data: Follower[]) => dispach(setMemberFollowers(data)),
});

// REDUX SELECTOR
const memberFollowersRetriever = createSelector(
  retrieveMemberFollowers,
  (memberFollowers) => ({
    memberFollowers,
  })
);

export function MemberFollowers(props: any) {
  /**INITIALIZATION */
  const history = useHistory();
  const { mb_id, followRebuild, setFollowRebuild } = props;
  const { setMemberFollowers } = actionDispatch(useDispatch());
  const { memberFollowers } = useSelector(memberFollowersRetriever);
  const [followersSearchObj, setFollowersSearchObj] = useState<FollowSearchObj>(
    {
      page: 1,
      limit: 5,
      mb_id: mb_id,
    }
  );

  useEffect(() => {
    const followService = new FollowApiService();
    followService
      .getMemberFollowers(followersSearchObj)
      .then((data) => setMemberFollowers(data))
      .catch((err) => console.log(err));
  }, [followersSearchObj, followRebuild]);

  /**HANDLER */
  const handlePaginationChange = (event: any, value: number) => {
    followersSearchObj.page = value;
    setFollowersSearchObj({ ...followersSearchObj });
  };
  const subscribeHandler = async (e: any, id: string) => {
    try {
      e.stopPropagation();
      assert.ok(verifiedMemberData, Definer.auth_err1);

      const followService = new FollowApiService();
      await followService.subscribe(id);

      await sweetTopSmallSuccessAlert("subscribed successfully", 700, false);
      setFollowRebuild(!followRebuild);
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };
  const visitMemberHandler = (mb_id: string) => {
    history.push(`/member-page/other?mb_id=${mb_id}`);
    document.location.reload()
  };

  return (
    <Stack>
       {memberFollowers?.map((follower: Follower) => {
       const image_url = follower?.subscriber_member_data?.mb_image
         ? `${serverApi}/${follower.subscriber_member_data.mb_image}`
          : "/icons/default_article.svg";      
        return (
          <Box className={"follow_box"}>
            <Avatar
              src={image_url}
              style={{ cursor: "pointer" }}
              sx={{ width: 89, height: 89 }}
              onClick={() => visitMemberHandler(follower?.subscriber_id)}
            />
            <div
              style={{
                width: "400px",
                display: "flex",
                flexDirection: "column",
                marginLeft: "25px",
                height: "85%",      
              }}
            >
              <span className="username_text">
                {follower?.subscriber_member_data?.mb_type}
              </span>
              <span
                className="name_text"
                style={{ cursor: "pointer" }}
                onClick={() => visitMemberHandler(follower?.subscriber_id)}
              >
                {follower.subscriber_member_data?.mb_nick}
              </span>
            </div>
            {props.actions_enabled &&
              (follower?.me_followed &&
              follower.me_followed[0]?.my_following ? (
                <Button
                  variant="contained"
                  className="following_already"
                  disabled
                >
                  FOLLOWING
                </Button>
              ) : (
                <Button
                  variant="contained"
                  startIcon={
                    <img src="/icons/user.svg" style={{ width: "40px" }} />
                  }
                  className="follow_btn"
                  onClick={(e) => subscribeHandler(e, follower?.subscriber_id)}
                >
                  Follow back
                </Button>
              ))}
          </Box>
        );
      })}
      <Stack
        sx={{ my: "40px" }}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box className={"bottom_box"}>
          <Pagination
            count={
              followersSearchObj.page >= 3 ? followersSearchObj.page + 1 : 3
            }
            page={followersSearchObj.page}
            renderItem={(item) => (
              <PaginationItem
                components={{
                  previous: ArrowBackIcon,
                  next: ArrowForwardIcon,
                }}
                {...item}
                color="secondary"
              />
            )}
            onChange={handlePaginationChange}
          />
        </Box>
      </Stack>
    </Stack>
  );
}




































// // REDUX SLICE
// const actionDispatch = (dispach: Dispatch) => ({
//   setMemberFollowers: (data: Follower[]) =>
//     dispach(setMemberFollowers(data)),
// });

// // REDUX SELECTOR
// const memberFollowersRetriever = createSelector(
//   retrieveMemberFollowers,
//   (memberFollowers) => ({
//     memberFollowers,
//   })
// );

// // const followers = [
// //   { mb_nick: "botir", following: true },
// //   { mb_nick: "jonibek", following: false },
// //   { mb_nick: "larisa", following: true },
// // ];


// export function MemberFollowers(props: any) {
//   //Initilaization
//   const history = useHistory();
//   const {mb_id, followRebuild, setFollowRebuild} = props;
//   const { setMemberFollowers } = actionDispatch(useDispatch());
//   const { memberFollowers } = useSelector(memberFollowersRetriever);
//   const [followersSearchObj, setFollowersSearchObj ] = useState<FollowSearchObj>
//   ({
//     page: 1, 
//     limit: 5, 
//     mb_id: mb_id});

//   useEffect(() => {
//     const followService = new FollowApiService();
//     followService
//       .getMemberFollowers(followersSearchObj)
//       .then((data) => setMemberFollowers(data))
//       .catch((err) => console.log(err));
//   }, [followersSearchObj, followRebuild]);

//    /** HANDLERS */
//    const subscribeHandler = async (e: any, id: string) => {
//     try {
//       e.stopPropagation();
//       assert.ok(verifiedMemberData, Definer.auth_err1);

//       const followService = new FollowApiService();
//       await followService.subscribe(id);

//       await sweetTopSmallSuccessAlert("subscribed successfully", 700, false);
//       setFollowRebuild(!followRebuild);
      
//     } catch (err: any) {
//       console.log(err);
//       sweetErrorHandling(err).then();
//     }
//   };
//   //paginition
//   const handlePaginationChange = (event: any, value: number) => {
//     followersSearchObj.page = value;
//     setFollowersSearchObj({ ...followersSearchObj });

//     const visitMemberHandler = (mb_id: string) => {
//       history.push(`/member-page/other?mb_id=${mb_id}`);
//       document.location.reload()
//     };
  
 
//   return (

//     <Stack>
//     {memberFollowers?.map((follower: Follower) => {
//       const image_url = follower?.subscriber_member_data?.mb_image
//         ? `${serverApi}/${follower.subscriber_member_data.mb_image}`
//         : "/auth/default_user.svg";
//         return (
//           <Box className={"follow_box"}>
//             <Avatar 
//             alt={""}
//             style={{cursor: "pointer"}}
//             src={image_url} 
//             sx={{ width: 89, height: 89 }} 
//             onClick={() => visitMemberHandler(follower?.subscriber_id)}
//           />
//             <div
//               style={{
//                 width: "400px",
//                 display: "flex",   
//                 flexDirection: "column",
//                 marginLeft: "25px",      
//                 height: "85%",    
//               }}
//             >
//               {/* <span className="username_text">{follower?.subscriber_member_data?.mb_type}</span> */}
//               <span className={"username_text"}
             
//               >
//                 {follower?.subscriber_member_data?.mb_type}
//               </span>
//               {/* <span className="name_text">{follower?.subscriber_member_data?.mb_nick}</span> */}
//               <span
//                 className={"name_text"}
//                 style={{cursor: "pointer"}}
//                 onClick={() => visitMemberHandler(follower?.subscriber_id)}
                
//                 //onClick={() => visitMemberHandler(follower?.subscriber_id)}
//               >
//                 {follower?.subscriber_member_data?.mb_nick}
//               </span>
//             </div>
//             {props.actions_enabled &&
//               (follower?.me_followed && follower.me_followed[0]?.my_following ? (
//                 <Button
//                   variant="contained"
//                   className="following_already"
//                   disabled
//                 >
//                   FOLLOWING
//                 </Button>
//               ) : (
//                 <Button
//                   variant="contained"
//                   startIcon={
//                     <img src="/icons/user.svg" style={{ width: "40px" }} />
//                   }
//                   className="follow_btn"
//                   onClick={(e) => subscribeHandler(e, follower?.subscriber_id)}
//                 >
//                   Follow back
//                 </Button>
//               ))}
//           </Box>
//         );
//       })}
//       //paginition
//        <Stack
//                         sx={{ my: "40px" }}      
//                         direction={"row"}
//                         alignItems={"center"}
//                         justifyContent={"center"}
//                       >
//                         <Box className={"bottom_box"}>
//                           <Pagination
//                             count={followersSearchObj.page >=3 ? followersSearchObj.page + 1 : 3}
//                             page={followersSearchObj.page }
//                             renderItem={(item) => (
//                               <PaginationItem
//                                 components={{
//                                   previous: ArrowBackIcon,
//                                   next: ArrowForwardIcon,
//                                 }}
//                                 {...item}
//                                 color="secondary"
//                               />
//                             )}
//                             onChange={handlePaginationChange}
//                           />
//                         </Box>
//                       </Stack>
//     </Stack>
//   );
// }
//  }




