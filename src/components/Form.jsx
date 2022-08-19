import { Button, Divider, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import {useNavigate} from 'react-router-dom';



function Form() {
  const navigate=useNavigate()
  return (       
 <div style={{backgroundColor:'white' ,padding:'2rem'}}>
    <form>
        <Typography style={{color:'teal'}} variant='h4' mt={3} fontWeight='700' align='center'>Write to Us</Typography>
        <TextField  margin="dense" label='Name' type={'text'} variant='outlined' fullWidth/>
        <TextField  margin="dense" label='PhoneNumber'  type={'number'} variant='outlined' fullWidth/>
        <TextField  margin="dense" label='Email' type='email' variant='outlined' fullWidth/>
        <TextField  margin="dense"
        multiline
          rows={4} label='Your Message' variant='outlined' fullWidth/>
  

    </form>
    <Button
    onClick={()=>{navigate('Thankyou')}}
    sx={{margin:{xs:'0.5rem 0',md:'1rem 0rem'}}}  align='center' XS={'fullWidth'}
  endIcon={<SendIcon/>} variant='contained'>
    Send Message
    </Button>
   
   </div> 
  )
}

export default Form