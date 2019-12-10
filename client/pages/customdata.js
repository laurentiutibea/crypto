import React, { Component } from 'react';
import Layout from "../components/layout";

import auth from "../services/authService";
import crypto from "../services/cryptoService";

export default class CustomData extends Component {
  state = {
    user: {},
    data: {
        data: [],
        timestamp: ""
    },
    graphs: []
  }
  
  async componentDidMount() {
	const user = auth.getCurrentUser();
    this.setState({user});
    await crypto.getCurrencies().then(res => this.setState({data: res.data}));
    console.log(this.state.data);
  }

  addGraph = () => {
      const graphs = [...this.state.graphs];
      graphs.push({
          id: 1,
          data: {
              name: "Bitcoin"
          }
      })
      this.setState({graphs});
  }

  render() {
    const select = <select>{this.state.data.data.map(item => (<option value={item.id} key={item.id}>{item.name} - {item.symbol}</option>))}</select>

    return (
      <Layout>
          <p>Hello {this.state.user.name}</p>
          <button className="btn btn-primary" onClick={this.addGraph}>+</button>
          <div className="row">
            {this.state.graphs.length > 0 ? 
                this.state.graphs.map(item => 
                    <div className="col-md-6" key={item.id}>
                        {select}
                        <p>{item.data.name}</p>
                    </div> 
            ): ""}
          </div>
      </Layout>
    )
  }
}
