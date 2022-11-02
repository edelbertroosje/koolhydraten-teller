import React from 'react';

function Popup({children,trigger}){
    return (trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn">X</button>
                {children}

            </div>

        </div>
    ) : "";
};

export default Popup;