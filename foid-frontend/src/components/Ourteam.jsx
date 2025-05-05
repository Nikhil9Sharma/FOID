
import React from 'react';
// import './Ourteam.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";

const Ourteam = () => {
  const teamData = [
    {
      id: 1,
      title: 'Gautam Sagar',
      image: './foid-assets/userImg.jpg',
      position: 'founder & CEO',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      social: [
        { id: 'fb', icon: <FaFacebook />, link: 'https://www.facebook.com/search/top?q=friends%20of%20indian%20diaspora' },
        { id: 'tw', icon: <FaTwitter />, link: 'https://x.com/foidofficialtwt' },
        { id: 'ig', icon: <FaInstagram />, link: 'https://www.instagram.com/foidofficialinsta/' },
        { id: 'li', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/nikhil-sharma-74681b2ba/' },
      ],
    },
    {
      id: 2,
      title: 'Ankit Aanand',
      image: './foid-assets/userImg.jpg',
      position: 'Manager',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      social: [
        { id: 'fb', icon: <FaFacebook />, link: 'https://www.facebook.com/search/top?q=friends%20of%20indian%20diaspora' },
        { id: 'tw', icon: <FaTwitter />, link: 'https://x.com/foidofficialtwt' },
        { id: 'ig', icon: <FaInstagram />, link: 'https://www.instagram.com/foidofficialinsta/' },
        { id: 'li', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/nikhil-sharma-74681b2ba/' },
      ],
    },
    {
      id: 3,
      title: 'Shagun Dixit',
      image: './foid-assets/userImg.jpg',
      position: 'Backend Developer',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      social: [
        { id: 'fb', icon: <FaFacebook />, link: 'https://www.facebook.com/search/top?q=friends%20of%20indian%20diaspora' },
        { id: 'tw', icon: <FaTwitter />, link: 'https://x.com/foidofficialtwt' },
        { id: 'ig', icon: <FaInstagram />, link: 'https://www.instagram.com/foidofficialinsta/' },
        { id: 'li', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/nikhil-sharma-74681b2ba/' },
      ],
    },
    {
      id: 4,
      title: 'Nikhil Sharma',
      image: './foid-assets/userImg.jpg',
      position: 'Full Stack Developer',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      social: [
        { id: 'fb', icon: <FaFacebook />, link: 'https://www.facebook.com/search/top?q=friends%20of%20indian%20diaspora' },
        { id: 'tw', icon: <FaTwitter />, link: 'https://x.com/foidofficialtwt' },
        { id: 'ig', icon: <FaInstagram />, link: 'https://www.instagram.com/foidofficialinsta/' },
        { id: 'li', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/nikhil-sharma-74681b2ba/' },
      ],
    },
  ];

  return (
    <section className="our-team-section">
      <div className="ourTeam-container">
        <div className='ourteam-headings'>
          <p className='ourteam-heading-first'>
            Our Team Members
          </p>
          <h2 className='ourteam-heading-second'>Meet With Our <span>Team</span></h2>
          <p className="ourteam-heading-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quia sint quod aspernatur.
          </p>
        </div>
        
        <div className="cards-container">
          {teamData.map((card) => (
            <div className="card" key={card.id}>
              <div className="card-image-container">
                <img  
                  src={card.image}
                  alt={card.title}
                  className="card-image"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://via.placeholder.com/200';
                  }}
                />
              </div>
              <div className='card-content'>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-position">{card.position}</p>
                <p className="card-description">{card.description}</p>
                <div className="card-social">
                  {card.social.map((s) => (
                    <a 
                      key={s.id}
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourteam;