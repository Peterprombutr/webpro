import * as React from "react";
import "./style.css";

export class WordBank extends React.Component {
    constructor(prop) {
        super(prop);

        this.state = {
            a: 0
        }
    }

    render() {
        return(
            <div className="word-bank">
                <p>Conspire misuse spitefuul neat</p>
            </div>
        );
    }
}