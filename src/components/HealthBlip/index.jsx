import * as React from "react";
import "./style.css";

export class HealthBlip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            a: 0
        };
    }

    render() {
        return(
            <svg width="35" height="40">
                <rect width="20" height="40" rx="6" className={"health-rect-" + this.props.status}/>
            </svg>
        );
    }
}