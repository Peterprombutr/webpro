import * as React from "react";
import "./style.css";

export class TypingArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            a: 0
        };
    }

    render() {
        return(
            <div className="typing-area">
                <input className="typing-area__input" onChange={this.props.onChange}/>
            </div>
        );
    }
}