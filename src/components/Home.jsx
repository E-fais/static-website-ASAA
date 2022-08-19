import { Box } from '@mui/material';
import React from 'react'
import Form from '../components/Form';
import Contact from './Contact';

import Services from './Services'
import {Slideshow} from './Slider/ImageSlider'
import Welcome from './Welcome'

function Home() {
  return (
    <div style={{backgroundColor:'rgba(116, 110, 110, 0.096)'}}>
      <Slideshow /> 
        <Welcome/>
        <Services/>  
        <Contact/>
        <Form/>
         
    </div > )
}

export default Home