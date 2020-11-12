import * as React from "react";
import { LeaderboardItem } from "../LeaderboardItem";
import "./style.css";

export class Leaderboard extends React.Component {

    render() {
        return(
            <div className="leaderboard-container">
                <p className="leaderboard-header">Leaderboard</p>
                <div className="leaderboard-items-holder">
                    <LeaderboardItem userName={"AmbiguousLizard"} wpm={210} floorCleared={30}/>
                    <LeaderboardItem userName={"Klee Klee"} wpm={188} floorCleared={28}/>
                    <LeaderboardItem userName={"sus pepperoni"} wpm={157} floorCleared={27}/>
                </div>
                <div className="leaderboard__difficulty">
                    <input type="radio" id="leaderboard__easy" name="leaderboard__diff" value="1" />
                    <label for="leaderboard__easy">Easy</label>
                    <input type="radio" id="leaderboard__med" name="leaderboard__diff" value="2" />
                    <label for="leaderboard__med">Intermediate</label>
                    <input type="radio" id="leaderboard__hard" name="leaderboard__diff" value="3" />
                    <label for="leaderboard__hard">Advanced</label>
                </div>
            </div>
        );
    }
}