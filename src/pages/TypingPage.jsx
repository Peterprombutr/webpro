import * as React from "react";
import { Header } from "../components/Header";
import { TypingGameDisplay } from "../components/TypingGameDisplay";
import { TypingUI } from "../components/TypingUI";
import { API } from "../utils/API";
import "../styles/TypingPage.css";
import { Redirect } from "react-router-dom";

export class TypingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            player_health: 3,
            floor: 1,
            dps: 0,
            wpm: 0,
            enemy_current_hp: 0,
            enemy_name: 0,
            enemy_hp: 0,
            enemy_img: "",
            enemy_attack_words: [],
            attack_active: false,
            redirect: false
        };
    }

    componentDidMount() {
        let random_monster = Math.floor(1 + Math.random() * 13);
        this.attack_commence();
        this.buildMonster(random_monster);
    }

    componentWillUnmount() {
        API.cancelCalls();
    }

    buildMonster(id) {
        API.getMonster(id).then(response => {
            let scaled_enemy_hp = (response.m_health * (1 + this.state.floor / 20) * this.props.difficulty).toFixed(0);
            this.setState({
                enemy_name: response.m_name,
                enemy_hp: scaled_enemy_hp,
                enemy_current_hp: scaled_enemy_hp,
                enemy_img: response.m_image
            })
        })
    }

    updateDamage(dps_in) {
        var raw_hp = (this.state.enemy_current_hp - (dps_in/3.003).toFixed(0));
        var enemy_new_hp = raw_hp < 0 ? 0 : raw_hp;

        this.setState({
            enemy_current_hp: enemy_new_hp
        })

        // Cycle new enemy
        if (enemy_new_hp <= 0) {
            let random_monster = Math.floor(1 + Math.random() * 13);
            this.setState({
                floor: this.state.floor + 1
            })
            this.buildMonster(random_monster);
        }
    }

    calculateDPS(dps_in) {
        this.setState({
            dps: dps_in
        })
        this.updateDamage(dps_in);
    }

    setWPM(wpm_in) {
        this.setState({
            wpm: wpm_in
        })
    }

    attack_commence() {
        API.getWordBank(2).then(response => {
            var new_attack_words = response.wb_list;
            new_attack_words[0] += " ";
            new_attack_words[1] += " ";
            this.setState({
                enemy_attack_words: new_attack_words,
                attack_active: true,
            })
        });
    }

    defend_success() {
        this.setState({
            enemy_attack_words: [],
            attack_active: false,
        });
    }

    take_damage() {
        var new_health = this.state.player_health - 0.5;
        this.setState({
            player_health: new_health,
            enemy_attack_words: [],
            attack_active: false,
        });
        if (new_health <= 0) {
            this.setState({
                redirect: true
            })
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{pathname: "/end", state: {wpm_end: this.state.wpm, floor_reached: this.state.floor}}} />
        }

        return(
            <div className="typing-page">
                <Header username={this.props.username} logout={this.props.logout}/>
                <TypingGameDisplay
                    difficulty={this.props.difficulty}
                    floor={this.state.floor}
                    enemy_name={this.state.enemy_name}
                    current_health={this.state.enemy_current_hp}
                    max_health={this.state.enemy_hp}
                    enemy_image={this.state.enemy_img}
                    attack_words={this.state.enemy_attack_words}
                    attack_active={this.state.attack_active}
                    attack_commence={() => this.attack_commence()}
                    take_damage={() => this.take_damage()}
                />
                <TypingUI
                    username={this.props.username}
                    player_health={this.state.player_health}
                    calculateDPS={(dps_in) => this.calculateDPS(dps_in)}
                    setWPM={(wpm_in) => this.setWPM(wpm_in)}
                    attack_words={this.state.enemy_attack_words}
                    defend_success={() => this.defend_success()}
                />
            </div>
        );
    }
}