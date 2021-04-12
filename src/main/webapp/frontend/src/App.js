import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import welcome from "./components/welcome"
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

class App extends Component{
    render() {
        return (
            <Router>
                <Route exact path = '/' component={welcome}>
                </Route>
                <Route exact path = '/SignIn' component={SignIn}>
                </Route>
                <Route exact path = '/SignUp' component={SignUp}>
                </Route>

            </Router>
        )
    }
}




export default App;
