import * as React from "react";
import "./style.css";
import Background from "../../assets/bg1.svg";

export class TypingGameDisplay extends React.Component {
    constructor(prop) {
        super(prop);

        this.state = {
            a: 0
        }
    }

    render() {
        return(
            <div className="typing-game-display">
                <img className="background-img" src={Background} alt="background"/>
            </div>
        );
    }
}