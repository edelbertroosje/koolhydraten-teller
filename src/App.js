import './App.css';
import Header from "./components/header/Header";
import Registreren from "./pages/registreren/Registreren";
import Account from "./pages/mijn account/Account";
import { Route, Switch} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Inloggen from "./pages/inlog-pagina/Inloggen";

function App() {

    return (
        <div className="outer-container">
            <div className="inner-container">
                <Header/>
                <Switch>
                    <Route exact path="/home"><Home/></Route>
                    <Route path="/account"><Account/></Route>
                    <Route path="/registreren"><Registreren/></Route>
                    <Route path="/inloggen"><Inloggen/></Route>
                </Switch>
                <Footer />
            </div>

        </div>
    );
}

export default App;
