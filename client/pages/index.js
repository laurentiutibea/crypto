import React, { Component } from 'react';
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import io from "socket.io-client";

import auth from "../services/authService";
import "../static/style.css";

class Index extends Component{
    state = {
        user: {}
    }

    componentDidMount() {
		const user = auth.getCurrentUser();
        this.setState({user});
    }

    handleReq = () => {
        fetch("http://localhost:3900/api/crypto").then(res => res.json()).then(res => console.log("RESULT::: ", res));
    }
    
    handleLogout = () => {
        auth.logout();
        window.location.replace("/login");
    }

    render(){
        if(process.browser && !auth.getCurrentUser()) {
            window.location.replace("/login");
        }
        else return (
            <div className="main">
                <Head>
                    <title>Login</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                </Head>
                <Navbar/>
                <div className="container">
                    <p>Hello {this.state.user.name}</p>
                    <button onClick={() => {
                        const response = fetch("https://api.coincap.io/v2/assets", {
                            method: "GET",
                            redirect: "follow"
                        }).then(res => res.json()).then(res => console.log(res));
                    }}>GET ASSETS</button>
                    <button onClick={this.handleReq}>GET WS</button>
                </div>
                <Footer/>
            </div>
        );
    }
}
  
export default Index;