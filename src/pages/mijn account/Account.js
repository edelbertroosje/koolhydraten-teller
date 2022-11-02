import React from 'react';
import './Account.css';
const Account = () => {
    return (
        <div className="formLabel-container">
            <h1>Mijn Account</h1>
            <h2>Hoi [user]</h2>
                <h3>Hier heb je toegang tot je gegevens en kan je deze wijzigen</h3>
            <button>Gegevens wijzigen</button>
            <form className="form-field">
            </form>
        </div>
    );
};

export default Account;