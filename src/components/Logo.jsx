import React,{useNavigate} from 'react'
import logo from '../Assets/Images/logo.jpg'
import '../App.css'
function Logo() {
    
  return (
    <div className='logoImageDiv'>
        <img  className='logoImage' src={logo}/>
    </div>
  )
}

export default Logo