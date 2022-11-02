import React from 'react';
import "./Popup.css"
import {useHistory} from "react-router-dom";

function Popup({children,}){
    const history = useHistory()
    return  (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn"
                        onClick={()=>   history.push("/inloggen")}

                >X</button>
                {children}

            </div>

        </div>
    )
};

export default Popup;