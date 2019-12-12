import React, { Component } from 'react';
import Layout from "../components/layout";
import io from "socket.io-client";

import auth from "../services/authService";
import crypto from "../services/cryptoService";

class Index extends Component{
    state = {
        user: {},
        data: {
            data: [],
            timestamp: ""
        }
    }

    async componentDidMount() {
		const user = auth.getCurrentUser();
        this.setState({user});
        await crypto.getCurrencies().then(res => this.setState({data: res.data}));
        console.log(this.state.data);
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
            <Layout>
                <p>Hello {this.state.user.name}</p>
                <div className="row">
                    {/* {this.state.data.data.map(item => (
                        <div className="col-sm-2 border" key={item.id}>
                            <p>{item.name}</p>
                            <p>{item.symbol}</p>
                        </div>
                    ))} */}
                </div>
            </Layout>
        );
    }
}
  
export default Index;