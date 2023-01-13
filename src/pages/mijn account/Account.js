import React, {useContext} from 'react';
import './Account.css';
import {useHistory} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";


const Account = () => {
    const {user} = useContext(AuthContext)
    const history = useHistory();
    function navigate(){history.push("/wijzigen")}

    return (
        <>
                <main className="account-container">
                    <h1>Mijn Account</h1>
                    <h2>Hoi {user.username}</h2>
                    <p>Hier heb je toegang tot je account en kun je deze wijzigen.</p>
                    <section className="account-info">
                        <h2>Mijn gegevens</h2>
                        <p>gebruikersnaam: {user.username}</p>
                        <p>E-mail: {user.email}</p>
                        <p>{user.roles[0].name} </p>
                        <button onClick={navigate}>Wachtwoord wijzigen</button>
                    </section>
                    <form className="form-field">
                    </form>
                </main>
            </>
    );
};

export default Account;