import { Avatar, Box, Stack } from "@mui/material";
import React, {
    useContext,
    useEffect,
    useState
   } from "react";
   import SendIcon from "@mui/icons-material/Send";
import { SocketContext } from "../../context/socket";
import { verifiedMemberData } from "../../apiServices/verify";

export function CommunityChats() {
    /** INITIALIZATIONS **/
    const [messagesList, setMessagesList] = useState([]);


    const socket = useContext(SocketContext);
    const [onlineUsers, setOnlineUsers] = useState<number>(0);
    //const textInput: any = useRef(null);
    //const [message, setMessage] = useState<string>("");
  
    useEffect(() => {
      socket.connect();
      console.log("PRINTED");
      socket?.on("connect", function () {
        console.log("CLIENT: connected");
      });
      socket?.on("newMsg", (new_mesage: any) => {
        console.log("CLIENT: new message");
        alert(new_mesage);
   
    //     messagesList.push(
    //       //@ts-ignore
    //       <NewMessage new_mesage={new_mesage} key={messagesList.length} />
    //     );
    //     setMessagesList([...messagesList]);
       });
  
    //   socket?.on("greetMsg", (msg: any) => {
    //     console.log("CLIENT: greet message");
    //     messagesList.push(
    //         //ChatGreetMsg
    //       //@ts-ignore
    //       <p
    //         style={{
    //           textAlign: "center",
    //           fontSize: "large",
    //           fontFamily: "serif",
    //         }}
    //       >
    //         {msg.text}, dear {verifiedMemberData?.mb_nick ?? "guest"}
    //       </p>
    //     );
    //     setMessagesList([...messagesList]);
    //   });
  
      socket?.on("infoMsg", (msg: any) => {
        console.log("CLIENT: info message");
        setOnlineUsers(msg.total);
      });
      return () => {
        socket.disconnect();
      };
    }, [socket]);

    return (
        <Stack className={"chat_frame"}>
            <Box className={"chat_top"}>Jonli muloqat{onlineUsers}</Box>
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