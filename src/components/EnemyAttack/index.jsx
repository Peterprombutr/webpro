import * as React from "react";
import "./style.css";

const attack_restart_timer = 10000;

export class EnemyAttack extends React.Component {
    constructor(prop) {
        super(prop);

        this.state = {
            attack_charge: 0,
            charge_width: 0,
            top: "25vh",
            base_speed: 5,
            speed: 5,
        }
    }

    componentDidMount() {
        let scaled_speed = (1 + this.props.floor / 20) * this.state.base_speed * this.props.difficulty;
        this.setState({
            speed: scaled_speed
        })
        this.intervalID = setInterval(() => this.incrementCharge(this.state.attack_charge, this.state.speed), 500);
        this.intervalID2 = setInterval(() => this.restartAttack(), attack_restart_timer);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
        clearInterval(this.intervalID2);
    }

    incrementCharge(charge, speed) {
        if (this.state.attack_charge >= 100) {
            this.props.take_damage();
            this.deactivate_attack();
        }

        if (this.props.active) {
            var new_charge = charge + speed

            if (this.state.attack_charge < 100) {
                this.setState({
                    attack_charge: new_charge,
                    charge_width: "calc(" +  new_charge + "% - 20px"
                })
            }
        }
        else {
            this.deactivate_attack();
        }
    }

    restartAttack() {
        if (!this.props.active || !this.intervalID) {
            this.props.attack_commence();
            this.intervalID = setInterval(() => this.incrementCharge(this.state.attack_charge, this.state.speed), 500);
            var new_top = Math.floor(8 + Math.random() * 40) + "vh";
            let scaled_speed = (1 + this.props.floor / 20) * this.state.base_speed * this.props.difficulty;
            this.setState({
                top: new_top,
                speed: scaled_speed
            })
        }

    }

    deactivate_attack() {
        clearInterval(this.intervalID);
        this.intervalID = false;
        this.setState({
            attack_charge: 0,
            charge_width: 0
        })
    }

    render() {
        return(
            <div className={"enemy-attack-wrap--" + this.props.attack_zone} style={{top: this.state.top}}>
                <div className="enemy-attack--white">
                    <p className="enemy-attack--charging" style={{width: this.state.charge_width}}>{this.props.attack_word}</p>
                </div>
            </div>
        );
    }
}