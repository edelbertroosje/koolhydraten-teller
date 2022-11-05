import React, {useContext} from 'react';
import {Link, NavLink, } from "react-router-dom";
import './Header.css';
import logo from '../../assets/logo/Logo-Koolhydraten-teller.png';
import {AuthContext} from "../../context/AuthContext";

function Header(){
    const { isAuth, logout} = useContext(AuthContext)

    return (
        <div className="nav-container">
            <div className="logo-container"> <Link to="/"><img src={logo} alt="koolhydraten"/></Link></div>
            <nav className="nav-list">
                <ul>
                    <li>{ isAuth.isAuth && <NavLink to="/account">Mijn account</NavLink>}</li>
                    {isAuth.isAuth ?
                        <button type="button" onClick={logout} to="/">Uitloggen</button>
                        :
                        <li><NavLink to="/inloggen">Inloggen</NavLink></li>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Header