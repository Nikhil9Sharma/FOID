
import React from 'react';

// import './AboutUs.css';

import { PiNotebookFill } from "react-icons/pi";
import { FaEarthEurope } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { HiChevronDoubleRight } from "react-icons/hi";

export default function AboutUs() {
  return (
  <>
    <div className='about-us-container'>
      <div className="about-us-with-text">
          <div className="about-us-with-text-first-container">
            <p className='aboutUs-start-heading'><u> About Us  :</u></p>
            <h1 className="aboutUs-heading">Our System <span>Inspires</span> You More.</h1>
            <p className="aboutUs-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis laboriosam natus pariatur labore officia assumenda, eligendi ut at vel voluptate, praesentium magni sunt obcaecati dicta ratione eaque sequi aliquid qui?</p>
          </div>
          <div className="about-us-with-text-second-container">
            <div className='aboutUs-service-area'>
                <ul className="aboutUs-service-list">
                  <li className="aboutUs-service-sublist">
                    <h3>Education Service</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, totam!</p>
                </li>
                <li className="aboutUs-service-sublist">
                    <h3>International Hub</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, expedita.</p>
                </li>
              </ul>
            </div>
            <div className='aboutus-card-note-container'>
                <div className='aboutUs-card-note'>
                  <p className="aboutUs-card-note-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reprehenderit consectetur atque debitis eum molestias pariatur, error quod ut soluta!</p>
                </div>
              <div className="about-us-with-text-third-container">
                <div className="aboutUs-discover-more">
                  <button><a href="https://www.youtube.com/@foidofficialyt">Discover More</a></button>
                </div>
                <div className="aboutUs-call-area">
                  <ul className="aboutUs-call-list">
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