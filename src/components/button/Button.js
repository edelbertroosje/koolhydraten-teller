import React from "react";
import "./Button.css"

function Button({name,type, onClick,onSubmit,disabled}){
    return (
        <div>
            <button
                type={type}
                onClick={onClick}
                onSubmit={onSubmit}
                disabled={disabled}
            >
                {name}
            </button>
        </div>
    );
};

export default Button;