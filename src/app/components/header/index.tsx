import { Badge, Box, Button, Container, IconButton, ListItemIcon, Menu, MenuItem, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
//import { sweetTopSuccessAlert } from '../../../lib/sweetAlert';
import { Logout } from '@mui/icons-material';
import Basket from './basket';
//import { verifiedMemberData } from '../../apiServices/verify';

 export function NavbarHome(props: any)  {

   

    return (
      <div className="home_navbar">
        <Container>
            <Stack flexDirection={"row"} 
            className='navbar_config' 
            justifyContent={"space-between"}
            >
               <Box>
                 <img src="/icons/papay.svg"/>
                </Box>
               <Stack 
               flexDirection={"row"}     
                justifyContent="space-evenly" 
                alignItems={'center'}
                className="navbar_links"
                >
                    <Box className="hover-line" onClick={props.setPath}>
                        <NavLink to="/" 
                        activeClassName="underLine">
                            Bosh Sahifa
                            </NavLink>
                    </Box>
                    <Box className="hover-line" onClick={props.setPath}>
                        <NavLink to="/restaurant" 
                        activeClassName="underLine">
                            Oshxona
                            </NavLink>
                    </Box>
                    {props.verifiedMemberData ? (
                     <Box className="hover-line" onClick={props.setPath}>
                     <NavLink to="/member-page" 
                     activeClassName="underLine">
                         Buyurtma
                         </NavLink>
                 </Box> ) : null }

                    <Box className="hover-line"onClick={props.setPath}>
                        <NavLink to="/orders" 
                        activeClassName="underLine">
                            Jamiyat
                            </NavLink>
                    </Box>
                  
           
                    {props.verifiedMemberData ? (
                     <Box className="hover-line" onClick={props.setPath}>
                     <NavLink to="/member-page" 
                     activeClassName="underLine">
                         Sahifam
                         </NavLink>
                 </Box> ) : null }

                    <Box className="hover-line" onClick={props.setPath}>
                        <NavLink to="/help" 
                        activeClassName="underLine">
                            Yordam
                            </NavLink>
                    </Box>

                    <Basket/>
                    
                    {!props.verifiedMemberData ? 

                    
                 ( <Box>
                    <Button 
                    variant='contained' 
                    style={{color: "#ffffff", background: "#1976D2"}}
                   // onClick={() => alert("clicked")}
                  // onClick={() => sweetTopSuccessAlert("clicked", 3000)}
                  onClick = {props.handleLoginOpen}
                    >
                    KIRISH
                    </Button>
                </Box>
                ) : (
                <img style={{width: "48px",height: "48px", borderRadius: "24px"}} 
                src={props.verifiedMemberData.mb_image}
                onClick={props.handleLogOutClick}
                />
                )}
               
               <Menu
              anchorEl={props.anchorEl}
              open={props.open}
              onClose={props.handleCloseLogOut}
              onClick={props.handleCloseLogOut}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem
              onClick={props.handleLogOutRequest}>
                <ListItemIcon>
                  <Logout fontSize="small" style={{ color: "blue" }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>
                <Stack className="head_information" justifyContent={"row"}>
                    <Stack justifyContent={"column"} style={{ marginTop: "86px",marginLeft: "24px" }} >
                        <Box>
                        <img src='/icons/welcome.svg'/>
                        </Box>
                        <Box className="define_restaurant">
                           The Authentic Restaurant & Cafe
                        </Box>
                        <Box className="timeline_sevice">
                       24 soat xizmatingizdamiz.     
                        </Box>
                        <Box sx={{mt:'90px'}}>
                            {!props.verifiedMemberData ? (
                                <Button
                                variant='contained' 
                                style={{width:"210px", 
                                height: "60px", 
                                background: '#1976d2',      
                                color:'#ffffff',}}
                                onClick = {props.handleSignUpOpen }
    
                                // onClick={() => setValue(!value)} 
                                   // onClick={() => alert("clicked")}
                                >
                                RO’YHATDAN O’TISH
                                </Button>

                            )
                            :
                            null}
                            
                        </Box>
                    </Stack>
                    <Box className="big_img">
                      </Box>

                </Stack>
        </Container>
        </div>);
 };


