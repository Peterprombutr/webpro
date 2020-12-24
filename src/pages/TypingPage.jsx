import * as React from "react";
import { Header } from "../components/Header";
import { TypingGameDisplay } from "../components/TypingGameDisplay";
import { TypingUI } from "../components/TypingUI";
import { API } from "../utils/API";
import "../styles/TypingPage.css";

export class TypingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            player_health: 3,
            dps: 0,
            enemy_current_hp: 0,
            enemy_name: 0,
            enemy_hp: 0,
            enemy_img: "",
            enemy_index: 1,
            enemy_attack_words: [],
            attack_active: false,
        };
    }

    componentDidMount() {
        this.attack_commence();
        this.buildMonster(1);
    }

    buildMonster(id) {
        API.getMonster(id).then(response => {
            console.log(response);
            this.setState({
                enemy_name: response.m_name,
                enemy_hp: response.m_health,
                enemy_current_hp: response.m_health,
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
            var new_enemy_index = this.state.enemy_index + 1;
            this.setState({
                enemy_index: new_enemy_index,
            })
            this.buildMonster(new_enemy_index);
        }
    }

    calculateDPS(dps_in) {
        this.setState({
            dps: dps_in
        })
        this.updateDamage(dps_in);
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
    }

    render() {

        return(
            <div className="typing-page">
                <Header isLoggedIn={false}/>
                <TypingGameDisplay
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
                    player_health={this.state.player_health}
                    calculateDPS={(dps_in) => this.calculateDPS(dps_in)}
                    attack_words={this.state.enemy_attack_words}
                    defend_success={() => this.defend_success()}
                />
            </div>
        );
    }
}