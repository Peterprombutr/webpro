import * as React from "react";
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
                <p>wordbank</p>
                <p>wordbank</p>
                <p>typing zone</p>
                <p>player info</p>
            </div>
        );
    }
}