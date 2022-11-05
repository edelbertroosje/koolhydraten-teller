import './App.css';
import Header from "./components/header/Header";
import Registreren from "./pages/registreren/Registreren";
import Account from "./pages/mijn account/Account";
import {Redirect, Route, Switch} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Inloggen from "./pages/inlog-pagina/Inloggen";
import Privacy from "./pages/privacy/Privacy";
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext";
import Wijzigen from "./pages/mijn account/Wijzigen";

function App(){
    const { isAuth} = useContext(AuthContext)

    return (
        <div className="outer-container">
            <div className="inner-container">
                <Header/>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/account">{isAuth.isAuth ? <Account/> : <Redirect to="/" />}</Route>
                    <Route path="/registreren"><Registreren/></Route>
                    <Route path="/inloggen"><Inloggen/></Route>
                    <Route path="/privacy"><Privacy/></Route>
                    <Route path="/wijzigen"><Wijzigen/></Route>
                </Switch>
                <Footer/>
            </div>

        </div>
    );
}

export default App;
