import * as React from "react";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { TypingPage } from "./pages/TypingPage";
import SignIn from "./components/LoginComponent/SignIn";
import SignUp from "./components/LoginComponent/SignUp";

import "./styles/main.css";

export class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            difficulty: 0,
            username: null
        };
    }

    start_game = (val) => {
        this.setState({
            difficulty: val
        });
        console.log("starting a game session with the difficulty of " + val);
    }

    login = (displayName) => {
        console.log("logged in: " + displayName);
        this.setState({
            username: displayName
        })
    }

    render() {

        return(
            <div>
                <Router>
                    <Switch>
                        <Route path="/login" render={(props) => <SignIn login={(username) => this.login(username)}/>} />
                        <Route exact path="/signup" render={(props) => <SignUp login={(username) => this.login(username)}/>} />
                        <Route path="/typing" render={(props) => <TypingPage {...props} difficulty={this.state.difficulty} />} />
                        <Route path="/" render={(props) => <LandingPage {...props} start_game={this.start_game} username={this.state.username}/>} />
                    </Switch>
                </ Router>
            </div>
        );
    }
}