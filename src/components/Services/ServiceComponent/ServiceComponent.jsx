import React from "react";
import { Divider, Typography, Box, Grid, Button } from "@mui/material";
import {useNavigate} from 'react-router-dom'
import '../../../App.css'
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

function ServiceComponent(props) {
  const navigate=useNavigate()
  return (
    <Box margin={2} xs={12}>
      <img alt='logo'
        style={{  position: "relative", marginBottom: "3rem" }}
        src={props.coverImage}
        width={"100%"}
        height='auto'
      />
      <Typography
      sx={{display:{xs:'none',md:'flex'}}}
        style={{
          color: "white",
          position: "absolute",
          top: "17rem",
          left: "5%",
        }}
        align="center"
        variant="h3"
        fontWeight={600}
      >
        {props.title}
      </Typography>
      <Typography fontFamily={"roboto"} mb={1} align="center" variant="h4">
        {props.title}
      </Typography>
      <Divider />
      <Grid container mt={1} spacing={3}>
        <Grid item xs={12} md={4}>
         <Box sx={{display:{xs:'none',md:'block'}}}> <img  style={{borderRadius:'50px',width:'100%', height:'auto'}} alt='cover'  width={"100%"} src={props.logo} />
         </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography  paragraph>
           {props.text}
          </Typography>
         
        </Grid>
      </Grid>
    <div className='homeButtonDiv'>
        <Button 
        startIcon={<HomeTwoToneIcon/>} 
      
        onClick={()=>navigate('/')} >
          Back to Home Page
          </Button>
          </div>
    </Box>
    
  );
}

export default ServiceComponent;
