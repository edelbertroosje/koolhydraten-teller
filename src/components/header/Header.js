import React, {useContext} from 'react';
import {Link, NavLink, } from "react-router-dom";
import './Header.css';
import logo from '../../assets/logo/Logo-Koolhydraten-teller.png';
import {AuthContext} from "../../context/AuthContext";

function Header(){
    const { isAuth, logout} = useContext(AuthContext)

    return (
        <header className="nav-container">
            <div className="logo-container"> <Link to="/"><img src={logo} alt="koolhydraten"/></Link></div>
            <nav className="nav-list">
                <ul>
                    <li>{ isAuth.isAuth && <NavLink to="/account">Mijn account</NavLink>}</li>
                    {isAuth.isAuth ?
                        <button className="button-nav" type="button" onClick={logout} to="/">Uitloggen</button>
                        :
                        <li><NavLink to="/inloggen">Inloggen</NavLink></li>
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Header