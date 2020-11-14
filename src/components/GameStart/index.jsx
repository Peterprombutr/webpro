import * as React from "react";
import "./style.css";

export class GameStart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0
        };
    }

    change_difficulty = (event) => {
        this.setState({
            selected: event.target.value
        });
        console.log("difficulty changed to " + event.target.value);
    }

    render() {
        return(
            <div className="dc">
                <p className="header__difficulty">Select Difficulty</p>
                <div className="flex">
                    <div className="difficulty" onChange={this.change_difficulty}>
                        <input type="radio" id="easy" name="difficulty" value="1" />
                        <label htmlFor="easy">Easy</label>
                        <input type="radio" id="medium" name="difficulty" value="2" />
                        <label htmlFor="medium">Intermediate</label>
                        <input type="radio" id="hard" name="difficulty" value="3" />
                        <label htmlFor="hard">Advanced</label>
                    </div>
                    <div style={{zIndex: 0}}>
                        <button className="button game-start" onClick={() => this.props.start(this.state.selected)}>START</button>
                    </div>
                </div>

            </div>
        );
    }
}