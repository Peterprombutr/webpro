import * as React from "react";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { TypingPage } from "./pages/TypingPage";
import { GameOverPage } from "./pages/GameOverPage";
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
        this.setState({
            username: displayName
        })
    }

    logout = () => {
        console.log("logout");
        this.setState({
            username: null
        })
    }

    render() {

        return(
            <div>
                <Router>
                    <Switch>
                        <Route path="/login" render={(props) => <SignIn login={(username) => this.login(username)}/>} />
                        <Route exact path="/signup" render={(props) => <SignUp login={(username) => this.login(username)}/>} />
                        <Route path="/end" render={(props) => <GameOverPage {...props} logout={this.logout} username={this.state.username}/>} />
                        <Route path="/typing" render={(props) => <TypingPage {...props} difficulty={this.state.difficulty} logout={this.logout} username={this.state.username}/>} />
                        <Route path="/" render={(props) => <LandingPage {...props} start_game={this.start_game} logout={this.logout} username={this.state.username}/>} />
                    </Switch>
                </ Router>
            </div>
        );
    }
}