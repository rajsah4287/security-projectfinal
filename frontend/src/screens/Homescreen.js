import React from "react";
import ControlledCarousel from "./HomeImg";
import LocationScreen from "./Locationscreen";


function HomeScreen() {

    return (
        <main>
            <header className="header">
                <div className="header-img">
                    <ControlledCarousel />
                </div>

                <div className="header-content">
                    <div className="header-detail">
                        <h1 className="content-title">CAPTURE<br />The Magic Of Your Life's</h1>

                        <p className="content-description">Capture Your Dream Photography Journey. Embark on a perfect shot with us. Plan your ideal frame and composition with our expert guidance.</p>

                        <button className="home-btn">Scroll</button>
                    </div>

                </div>
            </header>
            <LocationScreen />

        </main>
    )
}
export default HomeScreen;