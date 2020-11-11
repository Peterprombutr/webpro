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
                        <input type="radio" id="easy" name="difficulty" value="1" />
                        <label for="easy">Easy</label>
                        <input type="radio" id="medium" name="difficulty" value="2" />
                        <label for="medium">Intermediate</label>
                        <input type="radio" id="hard" name="difficulty" value="3" />
                        <label for="hard">Advanced</label>
                    </div>
                    <div>
                        <button className="button game-start" onClick={() => this.props.start(this.state.selected)}>START</button>
                    </div>
                </div>

            </div>
        );
    }
}