import React from "react";
import { Link } from 'react-router-dom';
import land from "../img/land.jpg"

function LandingScreen() {
    return (
        <div className="land-page-img">
            <div className="land-hover">
            <h1>Welcome to Design-House All Media Solutions</h1>
            <h3>Capture Your Dream Photography Journey. Embark on a perfect shot with us. Plan your ideal frame and composition with our expert guidance.</h3>
            <Link to="/home">
                <button>Get Started</button>
            </Link>
            <Link to="/contact">
                <button>Contact</button>
            </Link>
            </div>
        </div>
    )
}
export default LandingScreen;