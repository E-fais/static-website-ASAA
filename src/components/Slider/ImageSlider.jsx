import React from 'react';
import { Image } from 'react-bootstrap';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const images = [
  
  'https://th.bing.com/th/id/R.5d957577d03f539eb082ad782bcfcb02?rik=6ttQESMraJkFFw&riu=http%3a%2f%2flawsonrisk.com.au%2fwp-content%2fuploads%2f2015%2f05%2fAudit-1400x849.jpeg&ehk=RTEKEmDcAq5RFk04YyOMyYriqo7a2U1%2bCiSjisuM9GA%3d&risl=&pid=ImgRaw&r=0',
  'https://www.freshbooks.com/wp-content/uploads/why-is-accounting-important-1.jpg.optimal.jpg',
  'https://th.bing.com/th/id/R.c5a8a67968c2a66885dee6e2430f05f3?rik=xHXFbl5rjz34TA&pid=ImgRaw&r=0'
  

];

export const  Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom scale={0.4}>
          {
            images.map((each, index) => <img  key={index} style={{width: "100%",maxHeight:'500px'}} src={each} />)
          }
        </Zoom>
      </div>
    )
}