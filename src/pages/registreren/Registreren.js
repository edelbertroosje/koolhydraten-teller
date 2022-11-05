import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import axios from "axios";
import './Registreren.css'
import FormLabel from "../../components/form-label/FormLabel";
import Popup from "../../components/popup/Popup";
import {useHistory} from "react-router-dom";

function Registreren() {
    const history = useHistory();
    const [popup, togglePopup] = useState(false)
    const {handleSubmit, formState: {errors}, register} = useForm({mode: 'onBlur'});

    function navitagte(){
        history.push("/inloggen")
    }

    async function onFormSubmit(data) {
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                    "username": data.username,
                    "email" : data.email,
                    "password" :data.password,
                    "role": [data.user]
                })
        } catch (e) {
            console.error(e)
        }
    }
return (
    <div className="formLabel-container">
        <h1>Registreren</h1>
        <p>Vul uw gegevens in om te registren.</p>

        <form onSubmit={handleSubmit(onFormSubmit)}>
            <FormLabel
                label="Gebruikersnaam:*" name="username" inputType="text" placeHolder="Uw Gebruikersnaam"
                register={register} errors={errors} validationObject={{required: "Gebruikersnaam mag niet leeg zijn"}}
            />
            <FormLabel
                label="E-mail:*" name="email" inputType="email" placeholder="Uw email adres"
                register={register} errors={errors} validationObject={{
                required: "E-mail adres mag niet leeg zijn",
                pattern: {value: /@\w+/g, message: "E-mail adres moet een @ bevatten"}}}
            />
            <FormLabel
                label="Wachtwoord:*" name="password" inputType="password" placeHolder="Uw wachtwoord"
                register={register} errors={errors} validationObject={{
                required: "Uw wachtwoord mag niet leeg zijn",
                minLength: {value: 6, message: "Uw wachtwoord moet minstens 6 karakters lang zijn"}}}
            />
            <FormLabel
                label="Role:*" name="role" inputType="text" placeHolder="user of admin"
                register={register} errors={errors} validationObject={{required: "Role mag niet leeg zijn"}}
            />

            <button
                type="submit" className="registratie-btn" onClick={() => togglePopup(true)}>
                Registreren
            </button>
        </form>
        {popup && <Popup trigger={popup} setTrigger={togglePopup} onClick={navitagte}
        btnName="inloggen">
            <h1>U bent succesvol geregistreerd.</h1>
            <h2>U kunt nu inloggen.</h2>
        </Popup>}

    </div>
);
}

export default Registreren;