
import React from 'react';
import '../assets/styles/AboutUs.css';

export default function AboutUs() {
  return (
    <section className="aboutus-container">
      <div className="aboutus-with-text">

        {/* About Us Introduction */}
        <div className="aboutus-with-text-first-container">
          <p className="aboutus-start-heading">
            <u>About Us :</u>
          </p>

          <h1 className="aboutus-heading">
            Our System <span>Inspires</span> You More.
          </h1>

          <p className="aboutus-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis laboriosam natus pariatur labore officia assumenda,
            eligendi ut at vel voluptate, praesentium magni sunt
            obcaecati dicta ratione eaque sequi aliquid qui?
          </p>
        </div>

        {/* Services */}
        <div className="aboutus-with-text-second-container">

          <div className="aboutus-service-area">
            <ul className="aboutus-service-list">

              <li className="aboutus-service-sublist">
                <h3>Education Service</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Dignissimos, totam!
                </p>
              </li>

              <li className="aboutus-service-sublist">
                <h3>International Hub</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Officia, expedita.
                </p>
              </li>

            </ul>
          </div>

          {/* Note and Contact */}
          <div className="aboutus-card-note-container">

            <div className="aboutus-card-note">
              <p className="aboutus-card-note-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Id reprehenderit consectetur atque debitis eum molestias
                pariatur, error quod ut soluta!
              </p>
            </div>

            <div className="aboutus-with-text-third-container">

              <div className="aboutus-discover-more">
                <a
                  href="https://www.youtube.com/@foidofficialyt"
                  className="aboutus-discover-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discover More
                  <span aria-hidden="true"> →</span>
                </a>
              </div>

              <div className="aboutus-call-area">
                <ul className="aboutus-call-list">
                  <li className="call-item">Call Now</li>
                  <li className="call-item">+91 90XXXXXX98</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
