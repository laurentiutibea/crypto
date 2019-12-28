import React, { Component } from 'react';
import Link from "./link";

import auth from "../services/authService";
import crypto from "../src/crypto.png";

export default class Navbar extends Component {
    state = {
        user: {}
    }

    componentDidMount(){
        const user = auth.getCurrentUser();
		this.setState({ user });
    }

    handleLogout = () => {
        auth.logout();
        window.location = "/login";
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-light">
                    <Link href="/">
                        <a className="navbar-brand" href="#"><img src={crypto}/></a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link"><strong>Dashboard</strong></a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/customdata">
                                    <a className="nav-link"><strong>Custom Data Graphs</strong></a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/saveddata">
                                    <a className="nav-link"><strong>Saved Data</strong></a>
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown mr-4">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <strong>Hello {this.state.user.name}! <i className="fas fa-user-circle"/></strong>
                                </a>
                                <div className="dropdown-menu mx-auto" aria-labelledby="navbarDropdown">
                                    <Link href="/password"><a className="dropdown-item">Change Password</a></Link>
                                    {this.state.user.isAdmin && <Link href="/admin"><a className="dropdown-item">Administration Panel</a></Link>}
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item text-danger" style={{display:"inline-block"}} onClick={this.handleLogout}><strong>Disconnect <i className="fas fa-power-off"/></strong></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
