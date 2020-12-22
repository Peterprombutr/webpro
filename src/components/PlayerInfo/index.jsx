import * as React from "react";
import { HealthBlip } from "../HealthBlip";
import "./style.css";

export class PlayerInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    createHealthBlips(player_health) {
        var health_blips = [];
        var health_temp = player_health;
        for (var i = 0; i < 3; i++) {
            if (health_temp > 0) {
                health_blips.push(<HealthBlip key={i} status={"1"}/>)
            }
            else {
                health_blips.push(<HealthBlip key={i} status={"0"}/>)
            }
            health_temp--;
        }
        return health_blips;
    }

    render() {

        return(
            <div className="player-info">
                <p>{this.props.player_name}</p>
                <div className="player-info__health">
                    {this.createHealthBlips(this.props.player_health)}
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