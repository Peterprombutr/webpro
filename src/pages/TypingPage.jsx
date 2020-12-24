import * as React from "react";
import { Header } from "../components/Header";
import { TypingGameDisplay } from "../components/TypingGameDisplay";
import { TypingUI } from "../components/TypingUI";
import "../styles/TypingPage.css";
import enemy_img from "../assets/attack1_1.png";
import necro from "../assets/enemy1.svg"

export class TypingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            player_health: 3,
            dps: 0,
            enemy_current_hp: 120,
            enemy_list: ["High necromancer", "Slime", "Minotaur"],
            enemy_hp_list: [120, 140, 160],
            enemy_img_list: [necro, enemy_img, necro],
            enemy_index: 0,
            // Empty string will remove the display
            enemy_attack_words: ["supercritical ", "destruction "],
            attack_active: true,
        };
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
                enemy_current_hp: this.state.enemy_hp_list[new_enemy_index]
            })
        }
    }

    calculateDPS(dps_in) {
        this.setState({
            dps: dps_in
        })
        this.updateDamage(dps_in);
    }

    attack_commence() {
        this.setState({
            // Pull attack words from wordbank
            enemy_attack_words: ["energy ", "takodachi "],
            attack_active: true,
        })
    }

    defend_success() {
        console.log("defend success");
        this.setState({
            enemy_attack_words: [],
            attack_active: false,
        });
    }

    take_damage() {
        console.log("take damage!");
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
                    enemy_name={this.state.enemy_list[this.state.enemy_index]}
                    current_health={this.state.enemy_current_hp}
                    max_health={this.state.enemy_hp_list[this.state.enemy_index]}
                    enemy_image={this.state.enemy_img_list[this.state.enemy_index]}
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