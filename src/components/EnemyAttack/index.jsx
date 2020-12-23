import * as React from "react";
import "./style.css";

export class EnemyAttack extends React.Component {
    constructor(prop) {
        super(prop);

        this.state = {
            attack_charge: 0,
            charge_width: 0,
            speed: 2,
        }
    }

    componentDidMount() {
        var top_val = Math.floor(5 + Math.random() * 30);
        this.intervalID = setInterval(() => this.incrementCharge(this.state.attack_charge, this.state.speed), 500);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    incrementCharge(charge, speed) {
        var new_charge = charge + speed

        if (this.state.attack_charge < 100) {
            this.setState({
                attack_charge: new_charge,
                charge_width: "calc(" +  new_charge + "% - 20px"
            })
        }
    }

    render() {
        return(
            <div className={"enemy-attack-wrap--" + this.props.attack_zone}>
                <div className="enemy-attack--white">
                    <p className="enemy-attack--charging" style={{width: this.state.charge_width}}>{this.props.attack_word}</p>
                </div>
            </div>
        );
    }
}