import * as React from "react";
import { Header } from "../components/Header";
import "../styles/TypingPage.css";

export class TypingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            a: 0
        };
    }

    render() {

        return(
            <div>
                <Header />
            </div>
        );
    }
}