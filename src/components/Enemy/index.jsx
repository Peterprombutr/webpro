import * as React from "react";
import "./style.css";

export class Enemy extends React.Component {
    constructor(prop) {
        super(prop);

        this.state = {
            health_width: 0
        }
    }

    componentDidMount() {
        this.calculateWidth(this.props.current_health, this.props.max_health);
        this.intervalID = setInterval(() => this.calculateWidth(this.props.current_health, this.props.max_health), 500);
    }

    calculateWidth = (current_health, max_health) => {
        var percentage = parseInt(current_health)/parseInt(max_health);
        var actual = percentage * 100;
        //console.log(actual + "% - 30px")

        this.setState({
            health_width: "calc(" + actual + "% - 30px)"
        })
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render() {
        var health_bar = this.props.current_health > 0 ? "enemy__name" : "enemy__name--nohp"

        return(
            <div className="enemy">
                <p className={health_bar} style={{width: this.state.health_width}}>{this.props.name}</p>
                <p className="enemy__health">{this.props.current_health}/{this.props.max_health}</p>
                <img className="enemy-img" src={this.props.enemy_image} alt="enemy"/>
            </div>
        );
    }
}