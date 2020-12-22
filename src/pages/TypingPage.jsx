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
            dps: 0,
            enemy_current_hp: 120,
            enemy_list: ["High necromancer", "Slime", "Minotaur"],
            enemy_hp_list: [120, 140, 160],
            enemy_img_list: [necro, enemy_img, necro],
            enemy_index: 0,
        };
    }

    updateDamage(dps_in) {
        console.log(dps_in);
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
        this.updateDamage(dps_in)
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
                />
                <TypingUI calculateDPS={(dps_in) => this.calculateDPS(dps_in)}/>
            </div>
        );
    }
}