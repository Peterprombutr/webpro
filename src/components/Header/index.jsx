import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        };
    }

    componentDidMount = () => {
        this.setState({
            user: this.props.username
        })
    };


    render() {
        let topbar;
        if (this.props.username) {
            topbar = <>
                <p className="header__user-info">Logged in as {this.props.username}</p>
                <button className="button header">Logout</button>
            </>
        }
        else {
            topbar = <>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <button className="button header">Login</button>
                </Link >
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                <button className="button header">Sign Up</button>
                </Link >
            </>
        }
        return(
            <div className="header">
                <p className="header__title">TypeIt.io</p>
                {topbar}
            </div>
        );
    }
}