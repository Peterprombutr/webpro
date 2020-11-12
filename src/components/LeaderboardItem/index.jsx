import * as React from "react";
import "./style.css";

export function LeaderboardItem(props) {

    return(
        <div className="leaderboard-item">
            <p>{props.userName}&emsp;&emsp;WPM:{props.wpm}&emsp;&emsp;Floor cleared:{props.floorCleared}</p>
        </div>
    );
}