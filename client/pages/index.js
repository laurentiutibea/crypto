import React, { Component } from 'react';

import Layout from "../components/layout";
import auth from "../services/authService";
import crypto from "../services/cryptoService";

class Index extends Component{
    state = {
        user: {}
    }

    async componentDidMount() {
		const user = auth.getCurrentUser();
        this.setState({user});
    }

    render(){
        if(process.browser && !auth.getCurrentUser()) {
            window.location.replace("/login");
        }
        else return (
            <Layout>
                <p>Hello {this.state.user.name}</p>
            </Layout>
        );
    }
}
  
export default Index;