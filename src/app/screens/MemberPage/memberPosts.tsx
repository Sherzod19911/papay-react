
import React, { ChangeEvent, useRef, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import moment from "moment";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { BoArticle } from "../../../css/types/boArticle";
import { serverApi } from "../../../lib/config";
import { verifiedMemberData } from "../../apiServices/verify";
import MemberApiService from "../../apiServices/memberApiServices";
import { sweetErrorHandling, sweetTopSmallSuccessAlert } from "../../../lib/sweetAlert";
import { Definer } from "../../../lib/Definer";
import assert from "assert";
import { setTargetBoArticles } from "../CommunityPage/slice";
import { Article } from "@mui/icons-material";

export function MemberPosts(props: any) {
  const {
    chosenMemberBoArticles,
    renderChosenArticleHandler,
    setArticlesRebuild,
  } = props;
  
        /** HANDLERS */
        const targetLikeHandler = async (e: any) => {
          try {
            e.stopPropagation();
            assert.ok(verifiedMemberData, Definer.auth_err1);
      
            const memberService = new MemberApiService();
            const like_result = await memberService.memberLikeTarget({
              like_ref_id: e.target.id,
              group_type: "community",
            });
            assert.ok(like_result, Definer.general_err1);
      
            await sweetTopSmallSuccessAlert("success", 700, false);
            setArticlesRebuild(new Date());
          } catch (err: any) {
            console.log(err);
            sweetErrorHandling(err).then();
          }
        };
  return (
    <Box className={"post_content"}>
       

      {chosenMemberBoArticles?.map((article: BoArticle) => {
        const image_path = article.art_image 
        ? `${serverApi}/${article.art_image}` 
        : '/icons/default_article.svg';

        return (
          <Stack className="all_article_box" sx={{ cursor: "pointer" }} 
          onClick={() => renderChosenArticleHandler(article?._id)}
          >
            <Box
              className={"all_article_img"}
              sx={{ backgroundImage: `url(${image_path})` }}
            ></Box>
            <Box className={"all_article_container"}>
              <Box alignItems={"center"} display={"flex"}>
              <img
                  src={
                    article?.member_data?.mb_image
                      ? `${serverApi}/${article.member_data.mb_image}`
                      : "/auth/default_user.svg"
                  }
                  width={"35px"}
                  height={"35px"}
                  style={{ borderRadius: "50%", backgroundSize: "cover" }}
                />
                {/* <img
                  src={
                    article?.member_data?.mb_image
                    ? `${serverApi}"/${article.member_data.mb_image}`
                    : "/icons/default_user.svg"}
                  width={"35px"}
                  height={"35px"}
                  style={{ borderRadius: "50%", backgroundSize: "cover" }}
                /> */}
                <span className="all_article_author_user">
                  {article?.member_data?.mb_nick}
                  </span>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ mt: "15px" }}
              >
                <span className="all_article_title">
                  {article?.bo_id}
                  </span>
                <p className="all_article_desc">
                  {article?.art_subject}
                  </p>
              </Box>
              <Box>
                <Box
                  className={"article_share"}
                  style={{ width: "100%", height: "auto" }}
                  sx={{ mb: "10px" }}
                >
                  <Box
                    className={"article_share_main"}
                    style={{
                      color: "#fff",
                      marginLeft: "150px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span>{moment(article?.createdAt).format("YY-MM-DD HH:mm")}</span>
                    <Checkbox
                      sx={{ ml: "40px" }}
                      icon={<Favorite />}
                      id={article?._id}
                      checkedIcon={<Favorite style={{ color: "red" }} />}
                      checked={
                        article?.me_liked && article?.me_liked[0]?.my_favorite 
                        ? true 
                        : false
                      }
                      onClick={targetLikeHandler }
                    />
                    <span style={{marginRight: "10px"}}>{article?.art_likes}</span>
                    <RemoveRedEyeIcon/>
                    <span style={{marginLeft: "10px"}}>{article?.art_views}</span>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Stack>
        );
      })}
    </Box>
  );
}
