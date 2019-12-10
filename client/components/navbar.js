import React, { Component } from 'react';
import Link from "./link";

import auth from "../services/authService";
import crypto from "../src/crypto.png";

export default class Navbar extends Component {
    handleLogout = () => {
        auth.logout();
        window.location = "/login";
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light">
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
                                    <a className="nav-link"><strong>Home</strong></a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/customdata">
                                    <a className="nav-link"><strong>Custom Data Graphs</strong></a>
                                </Link>
                                
                            </li>
                            <li className="nav-item">
                                <Link href="/admin">
                                    <a className="nav-link"><strong>Administration Panel</strong></a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link" onClick={this.handleLogout}><strong>Logout</strong></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}