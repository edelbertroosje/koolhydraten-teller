import React, {useContext, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";
import FormLabel from "../../components/form-label/FormLabel";
import {useForm} from "react-hook-form";
import axios from "axios";

function Inloggen() {
    const {login} = useContext(AuthContext)
    const [error, toggleError] = useState(false);
    const {handleSubmit, formState: {errors}, register} = useForm({mode: 'onBlur'});

    async function onFormSubmit(data) {
        {console.log(data)}
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin',
                {
                    "username": data.username,
                    "password": data.password,
                })
            login(response.data);
            console.log(response)
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }
    return (
        <>
            <div className="formLabel-container">
                <h1>Inloggen</h1>
                Welkom bij de inlog pagina
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <FormLabel
                        label="Gebruikersnaam:*" name="username" inputType="text" placeHolder="Uw gebruikersnaam"
                        register={register} errors={errors} validationObject={{
                        required: "gebruikersnaam mag niet leeg zijn",
                        minLength: {
                            value: 4,
                            message: "gebruikersnaam moet minstens 4 karakters lang zijn",
                        }
                    }}
                    />
                    <FormLabel
                        label="Wachtwoord:*" name="password" inputType="password" placeHolder="Uw wachtwoord"
                        register={register} errors={errors} validationObject={{
                        required: "wachtwoord mag niet leeg zijn",
                        minLength: {
                            value: 6,
                            message: "wachtwoord moet minstens 6 karakters lang zijn",
                        }
                    }}
                    />
                    {error && <p className="error">Combinatie van gebruikersnaam en wachtwoord is onjuist</p>}
                    <button type="submit">Inloggen</button>
                </form>
                <p>Heb je nog geen account? <Link to="/registreren">Registreer</Link> je dan eerst.</p>
            </div>
        </>
    );
}

export default Inloggen;