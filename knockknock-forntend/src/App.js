import './App.css';
import React from "react";
import LandingToolbar from "../src/Components/Toolbar/LandingToolbar";
import Landing from "../src/Components/Landing/Landing";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import CustomerRegistration from "./Components/Regstration/CustomerRegistration";
import TechnicianRegistration from "./Components/Regstration/TechnicianRegistration";
import TechnicianLanding from "./Components/Landing/TechnicianLanding";
import Home from "./Components/Home/Home";
import Otp from './Components/Login/Otp';
import ForgotPassword from './Components/Login/ForgotPassword';
import FOtp from './Components/Login/FOtp';
import ChangePassword from './Components/Login/ChangePassword';
import TechPage from "./Components/Landing/TechPage";
import Comments from "./Components/Landing/Comments";


const useStyles = makeStyles((theme) => ({
    root : {
        flexDirection: "column",
        height: "100vh"
    },
}));

function App() {
    const classes = useStyles();
    return (
        <div className="App">
            <Grid container className={classes.root}>
                <BrowserRouter>
                <LandingToolbar />
                    <Switch>
                        <Route exact path={"/"}>
                            <Landing />
                        </Route>
                        <Route path={"/technician-login"}>
                            <TechnicianLanding />
                        </Route>
                        <Route path={"/customer-registration"}>
                            <CustomerRegistration />
                        </Route>
                        <Route path={"/change-password"}>
                            <ChangePassword />
                        </Route>
                        <Route path={"/change-password2"}>
                            <ChangePassword />
                        </Route>
                        <Route path={"/change-password2t"}>
                            <ChangePassword />
                        </Route>
                        
                        <Route path={"/tech-page/:id"} component={TechPage}>
                           
                        </Route>
                        <Route path={"/technician-registration"}>
                            <TechnicianRegistration />
                        </Route>
                        <Route path={"/forgot-password"}>
                            <ForgotPassword />
                        </Route>
                        <Route path={"/comments/:id"} component={Comments}>
                          
                        </Route>
                        <Route path={"/home"}>
                            <Home />
                        </Route>
                        <Route path={"/otp"}>
                            <Otp />
                        </Route>
                        <Route path={"/fotp"}>
                            <FOtp/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </Grid>
      </div>
    );
}

export default App;
