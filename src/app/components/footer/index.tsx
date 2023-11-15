

import { Container, Stack, Box } from '@mui/material';
import React from 'react';

export function Footer () {
  return (
  <div className="footer_config">
    <Container >
      <Stack className="main_footer_container">
        <Stack flexDirection={'row'} style={{height: '243px'}}>
          <Stack className='info' flexDirection={'column'}>
            <Box>
              <img src="/footer/icons/papay_footer.svg" alt="Footer Icon" />
            </Box>
            <Box className="footer_main_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Sed ut perspiciatis unde omnis iste </Box>
            <Stack className='footer_contact_links'>
              <Box><img src="/footer/icons/facebook.svg" alt="facebook" /></Box>
              <Box><img src="/footer/icons/twitter.svg" alt="twitter" /></Box>
              <Box><img src="/footer/icons/insta.svg" alt="insta" /></Box>
              <Box><img src="/footer/icons/youtube.svg" alt="youtube" /></Box>
            </Stack>
          </Stack>    
          <Stack className='parts'>
            <Box className='parts_subject'>Bo'limlar</Box>
            <Box className='divider'></Box>
            <Box className='targets'>Bosh Sahifa Oshxonalar Jamiyat <br/>Yordam</Box>
          </Stack>
          
          <Stack className='find_us'>    
            <Box className='find'>Find us</Box>
            <Box className='divider'></Box>
            <Stack className='details' sx={{mt: '19px'}}>
              <Box className='detail_first'>L.</Box>
              <Box className='detail_second'>Uzbekistan</Box>
            </Stack>
            <Stack className='details' sx={{mt: '42px'}}>
              <Box className='detail_first'>P.</Box>
              <Box className='detail_second'>+998 - 99  266  25  62</Box>
            </Stack>
            <Stack className='details' sx={{mt: '9px'}}>
              <Box className='detail_first'>E.</Box>
              <Box className='detail_second'>Papays@restaurant.com</Box>
            </Stack>
          </Stack>
        </Stack>
        <Box className='liner'></Box>
        <Box className='copyrights'>Copyright Papays 2022, All right reserved.</Box>
      </Stack>
    </Container>
  </div>
  )
}