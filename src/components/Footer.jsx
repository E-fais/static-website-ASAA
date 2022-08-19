import React from 'react';
import fbLogo from '../Assets/logos/fb.png'
import instaLogo from '../Assets/logos/insta.png'
import linkedInLogo from '../Assets/logos/linkedIn.png'
import watsappLogo from '../Assets/logos/watsapp.png'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';
import { Box, Stack } from '@mui/material';

export default function App() {
    const style={
        width:'30px',
        height:'30px'
    }
  return (
    <Box alignItems={'center'} justifyContent='center'>
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <Stack alignItems={'center'} justifyContent='center' direction='coloumn' gap={1} mb={2} >
          <a href='#!' role='button'>
            <img style={style} src={fbLogo} />
          </a>

          <a  href='#!' role='button'>
          <img style={style} src={instaLogo} />
          </a>

          <a  href='#!' role='button'>
          <img style={style} src={linkedInLogo} />
          </a>

          <a  href='#!' role='button'>
          <img style={style} src={watsappLogo} />
          </a>

         </Stack>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <p className='text-white'>
          Ashique & Saad Associates
        </p>
      </div>
    </MDBFooter>
    </Box>
  );
}
