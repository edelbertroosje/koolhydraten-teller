import React from 'react';
import './Account.css';

const Account = () => {
    return (
        <div className="account-container">
            <h1>Mijn Account</h1>
            <h2>Hoi: [user]</h2>
            <h3>Hier heb je toegang tot je gegevens en kan je deze wijzigen</h3>

            <div className="account-info">
                <h2>Mijn gegevens</h2>
                <p>E-mail:</p>
                <p>Huidig wachtoord: </p>
                <p>gebruikersnaam:</p>
                <p>Role:</p>
                <button>Gegevens wijzigen</button>
            </div>
            <form className="form-field">
            </form>
        </div>
    );
};

export default Account;