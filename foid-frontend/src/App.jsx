import react from 'react';


import { BrowserRouter } from 'react-router-dom';
import {Routes,Route,} from 'react-router-dom'; 


import Navbar from './components/Navbar';
import NavbarUpperPart from './components/NavbarUpperPart';
import Learnsection from './components/Learnsection';
import AboutUs from './components/AboutUs';
import Ourteam from './components/Ourteam';
import Event from './components/Event';
import About from './components/About';



// Sub-Element or logical components;
import MainaboutUs from './components/pages/MainaboutUs';
import MainEducation from './components/pages/MainEducation';
import Mainevent from './components/pages/Mainevent';

import JoiningForm from './components/JoiningForm';


export default function App() {
  return (
   <>
   <BrowserRouter>
   <div className='foid-app'>
   
    <NavbarUpperPart/>

    <Navbar/>
    

      <Routes>
        <Route path='/' element={
          <>
        
    <Learnsection/>
    <Event/>
    <AboutUs/>
    <Ourteam/>
        </>}/>

        <Route path="/MainEducation"element={<MainEducation/>}/>
        <Route path="/Mainevent"    element={<Mainevent/>}/>
        <Route path="/MainaboutUs"  element={<MainaboutUs/>} />
      </Routes>



          <JoiningForm/>
    <About/>
    </div>
   </BrowserRouter>
   </>
  );
}

