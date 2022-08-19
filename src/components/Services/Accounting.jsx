import { Divider, Stack, Typography,Box, Grid } from '@mui/material'
import React from 'react'

function Accounting() {
  return (
    <Box xs={12}>
        <img  style={{position:'relative',marginBottom:'3rem'}} src='https://i0.wp.com/www.goodwin.edu/enews/wp-content/uploads/2019/09/Where-Do-Accountants-Accounting-Clerks-and-Bookkeepers-Work-.jpg?fit=1920%2C904&ssl=1' width={'100%'} height='450px'/>
        <Typography style={{color:'white',position:'absolute',top:'17rem',left:'5%'}} align='center' variant='h3' fontWeight={600} >Accounting Services</Typography>
  <Typography fontFamily={'roboto'} mb={1} align='center' variant='h4'>Accounting</Typography>
  <Divider/>
  <Grid container mt={1} spacing={3}  >
  <Grid  item xs={12} md={4}>
    <img margin={4} width={'100%'}  src='https://storage.googleapis.com/joblist-content/hero-images/Accounting.png'/>
    </Grid>
   <Grid item xs={12} md={8}> 
   <Typography margin={4}  paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. sometimes by accident, sometimes on purpose (injected humour and the like). Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
   </Grid>
  
  </Grid>
    </Box>
  )
}

export default Accounting