import React, {useContext} from 'react';
import {Link, NavLink, Redirect} from "react-router-dom";
import './Header.css';
import logo from '../../assets/logo/Logo-Koolhydraten-teller.png';
import {AuthContext} from "../../context/AuthContext";

function Header(){
    const { isAuth, logout} = useContext(AuthContext)

    return (
        <div className="nav-container">
            <div className="logo-container"> <Link to="/home"><img src={logo} alt="koolhydraten"/></Link></div>
            <nav className="nav-list">
                <ul>
                    <li>{ isAuth ? <NavLink to="/account">Mijn account</NavLink> : <Redirect to='/home'/>}</li>

                    {!isAuth ?
                        <li><NavLink to="/inloggen">Inloggen</NavLink></li>
                        :
                        <li><NavLink onClick={logout} to="/home">Uitloggen</NavLink></li>
                    }
                </ul>
            </nav>
        </div>

    );
};

export default Header;