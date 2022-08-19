import { Box, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ThankYou() {
    const navigate= useNavigate()
    useEffect(()=>{
setTimeout(()=>{navigate('/')},9000)
    },[])
  return (
    <div  style={{backgroundColor:'lightgrey'}}>
        <div style={{padding:'3.3rem',paddingBottom:"6rem",maxWidth:'97%'}} >
<Paper>
    <Typography sx={{padding:{xs:'1rem',md:'6rem'}}} variant='h5'>
    Thank you for getting in touch! 

We appreciate you contacting ASAA. One of our colleagues will get back in touch with you soon!
Have a great day!
    </Typography>
</Paper>
</div>
<div style={{margin:'2rem',padding:'2rem'}}>
<Link  to="/">You Will be redirected to home page automatically, if not click here..</Link></div>
    </div>
  )
}

export default ThankYou