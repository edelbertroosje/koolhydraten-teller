import React from 'react';
import './Footer.css'
import {Link} from "react-router-dom";
import facebook from '../../assets/Facebook.png';
import linkedin from '../../assets/Linkedin.png';

const Footer = () => {
    return (
            <div className="footer-container">
                <div className="links-container">
                    <h3>Links</h3>
                    <Link to={{pathname:"https://www.diabeter.nl"}} target="_blank">Diabeter.nl</Link>
                    <Link to={{pathname:"https://www.gezondheidsnet.nl"}} target="_blank">Gezondheidsnet.nl</Link>
                    <Link to={{pathname:"https://www.hartstichting.nl"}} target="_blank">Hartstichting.nl</Link>
                    <Link to={{pathname:"https://www.hellofresh.nl"}} target="_blank">Hellofresh.nl</Link>
                    <Link to={{pathname:"https://www.freestyle.abbott.nl"}} target="_blank">Freestyle.abbott/nl</Link>
                    <Link to={{pathname:"https://www.voedingscentrum.nl"}} target="_blank">Voedingscentrum.nl</Link> <br/><br/>
                    <Link to="Privacy" >Privacyverklaring</Link>
                </div>
                <div className="contact-container">
                    <h3>Adres</h3>
                    <p>Valkenburgsingel 15</p>
                    <p>3077 TG Rotterdam</p>
                    <p>Nederland</p>
                </div>
                <div className="social-media-container">
                    <h3>Social Media</h3>
                    <img src={linkedin} alt=""/>
                    <img src={facebook} alt=""/>
                </div>
            </div>
    );
};

export default Footer;