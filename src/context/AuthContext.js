import {createContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";
import isTokenValid from "../helper/isTokenValid";
export const AuthContext = createContext(null)

function AuthContextProvider({children}){
    const history = useHistory();
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });
    useEffect(()=> {
        console.log('de context is zojuist opnieuw opgestart!')
        //is er een token
        const token = localStorage.getItem('token');
        console.log(token)

        if (token && isTokenValid(token)){
            //is token nog geldig?
            //zo ja haal gegevens op
            const decodedToken = jwtDecode(token);
            console.log(decodedToken);
            fetchUserData(decodedToken.sub,token);
        }else{
            //zo nee? doe nis
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done'})
        }
    },[])
    async function fetchUserData(token){
        try{
            const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`,{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            console.log(response.data)
            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id,
                    role: response.data.role,
                },
                status: "done",
            })
        }catch(error){
            console.error('There was an error!', error);
            localStorage.clear();
        }
    }
    function login(data){
        console.log(data)
        localStorage.setItem('token',data.accessToken);
        console.log('gebruiker is ingelogd')
        toggleIsAuth({
            ...isAuth,
            isAuth: true,
            user: {
                username:data.username,
                email:data.email,
                id:data.id,
                role:data.role,
            },
            status: "done",
        })
        history.push('/account')
    }
    function logout(){
        localStorage.clear()

        console.log('gebruiker is uitgelogd')
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: "done",
        });
        history.push('/home')
    }
    const contextData = {
        isAuth: isAuth,
        user: isAuth.user,
        login: login,
        logout: logout
    };
    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}
export default AuthContextProvider;