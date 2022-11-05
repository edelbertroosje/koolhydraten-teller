import React from 'react';
import "./Popup.css"
import {Link, useHistory} from "react-router-dom";
import close from '../../assets/logo/close.png';

function Popup({children,onClick,btnName}){
    const history = useHistory()
    return  (
        <div className="popup">
            <div className="popup-inner">
                {/*<Link to="/inloggen" ><img src={close} alt=""/></Link>*/}
                {children}
                <button type="button" onClick={onClick}>{btnName}</button>
            </div>

        </div>
    )
};

export default Popup;