import React, { Component } from 'react';
import Head from "next/head";
import Link from 'next/link';

import auth from "../services/authService";
import cryptoImg from "../src/crypto-text.png";
import "../static/style.css";

export default class Login extends Component {
    state = {
        data: {
            email: "",
            password: ""
        },
        error: ""
    }

    validate = () => {
        return !(this.state.data.email !== "" && this.state.data.password !== "");
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
            await auth.login(data.email, data.password);

            window.location.replace("/");
        }
        catch(ex){
            if(ex.response && ex.response.status === 400){
                this.setState({error:"Wrong email or password!"});
            }
        }
    }

    render() {
        return (
            <div className="container home" style={{paddingTop:"10%", paddingBottom:"14%"}}>
                <Head>
                    <title>Login</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                </Head>
                <div className="card w-50 mx-auto shadow">
                    <div className="card-body text-center pt-4">
                        <img src={cryptoImg}/>
                        <h1 style={{fontFamily: "Courier New"}}><strong>Login</strong></h1>
					    <hr/>
                        <form onSubmit={this.doSubmit} method="POST" className="m-auto">
                            <div className="form-group input">
                                <input type="text" name="email" placeholder="Email" value={this.state.data.email} onChange={this.handleChange} className="form-control mb-3 mt-2 shadow w-75 mx-auto"/>
                                <input type="password" name="password" placeholder="Password" value={this.state.data.password} onChange={this.handleChange} className="form-control mb-3 shadow w-75 mx-auto"/>
                                <p>Create an account:
                                    <Link href="/register">
                                        <a><span className="ml-2">Register</span></a>
                                    </Link>
                                </p>
                                <button disabled={this.validate()} className="btn btn-success mt-2 mb-2">Login</button>
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
