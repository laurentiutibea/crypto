import React, { Component } from 'react';
import Head from "next/head";

import user from "../services/userService";
import crypto from "../services/cryptoService";

export default class Login extends Component {
    state = {
        data: {
            name: "",
            email: "",
            password: ""
        },
        error: ""
    }

    validate = () => {
        return !(this.state.data.name !== "" && this.state.data.email !== "" && this.state.data.password !== "");
    };

    handleChange = (e) => {
        const data = {...this.state.data};
        data[e.target.name] = e.target.value;
        this.setState({data});
    }

    doSubmit = async (e) => {
        e.preventDefault();
        try{
            const {data} = this.state;
            const responseUser = await user.register(data);
            await crypto.createUserGraphs(responseUser.data._id);
            
            window.location.replace("/login");
        }
        catch(ex){
            if(ex.response && ex.response.status === 400){
                this.setState({error:"Email is already registered!"});
            }
        }
    }

    render() {
        return (
            <div className="container" style={{marginTop:"15%"}}>
                <Head>
                    <title>Register</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                </Head>
                <div className="card w-50 mx-auto">
                    <div className="card-body text-center pt-4">
                        <h5 className="card-title">Register Page</h5>
                        <form onSubmit={this.doSubmit} method="POST" className="m-auto">
                            <div className="form-group input">
                                <input type="text" name="name" placeholder="Name" value={this.state.data.name} onChange={this.handleChange} className="form-control mb-3 mt-2"/>
                                <input type="text" name="email" placeholder="Email" value={this.state.data.email} onChange={this.handleChange} className="form-control mb-3 mt-2"/>
                                <input type="password" name="password" placeholder="Password" value={this.state.data.password} onChange={this.handleChange} className="form-control mb-3"/>
                                <button disabled={this.validate()} className="btn btn-success mt-2 mb-2">Register</button>
                            </div>
                        </form>
                        <div>
                            <p className="text-danger"><strong>{this.state.error}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}