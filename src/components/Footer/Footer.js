import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faInstagram,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
            <a
                    href="https://fashioncarevirtualtrial.netlify.app/"
                   // target="_blank"
                    className="item1"
                > Virtual Trial
                </a>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} FashionCare. All Rights
                        Reserved.
                    </span>
                </div>
                <a
                    href="https://www.instagram.com/"
                   // target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                    href="http://fb.com"
                    //target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                    href="https://www.youtube.com/"
                   // target="_blank"
                    className="item5"
                >
                    <FontAwesomeIcon icon={faYoutube} />
                </a>

            </div>
        </footer>
    );
};

export default Footer;
