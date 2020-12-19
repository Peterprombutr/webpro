import * as React from "react";
import { WordBank } from "../WordBank";
import "./style.css";

export class TypingUI extends React.Component {
    constructor(prop) {
        super(prop);

        this.state = {
            a: 0
        }
    }

    render() {
        return(
            <div className="typing-ui">
                <WordBank />
            </div>
        );
    }
}