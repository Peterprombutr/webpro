import * as React from "react";
import "./style.css";
import Background from "../../assets/bg1.svg";
import { Enemy } from "../Enemy";

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
                <Enemy name="High necromancer" current_health="100" max_health="100"/>
            </div>
        );
    }
}