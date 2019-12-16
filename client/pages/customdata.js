import React, { Component } from 'react';
import Layout from "../components/layout";
import Highcharts from 'highcharts';
// import HighchartsReact from 'highcharts-react-official';
import ReactHighcharts from 'react-highcharts';

import auth from "../services/authService";
import crypto from "../services/cryptoService";

import loading from "../src/91.gif";


const chartOptions = {
  chart: {zoomType: 'x'},
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
	times: 0,
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
		console.log(e.data);
		bkOptions.title =  {text: `${this.state.selectedCryptocurrency} to ${this.state.selectedCurrency} exchange rate over time`},
		bkOptions.series = [{
			type: "line",
			name: `${this.state.selectedCryptocurrency} to ${this.state.selectedCurrency}`,
			data: e.data.prices
		}]
		graphs.push({
			id: Date.now(),
			chartOptions: bkOptions,
			cryptocurrency: this.state.selectedCryptocurrency,
			currency: this.state.selectedCurrency,
			live: false
		})
      	console.log(graphs);
      	this.setState({
        	data: e.data.prices,
        	graphs: graphs,
			workers: this.state.workers+1,
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
          data: e.data.prices
        }]
        this.setState({
          data: e.data.prices,
          graphs: graphs,
          loading: false
        })
      }
      workers[i].postMessage(`${graphs[i].cryptocurrency},${graphs[i].currency},${this.state.jwt}`);
      }
  }

  liveData = (index) => {
    console.log("LIVE",index);
    const worker = new Worker("static/service-worker.js");
    const graphs = [...this.state.graphs];
	worker.onmessage = e => {
        graphs[index].chartOptions.series[0].data.push(e.data.currentPrice);
        graphs[index].chartOptions.series = [{
          type: "area",
          name: this.state.graphs[index].chartOptions.series[0].name,
          data: graphs[index].chartOptions.series[0].data
		}]
        this.setState({
          	data: graphs[index].chartOptions.series[0].data,
          	graphs: graphs
        })
      }
	worker.postMessage(`${graphs[index].cryptocurrency},${graphs[index].currency},${this.state.jwt}`);
  }

  changeGraphLive = (e,index) => {
	setInterval(() => this.liveData(index), 4000);
  }

  render() {
    return (
      <Layout>
          <p>Hello {this.state.user.name}</p>
          <div className="form-group w-25">
            <select name="Cryptocurrency" onChange={this.changeCryptocurrency} className="form-control"><option value="">Select Cryptocurrency</option>{this.state.cryptocurrencies.map(item => (<option value={item.id} key={item.id}>{item.name} - {item.symbol}</option>))}</select>
            <select name="Currency" onChange={this.changeCryptocurrency} className="form-control"><option value="">Select Currency</option>{this.state.currencies.map(item => (<option value={item.id} key={item.id}>{item.name} - {item.symbol}</option>))}</select>
          </div>
          <button className="btn btn-primary" onClick={this.addGraph}>+</button>
          <button className="btn btn-success" onClick={this.refreshAll}>REFRESH</button>
            {this.state.graphs.length > 0 ? 
				this.state.graphs.map((item,index) => 
					<div className="row mt-4" key={item.id}>
						<div className="col-md-3">
							<div className="form-group">
							<select name="Cryptocurrency" onChange={this.changeGraphCryptocurrency} defaultValue={item.cryptocurrency} className="form-control">{this.state.cryptocurrencies.map(i => (<option value={i.id} key={i.id}>{i.name} - {i.symbol}</option>))}</select>
                        	<select name="Currency" onChange={this.changeGraphCryptocurrency} defaultValue={item.currency} className="form-control">{this.state.currencies.map(i => (<option value={i.id} key={i.id}>{i.name} - {i.symbol}</option>))}</select>
							<input type="checkbox" onChange={(e) => this.changeGraphLive(e,index)} defaultValue={item.live} className="form-control"/>
							</div>
						</div>
						<div className="col-md-9 text-center">
							{!this.state.loading ? <ReactHighcharts key={item.id} highcharts={Highcharts} config={item.chartOptions} ref="chart" oneToOne={true}/> : <img src={loading}/>}
						</div> 
					</div>
            ): ""}
      </Layout>
    )
  }
}
