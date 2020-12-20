import * as React from "react";
import { HealthBlip } from "../HealthBlip";
import "./style.css";

export class PlayerInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            a: 0
        };
    }

    render() {
        return(
            <div className="player-info">
                <p>User12347</p>
                <div className="player-info__health">
                    <HealthBlip />
                    <HealthBlip />
                    <HealthBlip />
                </div>
            </div>
        );
    }
}