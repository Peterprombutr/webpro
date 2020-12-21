import * as React from "react";
import { HealthBlip } from "../HealthBlip";
import "./style.css";

export class PlayerInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            attack_value: 1,
            wpm: 0,
            dps: 0,
        };
    }

    render() {
        return(
            <div className="player-info">
                <p>User12347</p>
                <div className="player-info__health">
                    <HealthBlip status="1"/>
                    <HealthBlip status="1"/>
                    <HealthBlip status="0"/>
                </div>
                <p className="player-info__attack">ATK: {this.state.attack_value}</p>
                <div className="player-info__wpm">
                    <p>WPM: {this.state.wpm}</p>
                    <p>DPS: {this.state.dps}</p>
                </div>
            </div>
        );
    }
}