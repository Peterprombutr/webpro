import * as React from "react";
import { LeaderboardItem } from "../LeaderboardItem";
import "./style.css";

export class Leaderboard extends React.Component {

    render() {
        return(
            <div className="leaderboard-container">
                <p className="leaderboard-header">Leaderboard</p>
                <div className="leaderboard-items-holder">
                    <LeaderboardItem />
                    <LeaderboardItem />
                    <LeaderboardItem />
                </div>
                <div className="leaderboard__difficulty">
                    <button>Easy</button>
                    <button>Intermediate</button>
                    <button>Advanced</button>
                </div>
            </div>
        );
    }
}