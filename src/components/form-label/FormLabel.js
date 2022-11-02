import React from "react";
import './FormLabel.css'


function FormLabel({name,label,size,inputType,placeHolder,register,inputMode,validationObject,onClick, errors}){


    return (
        <label  htmlFor={`${name}-field`}>{label}
            <input
                {...register(name, validationObject)}
                id={`${name}-field`}
                type={inputType}
                size={size}
                inputMode={inputMode}
                placeholder={placeHolder}
                onClick={onClick}
            />
            {errors[name] && <p className="error-message">{errors[name].message}</p>}
        </label>
    )
}
export default FormLabel;