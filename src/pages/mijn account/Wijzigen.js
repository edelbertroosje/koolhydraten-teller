import React, {useState} from 'react';
import './Account.css';
import axios from "axios";
import FormLabel from "../../components/form-label/FormLabel";
import {useForm} from "react-hook-form";
import Popup from "../../components/popup/Popup";
import {useHistory} from "react-router-dom";

const Account = () => {
    const [popup, togglePopup] = useState(false)
    const {handleSubmit, formState: {errors}, register} = useForm({mode: 'onBlur'});
    const token = localStorage.getItem('token');
    const history = useHistory();

    function navitagte(){
        history.push("/account")
    }



    async function onFormSubmit(data)  {
            try {
                const response = await axios.put(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                    password: data.password,
                    repeatedPassword: data.repeatedPassword,
                },{
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
            }catch(e) {
                console.error(e);
            }
        }

    return (
        <div className="formLabel-container">
            <h1>Mijn Account</h1>

            <form onSubmit={handleSubmit(onFormSubmit)}>

                <FormLabel
                    label="nieuw wachtwoord:*" name="password" inputType="password" placeHolder="Uw wachtwoord"
                    register={register} errors={errors} validationObject={{
                    required: "Uw wachtwoord mag niet leeg zijn",
                    minLength: {value: 6, message: "Uw wachtwoord moet minstens 6 karakters lang zijn"}}}
                />
                <FormLabel
                    label="herhaal wachtwoord:*" name="repeatedPassword" inputType="password" placeHolder="Uw wachtwoord"
                    register={register} errors={errors} validationObject={{
                    required: "Uw wachtwoord mag niet leeg zijn",
                    minLength: {value: 6, message: "Uw wachtwoord moet minstens 6 karakters lang zijn"}}}
                />
                <button type="submit" onClick={() => togglePopup(true)}>Wijzigen</button>
            </form>
            {popup && <Popup trigger={popup} setTrigger={togglePopup} onClick={navitagte}
                             btnName="Sluiten">
                <h1>Uw wachtwoord is gewijzigd.</h1>
                <h2>U kunt terug naar uw account.</h2>
            </Popup>}
        </div>
    );
};

export default Account;