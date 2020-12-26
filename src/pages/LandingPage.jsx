import * as React from "react";
import { GameStart } from "../components/GameStart"
import { Header } from "../components/Header";
import { Leaderboard } from "../components/Leaderboard";
import "../styles/LandingPage.css";

export class LandingPage extends React.Component {
    constructor(props) {
    super(props);

}

    render() {
        return(
            <div className="landing-page">
                <Header username={this.props.username}/>
                <div className="partition">
                    <div className="partition__left">
                        <GameStart start={this.props.start_game}/>
                    </div>
                    <div className="partition__right">
                        <Leaderboard />
                        <div className="introduction-box">
                            <h3 className="introduction-text__top">
                                Improve your typing by typing (attacking) through a dungeon of enemies, and defend yourself by quickly reacting to their words!
                            </h3>
                            <div className="introduction-inner-box">
                                <p className="introduction-text__middle">
                                    Typing game that provides engaging visuals and progression to keep you entertained
                                </p>
                                <p>Practice your typing with engaging gameplay</p>
                                <p>Multiple difficulties and enemies!</p>
                                <p>Game-based progression system to keep track of your progress</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}