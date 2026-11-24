import React from 'react';
import { Link } from 'react-router-dom';
import '../../public/style/Learnsection.css';   // make sure the path is right

function LearnSection() {
    return (
        <div className="mainlearnSection">
            <div className="thought">
                <h2 className="welcomeHeading">Welcome to Foid</h2>
                <div className="thoughtSection">
                    <h1 className="slogan">
                        Ready to Start Your <span>Professional</span> Journey
                    </h1>
                    <p className="sub-slogan">To Unlock Your Potential</p>
                </div>
            </div>

            <div className="MoreOptionSection">
                <Link to="/MainaboutUs" className="styled-button morePortionBtn">
                    About More
                </Link>
                <Link to="/MainEducation" className="styled-button morePortionBtn">
                    Learn More
                </Link>
            </div>
        </div>
    );
}

export default LearnSection;