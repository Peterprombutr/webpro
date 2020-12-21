import * as React from "react";
import "./style.css";
import enemy_img from "../../assets/attack1_1.png";
import necro from "../../assets/enemy1.svg"

export class Enemy extends React.Component {
    constructor(prop) {
        super(prop);

        this.state = {
            a: 0
        }
    }

    render() {
        return(
            <div className="enemy">
                <p className="enemy__name">{this.props.name}</p>
                <img className="enemy-img" src={necro} alt="enemy"/>
            </div>
        );
    }
}