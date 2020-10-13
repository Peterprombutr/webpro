import React from "react";
import Logo from "./logo.svg";
import "./LandingPage.css";

export class LandingPage extends React.Component {

    render() {
        return(
            <div>
                <div className="header">
                    <p className="header__title">TypeIt.io</p>
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
                        <a href="https://www.google.com">
                            <div className="book-box">
                                <img src={Logo} alt="nono"></img>
                                <div>
                                    <h5 className="book-box__title">Gretel and Hansel</h5>
                                    <p className="book-box__author">Wilhelm Grimm, Jacob Grimm</p>
                                    <p className="book-box__desc">Hansel and Gretel, older brother and younger sister, are young children abandoned or lost in the forest, where they fall into the hands of a cannibalistic witch living in a house made of gingerbread, cake, confection, sweets, and many other treats and pastries. The witch intends to fatten the children before</p>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.google.com">
                            <div className="book-box">
                                <img src={Logo} alt="nono"></img>
                                <div>
                                    <h5 className="book-box__title">Book 2</h5>
                                    <p className="book-box__author">Book 2 Author</p>
                                    <p className="book-box__desc">Book 2 Synopsis</p>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.google.com">
                            <div className="book-box">
                                <img src={Logo} alt="nono"></img>
                                <div>
                                <h5 className="book-box__title">Book 3</h5>
                                    <p className="book-box__author">Book 3 Author</p>
                                    <p className="book-box__desc">Book 3 Synopsis</p>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.google.com">
                            <div className="book-box">
                                <img src={Logo} alt="nono"></img>
                                <div>
                                <h5 className="book-box__title">Book 4</h5>
                                    <p className="book-box__author">Book 4 Author</p>
                                    <p className="book-box__desc">Book 4 Synopsis</p>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.google.com">
                            <div className="book-box">
                                <img src={Logo} alt="nono"></img>
                                <div>
                                <h5 className="book-box__title">Book 5</h5>
                                    <p className="book-box__author">Book 5 Author</p>
                                    <p className="book-box__desc">Book 5 Synopsis</p>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.google.com">
                            <div className="book-box">
                                <img src={Logo} alt="nono"></img>
                                <div>
                                <h5 className="book-box__title">Book 6</h5>
                                    <p className="book-box__author">Book 6 Author</p>
                                    <p className="book-box__desc">Book 6 Synopsis</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}