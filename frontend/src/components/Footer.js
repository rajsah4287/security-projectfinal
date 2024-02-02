import React from "react";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-mm">
                <div className="footer-link">
                    <div className="footer-link-div">
                        <h4>Footer</h4>
                        <a href="/home">
                            <p>home</p>
                        </a>
                        <a href="/about">
                            <p>about</p>
                        </a>
                        <a href="/register">
                            <p>register</p>
                        </a>
                    </div>
                    <div className="footer-link-div">
                        <h4>Resource</h4>
                        <a href="/home">
                            <p>employer</p>
                        </a>
                        <a href="/home">
                            <p>employer</p>
                        </a>
                    </div>
                    
                    <div className="footer-link-div">
                        <h4>company</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/home">
                            <p>Career</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>
                    </div>

                    <div className="footer-link-div">
                        <h4>Social Media</h4>
                        <div className="social-media">
                            <a href="https://www.linkedin.com/in/ovin-mano-412934244"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://twitter.com/ovinmano?t=hFcTjOldRPUOqGkYzUFiUQ&s=09"><i className="fa-brands fa-square-twitter"></i></a>
                            <a href="https://instagram.com/ovin_mano?igshid=YmMyMTA2M2Y="><i className="fa-brands fa-square-instagram"></i></a>
                            <a href="https://github.com/rajsah4287"><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-below">
                    <div className="copyright">
                        <p>
                            @ {new Date().getFullYear()} Design-House & Raj Kishor Sah /copyright
                        </p>
                    </div>
                    <div className="below-links">
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        <a href="/cookie"><div><p>Cookie</p></div></a>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Footer;