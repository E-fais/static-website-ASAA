import React from 'react';
import  BrandExample from './components/Navbar'
import Services from './components/Services';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'
import Accounting from './components/Services/Accounting';
import Audit from './components/Services/Audit';
import Consulting from './components/Services/Consulting';
import Incorporation from './components/Services/Incorporation';
import Taxation from './components/Services/Taxation';
import ThankYou from './components/ThankYou';
import Logo from './components/Logo';


function App() {
 
  return (
    
     
     <BrowserRouter>
     <Logo/>
     < BrandExample/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Home' element={<Home/>}/>
     <Route path='/services' element={<Services/>}/>
     <Route path='/Accounting' element={<Accounting/>}/>
     <Route path='/Audit' element={<Audit/>}/>
     <Route path='/Consulting' element={<Consulting/>}/>
     <Route path='/Incorporation' element={<Incorporation/>}/>
     <Route path='/Taxation' element={<Taxation/>}/>
     <Route path='Thankyou' element={<ThankYou/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
  );
}

export default App;
