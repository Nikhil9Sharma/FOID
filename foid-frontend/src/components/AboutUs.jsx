
import React from 'react';

import '../assets/styles/AboutUs.css';

import { PiNotebookFill } from "react-icons/pi";
import { FaEarthEurope } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { HiChevronDoubleRight } from "react-icons/hi";

export default function AboutUs() {
  return (
  <>
    <div className='aboutus-container'>
      <div className="aboutus-with-text">
          <div className="aboutus-with-text-first-container">
            <p className='aboutus-start-heading'><u> About Us  :</u></p>
            <h1 className="aboutus-heading">Our System <span>Inspires</span> You More.</h1>
            <p className="aboutus-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis laboriosam natus pariatur labore officia assumenda, eligendi ut at vel voluptate, praesentium magni sunt obcaecati dicta ratione eaque sequi aliquid qui?</p>
          </div>
          <div className="aboutus-with-text-second-container">
            <div className='aboutus-service-area'>
                <ul className="aboutus-service-list">
                  <li className="aboutus-service-sublist">
                    <h3>Education Service</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, totam!</p>
                </li>
                <li className="aboutus-service-sublist">
                    <h3>International Hub</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, expedita.</p>
                </li>
              </ul>
            </div>
            <div className='aboutus-card-note-container'>
                <div className='aboutus-card-note'>
                  <p className="aboutus-card-note-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reprehenderit consectetur atque debitis eum molestias pariatur, error quod ut soluta!</p>
                </div>
              <div className="aboutus-us-with-text-third-container">
                <div className="aboutus-discover-more">
                  <button><a href="https://www.youtube.com/@foidofficialyt">Discover More</a></button>
                </div>
                <div className="aboutus-call-area">
                  <ul className="aboutus-call-list">
                    <li className="call-item">Call Now</li>
                    <li className="call-item">+91 90XXXXXX98</li>
                  </ul>
                </div>
              </div>
            </div>
        </div >
      </div>
      
    </div>
    </>
  )
}