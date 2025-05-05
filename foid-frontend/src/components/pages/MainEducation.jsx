import React from 'react';
// import './MainEducation.css';
const DiasporaPage = () => {
  return (
    <div className="diaspora-container">
      {/* Header Section */}
      <header className="diaspora-header">
        <div className="header-content">
          <h1>Germany Diaspora Network</h1>
          <p>Connecting communities across borders</p>
        </div>
      </header>

      {/* Navigation */}
      

      {/* Main Content */}
      <main className="diaspora-main">
        {/* Information Section */}
        <section id="information" className="diaspora-section">
          <div className="section-header">
            <h2>Information</h2>
            <div className="section-divider"></div>
          </div>
          <div className="section-content">
            <div className="info-card">
              <h3>Community Updates</h3>
              <p>Stay informed about the latest news and developments affecting diaspora communities worldwide.</p>
              <button className="primary-button"><a href="https://www.sociologyguide.com/basic-concepts/Community.php#google_vignette">Learn More</a></button>
            </div>
            <div className="info-card">
              <h3>Cultural Resources</h3>
              <p>Access resources to help maintain and celebrate your cultural heritage wherever you are.</p>
              <button className="primary-button"><a href="https://www.sciencedirect.com/topics/social-sciences/cultural-resource">Explore</a></button>
            </div>
            <div className="info-card">
              <h3>Migration Policies</h3>
              <p>Up-to-date information on immigration laws and policies in major destination countries.</p>
              <button className="primary-button"><a href="https://www.migrationdataportal.org/themes/migration-policies-and-governance">Read</a></button>
            </div>
          </div>
        </section>

        {/* Cooperation Section */}
        <section id="cooperation" className="diaspora-section">
          <div className="section-header">
            <h2>Cooperation</h2>
            <div className="section-divider"></div>
          </div>
          <div className="section-content">
            <div className="cooperation-card">
              <h3>Business Networking</h3>
              <p>Connect with entrepreneurs and professionals from your diaspora community for mutual growth.</p>
              <button className="secondary-button"><a href="https://www.sitepoint.com/build-your-own-social-network-with-diaspora-an-introduction/">Join Network</a></button>
            </div>
            <div className="cooperation-card">
              <h3>Community Projects</h3>
              <p>Collaborate on initiatives that benefit both your homeland and host country.</p>
              <button className="secondary-button"><a href="https://indiandiasporacouncil.org/">Get Involved</a></button>
            </div>
            <div className="cooperation-card">
              <h3>Partnerships</h3>
              <p>Explore partnership opportunities between diaspora organizations and institutions.</p>
              <button className="secondary-button"><a href="https://www.idiaspora.org/en/learn/resources/public-information-materials/diaspora-dynamics-advancing-partnerships-regular">Discover</a></button>
            </div>
          </div>
        </section>

        {/* Assistance Section */}
        <section id="assistance" className="diaspora-section">
          <div className="section-header">
            <h2>Assistance</h2>
            <div className="section-divider"></div>
          </div>
          <div className="section-content">
            <div className="assistance-card">
              <h3>Legal Support</h3>
              <p>Access to legal resources and professionals who understand diaspora-specific challenges.</p>
              <button className="accent-button">Find Help</button>
            </div>
            <div className="assistance-card">
              <h3>Mental Health</h3>
              <p>Counseling and support services tailored for diaspora community members.</p>
              <button className="accent-button">Seek Support</button>
            </div>
            <div className="assistance-card">
              <h3>Emergency Aid</h3>
              <p>Assistance programs for diaspora members facing urgent needs or crises.</p>
              <button className="accent-button">Request Aid</button>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default DiasporaPage;