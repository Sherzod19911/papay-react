import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Button from "@mui/material/Button";

export function MySettings(props: any) {
  return (
    <Stack className="my_settings_page">
      <Box className={"member_media_frame"}>
        <img
          src="/icons/maqola.svg"      
          className="mb_image"
          style={{ borderRadius: "50%" }}
          width={"100px"}
          height={"100px"}
        />
        <div className="media_change_box">
          <span>Rasm Yuklash</span>
          <p>JPG,JPEG,PNG rasmlarini yuklay olasiz!</p>
          <div className="up_del_box">
            <Button component="label" style={{ minWidth: "0" }}>
              <CloudDownloadIcon />
              <input type="file" hidden />
            </Button>
          </div>
        </div>
      </Box>
      <Box className="input_frame">
        <div className="long_input">
          <label className="spec_label">Name</label>
          <input
            type="text"
            className="spec_input mb_nick"
            name="mb_nick"
            placeholder="Baratov Sherzod"
          />
        </div>
      </Box>
      <Box className="input_frame">
        <div className="short_input">
          <label className="spec_label">Telefon Raqam</label>
          <input
            type="text"
            className="spec_input mb_phone"
            name="mb_phone"
            placeholder="99890  2863516"
          />
        </div>
        <div className="short_input">
          <label className="spec_label">Manzil</label>
          <input
            type="text"
            className="spec_input mb_address"
            name="mb_address"
            placeholder="Samarqand, Beshnayman village"
          />
        </div>
      </Box>
      <Box className="input_frame">
        <div className="long_input">
          <label className="spec_label">Ma'lumot</label>
          <textarea
            
            className="spec_textarea mb_description"
            name="mb_description"
            placeholder="I really wont to help others by my heart!"
          />
        </div>
      </Box>
      <Box display={"flex"} justifyContent={"flex-end"} sx={{mt: "25px"}}>
        <Button variant="contained">Saqlash</Button>
      </Box>
    </Stack>
  );
}