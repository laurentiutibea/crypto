import React, { Component } from 'react';

import Layout from "../components/layout";
import cryptoImg from "../src/crypto-text.png";
import {update} from "../services/userService";
import auth from "../services/authService";

export default class Password extends Component {
    state = {
		user: {
            _id: "", 
            email: "", 
            isAdmin:false, 
            name: "", 
            currentPassword: ""
        },
        error: ""
	};

	validate = () => {
		return !(this.state.user.password !== "" && this.state.user.confirmPassword !== "" && this.state.user.currentPassword &&
			this.state.user.password.length >= 5 && this.state.user.confirmPassword.length >= 5 && this.state.user.password.length <= 1024 &&
			this.state.user.confirmPassword.length <= 1024
		);
	};

	handleChange = (e) => {
		const user = {...this.state.user};
		user[e.target.name] = e.target.value;
		this.setState({user});
	};

	doSubmit = async (e) => {
		e.preventDefault();
		if(this.state.user.password === this.state.user.confirmPassword){
			if(this.state.user.password.length >= 5){
				const {user} = this.state;
				let status = 400;
				await auth.confirmLogin(user.email, user.currentPassword).then(res => status = res.status).catch(err => status = err.response.status);
				if(status === 200) {
					try{
						delete user.confirmPassword;
						delete user.currentPassword;
						delete user.iat;
						await update(user);
						window.location.replace("/index");
					}
					catch(ex){
						if(ex.response && ex.response.status === 400){
							this.setState({error:"Incorrectly data entered!"});
						}
					}
				}
				else this.setState({error:"Authentication error!"});
			}
			else this.setState({error:"Password must have at least 5 characters!"});
		}
		else this.setState({error:"Passwords don't match!"});
    };

    componentDidMount() {
		const user = auth.getCurrentUser();
		user.password = "";
		user.confirmPassword = "";
		this.setState({user});
	}
    
    render() {
        if(process.browser && !auth.getCurrentUser()) {
            window.location.replace("/login");
        }
        else return (
            <Layout>
                <div className="card w-50 mx-auto shadow" style={{marginTop:"15%"}}>
                    <div className="card-body text-center pt-4">
                        <img src={cryptoImg}/>
                        <h1 style={{fontFamily: "Courier New"}}><strong>Change Password</strong></h1>
					    <hr/>
                        <form onSubmit={this.doSubmit} method="POST" className="m-auto">
                            <div className="form-group input">
                                <input type="password" name="currentPassword" placeholder="Current password" onChange={this.handleChange} className="form-control mb-3 mt-2 shadow w-75 mx-auto"/>
						        <input type="password" name="password" placeholder="New password" onChange={this.handleChange} className="form-control mb-3 mt-2 shadow w-75 mx-auto"/>
						        <input type="password" name="confirmPassword" placeholder="Confirm new password" onChange={this.handleChange} className="form-control mb-3 mt-2 shadow w-75 mx-auto"/>
                                <button disabled={this.validate()} className="btn btn-success mt-2 mb-2">Change Password</button>
                            </div>
                        </form>
                        <div>
                            <p className="text-danger"><strong>{this.state.error}</strong></p>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
