import * as React from "react";
import { PlayerInfo } from "../PlayerInfo";
import { TypingArea } from "../TypingArea";
import { WordBank } from "../WordBank";
import { currentTime } from "../../utils/currentTime";
import { API } from "../../utils/API";
import "./style.css";

const damageMult = 0.5;

export class TypingUI extends React.Component {
    constructor(prop) {
        super(prop);

        this.state = {
            player_name: "default-user",
            start_time: false,
            num_words_typed: 0,
            wpm: 0,
            dps: 0,
            atk: 1,
            current_word: -1,
            typed_words: [],
            word_bank: [],
        }
    }

    componentDidMount() {
        this.buildWordBank();
        this.intervalID = setInterval(() => this.updateWPM(this.state.num_words_typed, this.state.start_time), 1000);

        this.setState({
            current_word: 0,
            wpm: 0,
        })
    }

    type(e) {
        if (!this.state.start_time) {
            this.setState({
                start_time: currentTime()
            })
        }
        var w = this.state.word_bank[this.state.current_word]

        if (this.props.attack_words.includes(e.target.value)) {
            var duration = (currentTime() - this.state.start_time) / 60000.0;
            var raw_wpm = ((this.state.num_words_typed + 1) / duration).toFixed(2);
            e.target.value = "";

            this.setState({
                num_words_typed: this.state.num_words_typed + 1,
                wpm: raw_wpm,
                dps: ((raw_wpm * this.state.atk * damageMult).toFixed(0)),
            })
            this.props.defend_success();
        }

        if (e.target.value === w + " ") {
            var updated_typed_words = this.state.typed_words.concat(w);
            var duration = (currentTime() - this.state.start_time) / 60000.0;
            var raw_wpm = ((this.state.num_words_typed + 1) / duration).toFixed(2);
            e.target.value = "";

            this.setState({
                current_word: this.state.current_word + 1,
                typed_words: updated_typed_words,
                num_words_typed: this.state.num_words_typed + 1,
                wpm: raw_wpm,
                dps: ((raw_wpm * this.state.atk * damageMult).toFixed(0)),
            })
            this.props.calculateDPS(((raw_wpm * this.state.atk * damageMult).toFixed(0)));


            // check when the word bank is empty and build a new one
            if (this.state.typed_words.length + 1 === this.state.word_bank.length) {
                this.buildWordBank();
                this.setState({
                    typed_words: [],
                    current_word: 0
                })
            }
        }
    }

    updateWPM(num_words_typed, st) {
        var duration = (currentTime() - st) / 60000.0;

        if (num_words_typed > 0) {
            var raw_wpm = (num_words_typed / duration).toFixed(2);
            this.setState({
                wpm: raw_wpm,
                dps: ((raw_wpm * this.state.atk * damageMult).toFixed(0))
            })
        }
    }

    buildWordBank() {
        API.getWordBank(30).then(response => {
            this.setState({
                word_bank: response.wb_list
            })
        });
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
                <PlayerInfo
                    player_name={this.state.player_name}
                    player_health={this.props.player_health}
                    atk={this.state.atk}
                    wpm={this.state.wpm}
                    dps={this.state.dps}
                    />
            </div>
        );
    }
}