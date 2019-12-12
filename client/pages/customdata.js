import React, { Component } from 'react';
import Layout from "../components/layout";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import auth from "../services/authService";
import crypto from "../services/cryptoService";

export default class CustomData extends Component {
  state = {
    user: {},
    data: [],
    graphs: [],
    chartOptions: {
      chart: {zoomType: 'x' , backgroundColor: "#eeeeee"},
      title: {text: 'BTC to EUR exchange rate over time'},
      subtitle: {text: 'Click and drag in the plot area to zoom in'},
      xAxis: { type: 'datetime'},
      yAxis: {
          title: {text: 'Exchange rate'}
      },
      legend: {enabled: false},
      plotOptions: {
          area: {
              fillColor: {
                  linearGradient: {
                      x1: 0,
                      y1: 0,
                      x2: 0,
                      y2: 1
                  },
                  stops: [
                    [0, "#7cb5ec"],
                    [0.5, "#7cb5ec80"],
                    [0.9, "#7cb5ff33"]
                ]
              },
              marker: {radius: 2},
              lineWidth: 1,
              states: {
                  hover: {lineWidth: 1}
              },
              threshold: null
          }
      }
    }
  }
  
  async componentDidMount() {
	  const user = auth.getCurrentUser();
    this.setState({user});
    await crypto.getCurrencies().then(res => {
      const bkOptions = {...this.state.chartOptions};
      bkOptions.series = [{
        type: "area",
        name: "BTC to EUR",
        data: res.data
      }]
      this.setState({
        data: res.data,
        chartOptions: bkOptions
        })
    });
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
    //const select = <select>{this.state.data.data.map(item => (<option value={item.id} key={item.id}>{item.name} - {item.symbol}</option>))}</select>

    return (
      <Layout>
          <p>Hello {this.state.user.name}</p>
          <button className="btn btn-primary" onClick={this.addGraph}>+</button>
          <div className="row">
            {this.state.graphs.length > 0 ? 
              this.state.graphs.map(item => <HighchartsReact key={item.id} highcharts={Highcharts} options={this.state.chartOptions} oneToOne={true}/>): ""}
            {/* {this.state.graphs.length > 0 ? 
                this.state.graphs.map(item => 
                    <div className="col-md-6" key={item.id}>
                        {select}
                        <p>{item.data.name}</p>
                        <HighchartsReact highcharts={Highcharts} options={this.state.options}/>
                    </div> 
            ): ""} */}
          </div>
      </Layout>
    )
  }
}
