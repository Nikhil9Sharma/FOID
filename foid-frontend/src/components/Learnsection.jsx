import React, { useState } from 'react';
// import './Learnsection.css';
import { VscOrganization } from "react-icons/vsc";

import { Link } from 'react-router-dom';

function LearnSection() {
    const [activeButton, setActiveButton] = useState(null); // State to track which button is active

    const handleClick = (buttonId) => {
        setActiveButton(buttonId); // Set the clicked button's ID
    };

    return (
        <>
            <div className="mainlearnSection">
                <div className="thought">
                    <h5 className="welcomeHeading">
                        Welcome to Foid
                    </h5>
                    <div className="thoughtSection">
                        <p className="slogan">
                            Ready to Start Your <span> Professional </span> Journey
                        </p>
                        <p className="sub-slogan">To Unlock Your Potential</p>
                    </div>
                </div>
                <div className="MoreOptionSection">
                    <Link to="MainaboutUs">
                    <button
                        className={`styled-button morePortionBtn ${
                            activeButton === 1 ? 'active' : ''
                        }`}
                        onClick={() => handleClick(1)}
                    >
                        About More
                    </button>
                    </Link>
                    <Link to="MainEducation">
                    <button
                        className={`styled-button morePortionBtn ${
                            activeButton === 2 ? 'active' : ''
                        }`}
                        onClick={() => handleClick(2)}
                    >
                        Learn More
                    </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default LearnSection;
