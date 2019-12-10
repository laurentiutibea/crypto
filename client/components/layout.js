import React, { Component } from 'react'
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import "../static/style.css";

export default class Layout extends Component {
    render() {
        return (
            <div className="main">
                <Head>
                    <title>Home</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                </Head>
                <Navbar/>
                <div className="container">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}
