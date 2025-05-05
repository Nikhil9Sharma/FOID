
import React from 'react';
// import './NavbarUpperPart.css';
import { FaFacebookF, FaYoutube, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function NavbarUpperPart() {
  return (
    <div className='navbar-upper-container'>
      <div className='social-media'>
        <h6 className='social-media-heading'>Follow Us:</h6>
        <ul className='social-media-list'>
          <li className="facebook">
            <a href="https://www.facebook.com/foidofficialfb" aria-label="Facebook">
              <FaFacebookF color={'#316FF6'} size={20}/>
            </a>
          </li>
          <li className="instagram instagram-gradient">
            <a href="https://www.instagram.com/foidofficialinsta" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="url(#instagramGradient)"
              >
                <defs>
                  <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f58529" />
                    <stop offset="50%" stopColor="#dd2a7b" />
                    <stop offset="75%" stopColor="#8134af" />
                    <stop offset="100%" stopColor="#515bd4" />
                  </linearGradient>
                </defs>
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2.3.5 3.1 1.2.9.8 1.2 1.8 1.3 3.1.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.5 2.3-1.3 3.1-.8.9-1.8 1.2-3.1 1.3-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2.3-.5-3.1-1.3-.9-.8-1.2-1.8-1.3-3.1-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.5-2.3 1.3-3.1.8-.8 1.8-1.2 3.1-1.3 1.3-.1 1.7-.1 4.9-.1M12 0c-3.3 0-3.7 0-5 .1-1.5.1-2.9.5-4.1 1.6C1.5 3.3 1 4.7.9 6.2.7 7.5.7 7.9.7 12c0 4.1 0 4.5.1 5.8.1 1.5.5 2.9 1.6 4.1 1.2 1.2 2.6 1.6 4.1 1.7 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.5-.1 2.9-.5 4.1-1.7 1.2-1.2 1.6-2.6 1.7-4.1.1-1.3.1-1.7.1-5s0-4.5-.1-5.8c-.1-1.5-.5-2.9-1.7-4.1-1.2-1.2-2.6-1.6-4.1-1.7-1.3-.1-1.7-.1-5-.1zM12 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-11.4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z" />
              </svg> 
            </a>
          </li>
          <li className="twitter">
            <a href="https://x.com/foidofficialtwt" aria-label="Twitter">
              <FaTwitter color={'#1DA1F2'} size={20}/>
            </a>
          </li>
          <li className="youtube">
            <a href="https://www.youtube.com/@foidofficialyt" aria-label="YouTube">
              <FaYoutube color={'#E62117'} size={20}/>
            </a>
          </li>
        </ul>
      </div>
      <div className='contactUs-info'>
        <div className='contact-item address'>
          <FaLocationDot size={19} color={'var(--text-primary)'} />
          <a className='contactUs-link' href="/location">Germany</a>
        </div>
        <div className='contact-item email'>
          <MdOutlineEmail size={21} color={'var(--text-primary)'}/>
          <a className='contactUs-link' href="">workwithnikhil09@gmail.com</a>
        </div>
        <div className='contact-item phone'>
          <FaPhoneAlt size={19} color={'var(--text-primary)'}/>
          <a className='contactUs-link' href="tel:+919068781498">+91 9068781498</a>
        </div>
      </div>
    </div>
  )
}