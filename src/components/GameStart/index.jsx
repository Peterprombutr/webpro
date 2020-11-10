import * as React from "react";
import "./style.css";

export class GameStart extends React.Component {

    render() {
        return(
            <div className="dc">
                <p className="header__difficulty">Select Difficulty</p>
                <div className="flex">
                    <div className="difficulty">
                        <button className="button difficulty">Easy</button>
                        <button className="button difficulty">Intermediate</button>
                        <button className="button difficulty">Advanced</button>
                    </div>
                    <div>
                        <button className="button game-start">START</button>
                    </div>
                </div>

            </div>
        );
    }
}