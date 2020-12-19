import * as React from "react";
import { Header } from "../components/Header";
import { TypingGameDisplay } from "../components/TypingGameDisplay";
import { TypingUI } from "../components/TypingUI";
import "../styles/TypingPage.css";

export class TypingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            a: 0
        };
    }

    render() {

        return(
            <div className="typing-page">
                <Header />
                <div>
                    <TypingGameDisplay />
                </div>
                <div>
                    <TypingUI />
                </div>
            </div>
        );
    }
}