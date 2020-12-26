import React from "react";
import "src/styles/LoginPage.css";

export class LoginPage extends React.Component {

    render() {
        return(
            <div>
                <div className="header--login">
                    <button className="login-button">Login</button>
                    <button>Sign Up</button>
                </div>
                <div className="login-container">
                    <p className="login-container__title">TypeIt.io</p>
                    <label for="uname">Username:</label>
                    <input className="input" type="text" id="uname" name="uname" />
                    <label for="pw">Password:</label>
                    <input className="input" type="password" id="pw" name="pw" />
                    <button>Login</button>
                </div>
            </div>
        );
    }
}