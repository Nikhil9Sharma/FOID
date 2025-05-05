
import React, { useState } from 'react';

import { FiAlignJustify, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const dummyUser = {
  isLoggedIn: true,
  username: "JohnDoe",
  profilePic: "./foid-assets/userImg.jpg"
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = dummyUser;

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logoarea">
        <img src="./foid-assets/logo1.png" alt="Tikiton Logo" />
        <div className="CompanyName">
          <p className='Name'>FOID</p>
          {/* <p className='slogan'>Tickets Makes Easy</p> */}
        </div>
      </div>

      <div className={`menuarea ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to={"/"} onClick={closeMenu}>
              <button className="btn-primary">Home</button>
            </Link>
          </li>
          <li>
            <Link to="/MainEducation" onClick={closeMenu}>
              <button className="btn-primary">Education</button>
            </Link>
          </li>
          <li>
            <Link to="/Mainevent" onClick={closeMenu}>
              <button className="btn-primary">Events</button>
            </Link>
          </li>
          <li>
            <Link to="/MainaboutUs" onClick={closeMenu}>
              <button className="btn-primary">About</button>
            </Link>
          </li>
        </ul>

        <div className='loginarea'>
          {user.isLoggedIn ? (
            <div className="profile">
              <img src={user.profilePic} alt="Profile" className="profile-pic" />
              <span className="username">{user.username}</span>
            </div>
          ) : (
            <>
              <button className="btn btn-primary">Login</button>
              <button className="btn btn-outline-primary">Sign Up</button>
            </>
          )}
        </div>
      </div>

      <div className='menuBtn' onClick={toggleMenu}>
        {menuOpen ? <FiX size={24} /> : <FiAlignJustify size={24} />}
      </div>
    </nav>
  );
};

export default Navbar;