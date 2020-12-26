import * as React from "react";
import "./style.css";
import Background from "../../assets/bg1.svg";
import { Enemy } from "../Enemy";
import { EnemyAttack } from "../EnemyAttack";

export class TypingGameDisplay extends React.Component {
    constructor(prop) {
        super(prop);

        this.state = {
            a: 0
        }
    }

    render() {
        return(
            <div className="typing-game-display">
                <EnemyAttack
                    attack_zone="left"
                    attack_word={this.props.attack_words[0]}
                    active={this.props.attack_active}
                    attack_commence={this.props.attack_commence}
                    take_damage={() => this.props.take_damage()}
                    difficulty={this.props.difficulty}
                    floor={this.props.floor}
                    />
                <EnemyAttack
                    attack_zone="right"
                    attack_word={this.props.attack_words[1]}
                    active={this.props.attack_active}
                    attack_commence={this.props.attack_commence}
                    take_damage={() => this.props.take_damage()}
                    difficulty={this.props.difficulty}
                    floor={this.props.floor}
                    />
                <img className="background-img" src={Background} alt="background"/>
                <Enemy
                    name={this.props.enemy_name}
                    current_health={this.props.current_health}
                    max_health={this.props.max_health}
                    enemy_image={this.props.enemy_image}
                    />
            </div>
        );
    }
}