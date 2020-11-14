import * as React from "react";
import "./style.css";

export class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            a: 0
        };
    }


    render() {
        let topbar;
        if (this.props.isLoggedIn) {
            topbar = <><p className="header__user-info">Logged in as User1293875 </p>
            <button className="button header">Logout</button></>
        }
        else {
            topbar = <><button className="button header">Login</button>
            <button className="button header">Sign Up</button></>
        }
        return(
            <div className="header">
                <p className="header__title">TypeIt.io</p>
                {topbar}
            </div>
        );
    }
}