import * as React from "react";
import "./style.css";

export class GameStart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0
        };
    }

    change_difficulty = (val) => {
        this.setState({
            selected: val
        });
        console.log("difficulty changed to " + val);
    }

    render() {
        return(
            <div className="dc">
                <p className="header__difficulty">Select Difficulty</p>
                <div className="flex">
                    <div className="difficulty">
                        <button className="button difficulty" onClick={() => this.change_difficulty(1)}>Easy</button>
                        <button className="button difficulty" onClick={() => this.change_difficulty(2)}>Intermediate</button>
                        <button className="button difficulty" onClick={() => this.change_difficulty(3)}>Advanced</button>
                    </div>
                    <div>
                        <button className="button game-start" onClick={() => this.props.start(this.state.selected)}>START</button>
                    </div>
                </div>

            </div>
        );
    }
}