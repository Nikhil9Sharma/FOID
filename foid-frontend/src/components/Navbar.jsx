import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink, Link } from 'react-router-dom';
import '../../public/style/Navbar.css';

const dummyUser = {
  isLoggedIn: false, // set to true to simulate logged-in state
  username: 'JohnDoe',
  profilePic: '/foid-assets/userImg.jpg',
};

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Education', to: '/MainEducation' },
  { label: 'Events', to: '/Mainevent' },
  { label: 'About', to: '/MainaboutUs' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = dummyUser;

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close the menu on Escape key
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const authArea = user.isLoggedIn ? (
    <div className="profile">
      <img src={user.profilePic} alt="Profile" className="profile-pic" />
      <span className="username">{user.username}</span>
    </div>
  ) : (
    <>
      <Link to="/login" className="btn btn-login" onClick={closeMenu}>Login</Link>
      <Link to="/signup" className="btn btn-signup" onClick={closeMenu}>Sign Up</Link>
    </>
  );

  return (
    <nav className="navbar">
      {/* LEFT: logo + name */}
      <Link to="/" className="logoarea" onClick={closeMenu}>
        <img src="/foid-assets/logo1.png" alt="FOID Logo" />
        <span className="Name">FOID</span>
      </Link>

      {/* CENTER: menu links */}
      <div className={`menuarea ${menuOpen ? 'active' : ''}`}>
        <button className="menu-close-btn" onClick={closeMenu} aria-label="Close menu">
          <FiX size={26} />
        </button>

        <ul>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Login/Sign Up shown inside the drawer on mobile only */}
        <div className="mobile-loginarea">{authArea}</div>
      </div>

      {/* RIGHT: login/sign up on desktop */}
      <div className="desktop-loginarea">{authArea}</div>

      {/* Hamburger (mobile only) */}
      <button className="menuBtn" onClick={toggleMenu} aria-label="Open menu" aria-expanded={menuOpen}>
        <FiMenu size={26} />
      </button>

      {/* Dark overlay behind the drawer; click to close */}
      {menuOpen && <div className="overlay" onClick={closeMenu} />}
    </nav>
  );
};

export default Navbar;