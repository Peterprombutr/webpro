import * as React from "react";
import { LeaderboardItem } from "../LeaderboardItem";
import "./style.css";

export class Leaderboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            leaderboard__diff: 0
        };
    }

    change_leaderboard__diff = (event) => {
        this.setState({
            leaderboard__diff: event.target.value
        });
        console.log("leaderboard now displaying " + event.target.value);
    }

    render() {
        return(
            <div className="leaderboard-container">
                <p className="leaderboard-header">Leaderboard</p>
                <div className="leaderboard-items-holder">
                    <LeaderboardItem userName={"AmbiguousLizard"} wpm={210} floorCleared={30}/>
                    <LeaderboardItem userName={"Klee_klee"} wpm={188} floorCleared={28}/>
                    <LeaderboardItem userName={"Liskarm"} wpm={157} floorCleared={27}/>
                </div>
                <div className="leaderboard__difficulty" onChange={this.change_leaderboard__diff}>
                    <input type="radio" id="leaderboard__easy" name="leaderboard__diff" value="1" />
                    <label htmlFor="leaderboard__easy">Easy</label>
                    <input type="radio" id="leaderboard__med" name="leaderboard__diff" value="2" />
                    <label htmlFor="leaderboard__med">Intermediate</label>
                    <input type="radio" id="leaderboard__hard" name="leaderboard__diff" value="3" />
                    <label htmlFor="leaderboard__hard">Advanced</label>
                </div>
            </div>
        );
    }
}