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
                <Enemy
                    name={this.props.enemy_name}
                    current_health={this.props.current_health}
                    max_health={this.props.max_health}
                    enemy_image={this.props.enemy_image}
                    />
            </div>
        );
    }
}