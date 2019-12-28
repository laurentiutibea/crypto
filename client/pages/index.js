import React, { Component } from 'react';
import Link from "../components/link";

import Layout from "../components/layout";
import auth from "../services/authService";
import crypto from "../services/cryptoService";
import cryptoImg from "../src/crypto-text.png";

class Index extends Component{
    state = {
        user: {}
    }

    async componentDidMount() {
		const user = auth.getCurrentUser();
        this.setState({user});
    }

    render(){return (
            <Layout className="home">
                <div className="w-75 mx-auto text-center" style={{paddingTop: "10vh"}}>
					<img src={cryptoImg} />
					<h1 style={{fontFamily: "Courier New"}}><strong>A solution for your investments</strong></h1>
					<hr/>
                    <div className="w-50 mx-auto">
                        <img src="https://steemitimages.com/DQmV75cQgvWMEXBdDrH7vJfMLzyAY8KxLvAsBrViSyendvB/coins-2.png" className="w-100"/>
                    </div>
                    <div className="mt-5">
                        <Link href="/customdata">
                            <a className="btn btn-primary"><strong>Build your custom graphs</strong></a>
                        </Link>
                    </div>
				</div>
            </Layout>
        );
    }
}
  
export default Index;