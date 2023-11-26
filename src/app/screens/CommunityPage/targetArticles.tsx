import React from "react"
import { Box, Link, Stack } from "@mui/material";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import moment from "moment";



export function TargetArticles (props:any) {
    return (
        <Stack>
      {props.targetBoArticles?.map((article: any, index:string) => {
        const art_image_url = "/community/default_article.svg";    
          
        return (
            <Link
            className={"all_article_box"}
            sx={{ textDecoration: "none" }}
            href={''}
          >
              <Box
              className={"all_article_img"}
              sx={{ backgroundImage: `url(${art_image_url})` }}
            ></Box>
            <Box className={"all_article_container"}>
              <Box alignItems={"center"} display={"flex"}>
                <img
                  src={"/community/cute_girl.jpg"}
                  width={"35px"}
                  style={{ borderRadius: "50%", backgroundSize: "cover" }}
                />
                <span className={"all_article_author_user"}>
                 Aziza
                </span>
                </Box>
                <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ mt: "15px" }}
              >
                 <span className={"all_article_title"}>evalution</span>
                <p className={"all_article_desc"}>Texas De Brazil Zur Restaurant</p>
              </Box>
              </Box>
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
                    <span>  { moment().format("YY-MM-DD HH:mm")}</span>
                    <Checkbox
                      sx={{ ml: "40px" }}
                      icon={<FavoriteBorder/>}
                      checkedIcon={<Favorite style={{ color: "red" }} />}
                      
                      
                      checked={
                        article?.me_liked && article.me_liked[0]?.my_favorite
                          ? true
                          : false
                      }
                    />
                    <span style={{ marginRight: "18px" }}>
                      {article?.art_likes}
                    </span>
                    <RemoveRedEyeIcon />
                    <span style={{ marginLeft: "18px" }}>
                      {article?.art_views}
                    </span>
                  </Box>
                </Box>
            
          </Link>
            );
        })}
     </Stack>
  );
}
