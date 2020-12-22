import * as React from "react";
import { Header } from "../components/Header";
import { TypingGameDisplay } from "../components/TypingGameDisplay";
import { TypingUI } from "../components/TypingUI";
import "../styles/TypingPage.css";

export class TypingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dps: 0,
            enemy_current_hp: 100,
            enemy_max_hp: 120,
            enemy_list: ["high necromancer", "slime", "minotaur"],
        };
    }

    updateDamage(dps_in) {
        console.log(dps_in);
        var raw_hp = (this.state.enemy_current_hp - (dps_in/3.003).toFixed(0));
        var enemy_new_hp = raw_hp < 0 ? 0 : raw_hp;
        this.setState({
            enemy_current_hp: enemy_new_hp
        })

        if (enemy_new_hp <= 0) {
            console.log("dead");
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
                <TypingGameDisplay current_health={this.state.enemy_current_hp} max_health={this.state.enemy_max_hp}/>
                <TypingUI calculateDPS={(dps_in) => this.calculateDPS(dps_in)}/>
            </div>
        );
    }
}