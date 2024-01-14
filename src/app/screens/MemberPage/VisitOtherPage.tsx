import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
import TabContext from "@mui/lab/TabContext";
import Tab from "@mui/material/Tab";
import Tablist from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TabList from "@mui/lab/TabList";
import { MemberPosts } from "./memberPosts";
import { MemberFollowing } from "./memberFollowing";
import { MySettings } from "./mySettings";
import TViewer from "../../components/tuiEditor/TViewver";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveChosenMember,
  retrieveChosenSingleBoArticle,
  retrieveChosenMemberBoArticles,
} from "./selector";
import { createSelector } from "reselect";
import { Member } from "../../../css/types/user";
import { serverApi } from "../../../lib/config";

import assert from "assert";
import { Definer } from '../../../lib/Definer';
import MemberApiService from "../../apiServices/memberApiServices";
import { useHistory } from "react-router-dom";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setChosenMember,
  setChosenMemberBoArticles,
  setChosenSingleBoArticle,
} from "./slice";
import { BoArticle, SearchMemberArticlesObj } from "../../../css/types/boArticle";
import CommunityApiService from "../../apiServices/communityApiService";
import { sweetErrorHandling, sweetTopSmallSuccessAlert } from "../../../lib/sweetAlert";
import { MemberFollowers } from "./memberFollowers";
import FollowApiService from "../../apiServices/followApiService";

// REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
  setChosenMember: (data: Member) => dispach(setChosenMember(data)),
  setChosenMemberBoArticles: (data: BoArticle[]) =>
    dispach(setChosenMemberBoArticles(data)),
  setChosenSingleBoArticle: (data: BoArticle) =>
    dispach(setChosenSingleBoArticle(data)),
});

// REDUX SELECTOR
const chosenMemberRetriever = createSelector(
  retrieveChosenMember,
  (chosenMember) => ({
    chosenMember,
  })
);
const chosenMemberBoArticlesRetriever = createSelector(
  retrieveChosenSingleBoArticle,
  (chosenMemberBoArticles) => ({
    chosenMemberBoArticles,
  })
);
const chosenSingleBoArticlesRetriever = createSelector(
  retrieveChosenMemberBoArticles,
  (chosenSingleBoArticles) => ({
    chosenSingleBoArticles,
  })
)

export function VisitOtherPage(props: any) {
  //INITIALIZIATION
  const history = useHistory();
  const { verifiedMemberData, chosen_mb_id, chosen_art_id } = props;
  const {
    setChosenMember,
    setChosenMemberBoArticles,
    setChosenSingleBoArticle,
  } = actionDispatch(useDispatch());
  const { chosenMember } = useSelector(chosenMemberRetriever);
  const { chosenMemberBoArticles } = useSelector(
    chosenMemberBoArticlesRetriever
  );
  const { chosenSingleBoArticles } = useSelector(
    chosenSingleBoArticlesRetriever
  );
  const [value, setValue] = useState("4"); 
  const [memberArticleSearchObj, setMemberArticleSearchObj] =   
  useState<SearchMemberArticlesObj>({
    mb_id: chosen_mb_id,
    page: 1,
    limit: 4,
  });
  const [articlesRebuild, setArticlesRebuild] = useState<Date>(new Date());
  const [followRebuild, setFollowRebuild] = useState<boolean>(false);
  
  useEffect(() => {
    if (chosen_mb_id === verifiedMemberData?._id) {
      history.push("/member-page");
    }
    const communityService = new CommunityApiService();
    if (chosen_art_id) {
      communityService
        .getChosenArticle(chosen_art_id)
        .then((data) => {
          setChosenSingleBoArticle(data);
          setValue("4");
        })
        .catch((err) => console.log(err));
    }
    communityService
      .getMemberCommunityArticles(memberArticleSearchObj)
      .then((data) => setChosenMemberBoArticles(data))
      .catch((err) => console.log(err));
  }, [memberArticleSearchObj, chosen_mb_id, articlesRebuild]);

  useEffect(() => {
    if (chosen_mb_id === verifiedMemberData?._id) {
      history.push("/member-page");
    }

    const memberService = new MemberApiService();
    memberService
      .getChosenMember(memberArticleSearchObj.mb_id)
      .then((data) => setChosenMember(data))
      .catch((err) => console.log(err));
  }, [chosen_mb_id, verifiedMemberData, followRebuild]);

     

  // HANDLERS
  const handleChange = (_event: any, newValue: string) => {
    setValue(newValue);
  };
  
  const handlePaginationChange = (event: any, value: number) => {
    memberArticleSearchObj.page = value;
    setMemberArticleSearchObj({ ...memberArticleSearchObj });
  };

  const renderChosenArticleHandler = async (art_id: string) => {
    try {
      const communityService = new CommunityApiService();
      communityService
        .getChosenArticle(art_id)
        .then((data) => {
          setChosenSingleBoArticle(data);
          setValue("4");
        })
        .catch((err) => console.log(err));
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const subscribeHandler = async (e: any) => {
    try {
      assert.ok(verifiedMemberData, Definer.auth_err1);

      const followService = new FollowApiService();
      await followService.subscribe(e.target.value);

      await sweetTopSmallSuccessAlert("subscribed successfully", 700, false);
      setFollowRebuild(!followRebuild);
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };
  const unsubscribeHandler = async (e: any) => {
    try {
      assert.ok(verifiedMemberData, Definer.auth_err1);

      const followService = new FollowApiService();
      await followService.unsubscribe(e.target.value);

      await sweetTopSmallSuccessAlert("unsubscribed successfully", 700, false);
      setFollowRebuild(!followRebuild);
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div className="my_page">
      <Container maxWidth="lg" sx={{ mt: "50px", mb: "50px" }}>
        <Stack className="my_page_frame">
          <TabContext value={value}>
            <Stack className="my_page_left">
              <Box display={"flex"} flexDirection={"column"}>
                <TabPanel value="1">
                  <Box className="menu_name">Mening Maqolalarim</Box>
                  <Box className="menu_content">
                    <MemberPosts 
                     chosenMemberBoArticles={chosenMemberBoArticles}
                     renderChosenArticleHandler={renderChosenArticleHandler}
                     setArticlesRebuild={setArticlesRebuild}/>

                     //pagination

                   <Stack
                      sx={{ my: "40px" }}
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Box className={"bottom_box"}>
                        <Pagination
                          count={
                            memberArticleSearchObj.page >= 3
                              ? memberArticleSearchObj.page + 1
                              : 3
                          }
                          page={memberArticleSearchObj.page}
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
                  </Box>
                </TabPanel>
                <TabPanel value={"2"}>
                  <Box className={"menu_name"}>Followers</Box>
                  <Box className={"menu_content"}>
                    {/* @ts-ignore */}
                    <MemberFollowers
                    actions_enabled={false} 
                    followRebuild={followRebuild}
                   setFollowRebuild={setFollowRebuild}
                    mb_id = {chosen_mb_id}
                    />
                  </Box>
                </TabPanel>

                <TabPanel value={"3"}>
                  <Box className={"menu_name"}>Following</Box>
                  <Box className={"menu_content"}>
                    <MemberFollowing 
                    actions_enabled={false} 
                    followRebuild={followRebuild}
                    setFollowRebuild={setFollowRebuild}
                    mb_id = {chosen_mb_id}

                    />
                  </Box>
                </TabPanel>

                <TabPanel value={"4"}>
                  <Box className={"menu_name"}>Tanlangan Maqola</Box>
                  <Box className={"menu_content"}>
                  <TViewer chosenSingleBoArticles={chosenSingleBoArticles}/>
                  </Box>
                </TabPanel>
              </Box>
            </Stack>

            <Stack className="my_page_right">
              <Box className="order_info_box">
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <div className="order_user_img">
                    <img
                      src="/community/gul.jpg"
                      className="order_user_avatar"
                    />
                    <div className="order_user_icon_box">
                      <img src="/icons/default_img.svg" alt="" />
                    </div>
                  </div>
                  <span className="order_user_name">{chosenMember?.mb_nick}</span>
                  <span className="order_user_prof">{chosenMember?.mb_type}</span>
                </Box>
                <Box className={"user_media_box"}>
                  <FacebookIcon />
                  <InstagramIcon />
                  <TelegramIcon />
                  <YouTubeIcon />
                </Box>
                <Box className={"user_media_box"}>
                  <p className="follows">Followers: {chosenMember?.mb_subscriber_cnt}</p>
                  <p className="follows">Followings: {chosenMember?.mb_follow_cnt}</p>
                </Box>
                <p className="user_desc">{chosenMember?.mb_description ?? "Qo'shimcha ma'lumot kiritilmagan" }
                </p>
                <Box
                  display={"flex"}
                  justifyContent={"flex-end"}
                  sx={{ mt: "10px" }}
                >
                  <Tablist
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    {chosenMember?.me_followed && chosenMember.me_followed[0]?.my_following ? (
                      <Tab
                        style={{ flexDirection: "column" }}
                        value={"4"}
                        component={() => (
                          <Button
                          value={chosenMember?._id}
                            variant="contained"
                            style={{ backgroundColor: "#f70909b8" }}
                            onClick={unsubscribeHandler}
                          >
                            BEKOR QILISH
                          </Button>
                        )}
                      />
                    ) : (
                      <Tab
                        style={{ flexDirection: "column" }}
                        value={"4"}
                        component={() => (
                          <Button
                          value={chosenMember?._id}
                            variant="contained"
                            style={{ backgroundColor: "#30945e" }}
                            onClick={subscribeHandler}
                          >
                            FOLLOW QILISH
                          </Button>
                        )}
                      />
                    )}
                  </Tablist>
                </Box>
              </Box>

              <Box className={"my_page_menu"}>
                <TabList
                   orientation="vertical"
                   variant="scrollable"
                   //value={value}
                   onChange={handleChange}
                   aria-label="Vertical tabs example"
                   sx={{ borderRight: 1, borderColor: "divider", width: "95%" }}
                >
                  <Tab
                    style={{ flexDirection: "column" }}
                    value={"1"}
                    component={() => (
                      <div className={`menu_box ${value}`}>
                        <img src="/icons/pencil.svg" alt="" />
                        <span>Maqolalarim</span>
                      </div>
                    )}
                  />
                  <Tab
                    style={{ flexDirection: "column" }}
                    value={"2"}
                    component={() => (
                      <div className={`menu_box`}>
                        <img src="/icons/group.svg" alt="" />
                        <span>Follower</span>
                      </div>
                    )}
                  />
                  <Tab
                    style={{ flexDirection: "column" }}
                    value={"3"}
                    component={() => (
                      <div className={`menu_box`}>
                        <img src="/icons/user.svg" alt="" />
                        <span>Following</span>
                      </div>
                    )}
                  />
                </TabList>
              </Box>
            </Stack>
          </TabContext>
        </Stack>
      </Container>
    </div>
  );
}