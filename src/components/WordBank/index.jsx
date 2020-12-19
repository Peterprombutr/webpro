import * as React from "react";
import "./style.css";

export class WordBank extends React.Component {
    constructor(prop) {
        super(prop);

        this.state = {
            a: 0
        }
    }

    buildWordBank() {
        // To integrate with backend later
        var wordBank = ["conspire", "misuse", "spiteful", "neat", "road", "idiotic", "implant",
            "muscle", "tin", "finger", "needy", "arrest", "chance", "blue-eyed", "tie", "quiver",
            "love", "trip", "form"];
        var wordBankHtml = [];

        for (var i = 0; i < wordBank.length; i++) {
            wordBankHtml.push(<p key={i} className="word">{wordBank[i]}</p>);
        }

        return wordBankHtml;
    }

    render() {
        var wb = this.buildWordBank();

        return(
            <div className="word-bank">
                {wb}
            </div>
        );
    }
}