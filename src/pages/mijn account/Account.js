import React, {useEffect, useState} from 'react';
import './Account.css';
import axios from "axios";
import {useHistory} from "react-router-dom";

const Account = () => {
    const history = useHistory();
    const [profileData, setProfileData] = useState({});
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });

    function navigate(){history.push("/wijzigen")}

    useEffect(() => {

        async function fetchProfileData() {
            const token = localStorage.getItem('token');

            try {
                const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfileData(response.data);
                toggleIsAuth({
                    ...isAuth,
                    isAuth: true,
                    user: {
                        username: response.data.username,
                        email: response.data.email,
                        id: response.data.id,
                        roles: response.data.roles,
                    },
                    status: "done",
                })
            } catch (e) {
                console.error(e);
            }
        }
        fetchProfileData();
    }, [])

    return (
        <>
            {Object.keys(profileData).length >0 &&
                <main className="account-container">
                    <h1>Mijn Account</h1>
                    <h2>Hoi {profileData.username}</h2>
                    <p>Hier heb je toegang tot je account en kun je deze wijzigen.</p>
                    <section className="account-info">
                        <h2>Mijn gegevens</h2>
                        <p>gebruikersnaam: {profileData.username}</p>
                        <p>E-mail: {profileData.email}</p>
                        <p>{profileData.roles[0].name} </p>
                        <button onClick={navigate}>Wachtwoord wijzigen</button>
                    </section>
                    <form className="form-field">
                    </form>
                </main>}
        </>
    );
};

export default Account;