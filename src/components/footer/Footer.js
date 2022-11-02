import React from 'react';
import './Footer.css'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="links-container">
                <h3>Links</h3>
                <Link to="/">Lorem ipsum dolor sit amet.</Link>
                <Link to="/">Lorem ipsum dolor sit amet.</Link>
                <Link to="/">Lorem ipsum dolor sit amet.</Link>
                <Link to="/">Lorem ipsum dolor sit amet.</Link>
                <Link to="/">Lorem ipsum dolor sit amet.</Link>
            </div>
            <div className="contact-container">
                <h3>Contact</h3>
                <p>Valkenburgsingel 15</p>
                <p>3077 TG Rotterdam</p>
                <p>Nederland</p>
            </div>


            <div className="social-media-container">
                <h3>Social Media</h3>
            </div>

        </div>
    );
};

export default Footer;