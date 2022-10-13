import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">Logo</div>
            <nav className="nav-list">
                <ul>
                    <li><NavLink to="/account">Mijn account</NavLink></li>
                    <li><NavLink exact to="/">Mijn Menu's</NavLink></li>
                    <li><NavLink exact to="/">Uitloggen</NavLink></li>
                </ul>
            </nav>
        </div>

    );
};

export default Header;