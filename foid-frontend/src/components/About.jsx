
import React from 'react';
// import './About.css';


const About = () => {
  return (
    <footer className="about-footer">
      <div className="footer-content container">
        <section className="about-section">
          <h2 className="footer-heading">About Us</h2>
          <div className="about-content">
            <h3 className="organization-name">Friends of Indian Diaspora</h3>
            <p className="about-text">
              "Education is the foundation of progress. We're here to ensure every member 
              of the diaspora has access to resources that inspire success."
            </p>
            <div className="button-group">
              <button className="btn btn-primary">Learn More</button>
              <button className="btn btn-secondary">Join Us</button>
            </div>
          </div>
        </section>

        <nav className="footer-nav" aria-label="Footer navigation">
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="nav-list">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/MainEducation" className="nav-link">Education</a></li>
            <li><a href="/Mainevent" className="nav-link">Events</a></li>
            <li><a href="/MainaboutUs" className="nav-link">Help</a></li>
          </ul>
        </nav>

        <section className="contact-section">
          <h2 className="footer-heading">Contact Us</h2>
          <div className="contact-info">
            <a href="tel:+919068781498" className="contact-link">
              <span className="icon">📞</span>
             +91 9068781498
            </a>
            <a href="mailto:workwithnikhil09@gmail.com" className="contact-link">
              <span className="icon">✉️</span>
              workwithnikhil09@gmail.com
            </a>
            <div className="social-links">
              <a href="https://www.facebook.com/foidofficialfb" aria-label="Facebook" className="social-link">Facebook</a>
              <a href="https://www.instagram.com/foidofficialinsta" aria-label="Instagram" className="social-link">Instagram</a>
              <a href="https://x.com/foidofficialtwt" aria-label="Twitter" className="social-link">Twitter</a>
            </div>
          </div>
        </section>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Friends of Indian Diaspora. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default About;