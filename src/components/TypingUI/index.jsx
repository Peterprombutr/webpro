import * as React from "react";
import { PlayerInfo } from "../PlayerInfo";
import { TypingArea } from "../TypingArea";
import { WordBank } from "../WordBank";
import { currentTime } from "../../utils/currentTime";
import "./style.css";

export class TypingUI extends React.Component {
    constructor(prop) {
        super(prop);

        this.state = {
            start_time: false,
            num_words_typed: 0,
            wpm: 0,
            current_word: -1,
            typed_words: [],
            word_bank: [],
        }
    }

    componentDidMount() {
        this.buildWordBank();

        this.setState({
            current_word: 0
        })
    }

    type(e) {
        if (!this.state.start_time) {
            this.setState({
                start_time: currentTime()
            })
        }
        var w = this.state.word_bank[this.state.current_word]
        //console.log(this.state.start_time);

        if (e.target.value === w + " ") {
           // console.log("hit");
            var updated_typed_words = this.state.typed_words.concat(w);
            var duration = (currentTime() - this.state.start_time) / 60000.0;
            e.target.value = "";

            this.setState({
                current_word: this.state.current_word + 1,
                typed_words: updated_typed_words,
                num_words_typed: this.state.num_words_typed + 1,
                wpm: ((this.state.num_words_typed + 1) / duration).toFixed(2)
            })

        }
    }

    buildWordBank() {
        // To integrate with backend later
        var wordBank = ["conspire", "misuse", "spiteful", "neat", "road", "idiotic", "implant",
            "muscle", "tin", "finger", "needy", "arrest", "chance", "blue-eyed", "tie", "quiver",
            "love", "trip", "form", "rookie", "crossword", "axe", "hamlet", "prototype", "factory"];

        this.setState({
            word_bank: wordBank
        })
    }

    displayWordBank() {
        var wordBankHtml = [];

        for (var i = 0; i < this.state.word_bank.length; i++) {
            if (this.state.typed_words.includes(this.state.word_bank[i])) {
                wordBankHtml.push(<p key={i} className="word--typed">{this.state.word_bank[i]}</p>);
            }
            else if (this.state.word_bank[this.state.current_word] === this.state.word_bank[i]) {
                wordBankHtml.push(<p key={i} className="word--current">{this.state.word_bank[i]}</p>);
            }
            else {
                wordBankHtml.push(<p key={i} className="word">{this.state.word_bank[i]}</p>);
            }
        }

        return wordBankHtml;
    }

    render() {
        var wb = this.displayWordBank();

        return (
            <div className="typing-ui">
                <WordBank wb={wb}/>
                <TypingArea onChange={(e) => this.type(e)}/>
                <PlayerInfo wpm={this.state.wpm}/>
            </div>
        );
    }
}