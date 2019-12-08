import React, { Component } from 'react';
import Head from "next/head";
import Link from 'next/link';

import auth from "../services/authService";

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
            <div className="container" style={{marginTop:"15%"}}>
                <Head>
                    <title>Login</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                </Head>
                <div className="card w-50 mx-auto">
                    <div className="card-body text-center pt-4">
                        <h5 className="card-title">Login Page</h5>
                        <form onSubmit={this.doSubmit} method="POST" className="m-auto">
                            <div className="form-group input">
                                <input type="text" name="email" placeholder="Email" value={this.state.data.email} onChange={this.handleChange} className="form-control mb-3 mt-2"/>
                                <input type="password" name="password" placeholder="Password" value={this.state.data.password} onChange={this.handleChange} className="form-control mb-3"/>
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
