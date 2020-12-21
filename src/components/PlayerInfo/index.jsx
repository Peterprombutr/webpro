import * as React from "react";
import { HealthBlip } from "../HealthBlip";
import "./style.css";

export class PlayerInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="player-info">
                <p>User12347</p>
                <div className="player-info__health">
                    <HealthBlip status="1"/>
                    <HealthBlip status="1"/>
                    <HealthBlip status="1"/>
                </div>
                <p className="player-info__attack">ATK: {this.props.atk}</p>
                <div className="player-info__wpm">
                    <p>WPM: {this.props.wpm}</p>
                    <p>DPS: {this.props.dps}</p>
                </div>
            </div>
        );
    }
}