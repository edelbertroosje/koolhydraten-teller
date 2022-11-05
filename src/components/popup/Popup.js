import React from 'react';
import "./Popup.css"
import { useHistory} from "react-router-dom";


function Popup({children, onClick, btnName}) {

    return (
        <>
            <div className="popup-container"></div>
            <div className="popup">
                <div className="popup-inner">

                    {children}
                    <button type="button" onClick={onClick}>{btnName}</button>
                </div>
            </div>
        </>
    )
};

export default Popup;