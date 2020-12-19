import * as React from "react";
import "./style.css";

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
            </div>
        );
    }
}