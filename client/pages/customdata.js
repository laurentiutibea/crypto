import React, { Component } from 'react';
import Layout from "../components/layout";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import auth from "../services/authService";
import crypto from "../services/cryptoService";

const chartOptions = {
  chart: {zoomType: 'x' , backgroundColor: "#eeeeee"},
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

export default class CustomData extends Component {
  state = {
    user: {},
    jwt: "",
    data: [],
    graphs: [],
    cryptocurrencies: [
      {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "BTC"
      },
      {
        id: "ethereum",
        name: "Ethereum",
        symbol: "ETH"
      }
    ],
    currencies : [
      {
        id: "eur",
        name: "Euro",
        symbol: "EUR"
      },
      {
        id: "usd",
        name: "American Dollar",
        symbol: "USD"
      }
    ],
    selectedCryptocurrency: "",
    selectedCurrency: "",
    workers: 0,
    loading: false,
    chartOptions: {}
  }
  
  async componentDidMount() {
    const user = auth.getCurrentUser();
    const jwt = auth.getJwt();
    this.setState({user,jwt});
   /* await crypto.getCurrencies("bitcoin","eur").then(res => {
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
    }); */
  }

  addGraph = () => {
    
    const worker = new Worker("static/service-worker.js");
    const bkOptions = {...chartOptions};
    const graphs = [...this.state.graphs];
    worker.onmessage = e => {
      bkOptions.title =  {text: `${this.state.selectedCryptocurrency} to ${this.state.selectedCurrency} exchange rate over time`},
      bkOptions.series = [{
        type: "area",
        name: `${this.state.selectedCryptocurrency} to ${this.state.selectedCurrency}`,
        data: e.data
      }]
      graphs.push({
          id: Date.now(),
          chartOptions: bkOptions,
          cryptocurrency: this.state.selectedCryptocurrency,
          currency: this.state.selectedCurrency
      })
      console.log(graphs);
      this.setState({
        data: e.data,
        graphs: graphs,
        workers: this.state.workers+1
        })
    }
    worker.postMessage(`${this.state.selectedCryptocurrency},${this.state.selectedCurrency},${this.state.jwt}`);
  }

  changeCryptocurrency = (e) => {
    console.log(e.target.value)
    this.setState({[`selected${e.target.name}`]:e.target.value});
  }

  refreshAll = () => {
    let workers = new Array(this.state.workers);
    const graphs = [...this.state.graphs];
    this.setState({loading: true})
    for(let i=0; i<this.state.workers; i++){
      workers[i] = new Worker("static/service-worker.js");
      workers[i].onmessage = e => {
        graphs[i].chartOptions.series = [{
          type: "area",
          name: this.state.graphs[i].chartOptions.series[0].name,
          data: e.data
        }]
        this.setState({
          data: e.data,
          graphs: graphs,
          loading: false
        })
      }
      workers[i].postMessage(`${graphs[i].cryptocurrency},${graphs[i].currency},${this.state.jwt}`);
      }
  }

  render() {
    const selectCC = <select name="Cryptocurrency" onChange={this.changeCryptocurrency}><option value="">Select Cryptocurrency</option>{this.state.cryptocurrencies.map(item => (<option value={item.id} key={item.id}>{item.name} - {item.symbol}</option>))}</select>
    const selectC = <select name="Currency" onChange={this.changeCryptocurrency}><option value="">Select Currency</option>{this.state.currencies.map(item => (<option value={item.id} key={item.id}>{item.name} - {item.symbol}</option>))}</select>
    return (
      <Layout>
          <p>Hello {this.state.user.name}</p>
          {selectCC}
          {selectC}
          <button className="btn btn-primary" onClick={this.addGraph}>+</button>
          <button className="btn btn-success" onClick={this.refreshAll}>REFRESH</button>
          <div className="row">
            {this.state.graphs.length > 0 ? 
                this.state.graphs.map((item,index) => 
                    <div className="col-md-6" key={item.id}>
                        <select name="Cryptocurrency" onChange={this.changeCryptocurrency} defaultValue={item.cryptocurrency}>{this.state.cryptocurrencies.map(i => (<option value={i.id} key={i.id}>{i.name} - {i.symbol}</option>))}</select>
                        <select name="Currency" onChange={this.changeCryptocurrency} defaultValue={item.currency}>{this.state.currencies.map(i => (<option value={i.id} key={i.id}>{i.name} - {i.symbol}</option>))}</select>
                        {!this.state.loading && <HighchartsReact key={item.id} highcharts={Highcharts} options={item.chartOptions} oneToOne={true}/>}
                    </div> 
            ): ""}
          </div>
      </Layout>
    )
  }
}
