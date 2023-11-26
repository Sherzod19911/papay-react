import { Avatar, Box, Stack } from "@mui/material";
import React, {
    useState
   } from "react";
   import SendIcon from "@mui/icons-material/Send";

export function CommunityChats() {
    /** INITIALIZATIONS **/
    const [messagesList, setMessagesList] = useState([]);

    return (
        <Stack className={"chat_frame"}>
            <Box className={"chat_top"}>Jonli muloqat</Box>
            <Box className={"chat_content"}>
                <Box className={"chat_main"}>    
                    <Box
                    flexDirection={"row"}
                    style={{ display: "flex" }}
                    sx={{ m: "10px 0px"}}
                    >
                        <div className={"msg_left"}> Bu yer jonli muloqat</div>

                    </Box>
                    {/* sizning habaringiz */}
                    <Box
                        flexDirection={"row"}
                        style={{ display: "flex" }}
                        alignItems={"flex-end"}
                        justifyContent={"flex-end"}
                        sx={{ m: "10px 0px"}}
                    >
                          <div className={"msg_right"}>Bu sizning habaringiz</div>
                    </Box>

                    {/* boshqalarni habari */}
                    <Box
                    flexDirection={"row"}
                    style={{ display: "flex" }}
                    sx={{ m: "10px 0px"}}
                    >
                        <Avatar alt={"martin"} src={"/community/cute_girl.jpg"}/>
                        <div className={"msg_left"}>Bu yerda boshqalarni habari</div>
                     </Box>
                     {/* ------------------------------ */}
                       {/* sizning habaringiz */}
                     <Box
                        flexDirection={"row"}
                        style={{ display: "flex" }}
                        alignItems={"flex-end"}
                        justifyContent={"flex-end"}
                        sx={{ m: "10px 0px"}}
                    >
                          <div className={"msg_right"}>Assalommu allaykum</div>
                    </Box>
                     {/* ------------------------------ */}

                     {/* boshqalarni habari */}
                    <Box
                    flexDirection={"row"}
                    style={{ display: "flex" }}
                    sx={{ m: "10px 0px"}}
                    >
                        <Avatar alt={"martin"} src={"/community/cute_girl.jpg"}/>
                        <div className={"msg_left"}>Vaalaykum assalom</div>
                     </Box>
                     {/* ------------------------------ */}
                </Box>
            </Box>
            <Box className={"chat_bott"}>
                <input    
                 type={"text"}
                 name={"message"}
                 className={"msg_input"}
                 placeholder={"habar junatish"}
                 />
                 <button className={"send_msg_btn"}>
                 <SendIcon style={{ color: "#fff" }} />
                 </button>
            </Box>
        </Stack>
    )
}