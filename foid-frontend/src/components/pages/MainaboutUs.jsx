import React from 'react';
// import './MainaboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Friend of Indian Diaspora</h1>
          <p className="hero-subtitle">Bridging the Indian community in Germany since 2010</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-section mission-section">
        <div className="section-content">
          <div className="text-content">
            <h2>Our Mission</h2>
            <div className="divider"></div>
            <p>
              Friend of Indian Diaspora is dedicated to connecting, supporting, and empowering 
              the Indian community living in Germany. We serve as a bridge between cultures, 
              helping our members navigate life in Germany while maintaining strong ties to 
              our Indian heritage.
            </p>
            <p>
              Our organization fosters people-to-people connections, provides essential 
              information, and creates opportunities for cooperation and mutual assistance 
              within our community.
            </p>
          </div>
          <div className="image-content">
            <div className="mission-image"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-section values-section">
        <h2>Our Core Values</h2>
        <div className="divider"></div>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon unity"></div>
            <h3>Unity</h3>
            <p>Bringing together Indians across Germany to form a strong, supportive community</p>
          </div>
          <div className="value-card">
            <div className="value-icon heritage"></div>
            <h3>Heritage</h3>
            <p>Preserving and celebrating Indian culture, traditions, and values</p>
          </div>
          <div className="value-card">
            <div className="value-icon integration"></div>
            <h3>Integration</h3>
            <p>Helping our community thrive in German society while maintaining our identity</p>
          </div>
          <div className="value-card">
            <div className="value-icon support"></div>
            <h3>Support</h3>
            <p>Providing assistance and resources for Indians navigating life in Germany</p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="about-section history-section">
        <div className="section-content">
          <div className="image-content">
            <div className="history-image"></div>
          </div>
          <div className="text-content">
            <h2>Our Journey</h2>
            <div className="divider"></div>
            <div className="timeline">
              <div className="timeline-item">
                <h4>2010</h4>
                <p>Founded in Berlin by a group of Indian professionals to address the needs of the growing Indian community</p>
              </div>
              <div className="timeline-item">
                <h4>2014</h4>
                <p>Expanded to Munich and Frankfurt with regular cultural events and networking meetups</p>
              </div>
              <div className="timeline-item">
                <h4>2018</h4>
                <p>Launched our assistance program for new arrivals and students</p>
              </div>
              <div className="timeline-item">
                <h4>2022</h4>
                <p>Reached 10,000+ community members across 15 German cities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section team-section">
        <h2>Our Leadership Team</h2>
        <div className="divider"></div>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-photo photo1"></div>
            <h3>Rajesh Sharma</h3>
            <p className="position">Founder & President</p>
            <p className="bio">IT professional in Berlin since 2005, passionate about community building</p>
          </div>
          <div className="team-card">
            <div className="team-photo photo2"></div>
            <h3>Priya Patel</h3>
            <p className="position">Vice President</p>
            <p className="bio">Cultural ambassador with expertise in German-Indian relations</p>
          </div>
          <div className="team-card">
            <div className="team-photo photo3"></div>
            <h3>Arjun Mehta</h3>
            <p className="position">Head of Assistance Programs</p>
            <p className="bio">Social worker dedicated to helping new arrivals settle in Germany</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Join Our Growing Community</h2>
        <p>Whether you're new to Germany or have been here for years, we welcome you to connect with fellow Indians across the country.</p>
        <div className="cta-buttons">
          <button className="primary-btn" style={{display:"none"}}>Become a Member</button>
          <button className="secondary-btn" style={{display:"none"}}>Contact Us</button>
        </div>
      </section>
      
    </div>
  );
};

export default AboutUs;