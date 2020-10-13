import React from "react";
import "./LandingPage.css";

export class LandingPage extends React.Component {

    render() {
        return(
            <div>
                <div className="header">
                    <h2>TypeIt.io</h2>
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
                <div className="partition">
                    <div className="partition__left">
                        <h3 className="introduction-text__top">Improve your typing for free online by practicing on classic literature. Choose a book to get started!</h3>
                        <div className="partition__left-inner-box">
                            <p className="introduction-text__middle">Typing practice that keeps you engaged and entertained</p>
                            <p>Practice your typing interactively and improve your speed and accuracy</p>
                            <p>Track and compare your progress by logging in</p>
                            <p>Never lose your place — Auto-save where you last left off</p>
                        </div>
                    </div>
                    <div className="partition__right">
                        <ul>
                            <li>
                                <p>asdasd</p>
                            </li>
                            <li>
                                <p>asdsdd</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}