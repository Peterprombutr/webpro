import * as React from "react";
import { Header } from '../components/Header';
import "../styles/GameOverPage.css";

export class GameOverPage extends React.Component {
    constructor(props) {
    super(props);

}

    render() {
        return(
            <div className="game-over-page">
                <Header username={this.props.username} logout={this.props.logout}/>
                <h1 className="game-over__defeated"> DEFEATED</h1>
                <div className="game-over__details">
                    <p>WPM: {this.props.location.state.wpm_end}</p>
                    <p>Floor reached: {this.props.location.state.floor_reached}</p>
                </div>
            </div>
        );
    }
}