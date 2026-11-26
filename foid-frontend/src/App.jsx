import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import {Routes,Route,} from 'react-router-dom';

import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';

import NavbarUpperPart from './components/NavbarUpperPart';
import AboutUs from './components/AboutUs';
import Ourteam from './components/Ourteam';

import Learnsection from './components/home/learnSection/Learnsection';
import Event from './components/home/EventSection/Event';

import MainaboutUs from './pages/AboutUs/MainaboutUs';
import MainEducation from './pages/Education/MainEducation';
import Mainevent from './pages/Events/Mainevent';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

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
    <Signup/>
    <Footer/>
    </div>
  </BrowserRouter>
  </>
  );
}

