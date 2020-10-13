import React from "react";
import "../LoginPage.css";

export class LoginPage extends React.Component {

    render() {
        return(
            <div>
                <div className="header">
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
            </div>
        );
    }
}