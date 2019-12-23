import React, { Component } from 'react';
import Layout from "../components/layout";
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';
import update from "immutability-helper";

import auth from "../services/authService";
import crypto from "../services/cryptoService";

import loading from "../src/91.gif";
import cryptoImg from "../src/crypto-text.png";


const chartOptions = {
	chart: { zoomType: 'x' },
	xAxis: {
		type: 'datetime',
		dateTimeLabelFormats: { day: '%d-%m-%Y - %h:%m' },
		title: { text: 'Date' }
	},
	yAxis: {
		title: { text: 'Exchange rate' }
	},
	legend: { enabled: false },
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
			marker: { radius: 2 },
			lineWidth: 1,
			states: { hover: { lineWidth: 1 } },
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
		cryptocurrencies: [],
		currencies: [],
		selectedCryptocurrency: {},
		selectedCurrency: {},
		workers: 0,
		loading: false,
		loaded: false,
		searchQueryCryptocurrencies: "",
		searchQueryCurrencies: "",
		interval: [],
		chartOptions: {}
	}

	async componentDidMount() {
		const user = auth.getCurrentUser();
		const jwt = auth.getJwt();
		this.setState({ user, jwt });
		await crypto.getCryptocurrencies().then(res => {
			this.setState({
				cryptocurrencies: res.data.cryptocurrencies,
				currencies: res.data.currencies,
				loaded: true
			})
		});
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
		const bkOptions = { ...chartOptions };
		const graphs = [...this.state.graphs];
		worker.onmessage = e => {
			bkOptions.title = { text: `${this.state.selectedCryptocurrency.name} to ${this.state.selectedCurrency.name} exchange rate over time` };
      bkOptions.series = [{
        type: "line",
        name: `${this.state.selectedCryptocurrency.name} to ${this.state.selectedCurrency.name}`,
        data: e.data.prices
      }];
			bkOptions.xAxis.categories = [...e.data.time];
			graphs.push({
				id: Date.now(),
				chartOptions: bkOptions,
				cryptocurrency: this.state.selectedCryptocurrency.value,
				currency: this.state.selectedCurrency.value,
				live: false,
				image: e.data.image
			});
			this.setState({
				graphs: graphs,
				workers: this.state.workers + 1,
				interval: ""
			})
		}
		worker.postMessage(`${this.state.selectedCryptocurrency.value},${this.state.selectedCurrency.value},${this.state.jwt}`);

	}

	findName = (array, value) => {
		for (let i = 0; i < this.state[array].length; i++) {
			if (this.state[array][i].id === value) {
				return this.state[array][i].name;
			}
		}
	}

	changeCryptocurrency = (e, array) => {
		const name = this.findName(array, e.target.value);
		this.setState({
			[`selected${e.target.name}`]: {
				value: e.target.value,
				name: name
			}
		});
	}

	changeGraphCryptocurrency = (e, index) => {
		const graphs = [...this.state.graphs];
		graphs[index][e.target.name.toLowerCase()] = e.target.value;
		this.setState({ graphs: graphs })
	}

	refreshAll = () => {
		let workers = new Array(this.state.workers);
		const graphs = [...this.state.graphs];
		this.setState({ loading: true });
		for (let i = 0; i < this.state.workers; i++) {
			workers[i] = new Worker("static/service-worker.js");
			workers[i].onmessage = e => {
				graphs[i].chartOptions.xAxis.categories = [...e.data.time];
				graphs[i].chartOptions.series = [{
					type: "line",
					name: this.state.graphs[i].chartOptions.series[0].name,
					data: e.data.prices
				}]
				this.setState({
					graphs: graphs,
					loading: false
				})
			}
			workers[i].postMessage(`${graphs[i].cryptocurrency},${graphs[i].currency},${this.state.jwt}`);
		}
	}

	refreshSingle = (index) => {
		const worker = new Worker("static/service-worker.js");
		const graphs = [...this.state.graphs];
		//this.setState({loading: true});
		worker.onmessage = e => {
			const cryptocurrency= this.findName("cryptocurrencies", graphs[index].cryptocurrency);
			const currency= this.findName("currencies", graphs[index].currency);
			graphs[index].chartOptions.title = { text: `${cryptocurrency} to ${currency} exchange rate over time` };
			graphs[index].chartOptions.xAxis.categories = [...e.data.time];
			graphs[index].image = e.data.image;
			graphs[index].chartOptions.series = [{
				type: "line",
				name: `${graphs[index].cryptocurrency} to ${graphs[index].currency}`,
				data: e.data.prices
			}];
			this.setState({
				graphs: graphs,
				//loading: false
			})
		}
		worker.postMessage(`${graphs[index].cryptocurrency},${graphs[index].currency},${this.state.jwt}`);
	}

	removeGraph = (index) => {
		let graphs = [...this.state.graphs];
		clearInterval(graphs[index].interval);
		graphs = graphs.filter((item, i) => i !== index);
		this.setState({ graphs });
	}

	liveData = (index) => {
		const worker = new Worker("static/service-worker.js");
		const graphs = [...this.state.graphs];
		worker.onmessage = e => {
			graphs[index].chartOptions.xAxis.categories.push(e.data.currentTime);
			graphs[index].chartOptions.series[0].data.push(e.data.currentPrice);
			graphs[index].chartOptions.series = [{
				type: "line",
				name: this.state.graphs[index].chartOptions.series[0].name,
				data: graphs[index].chartOptions.series[0].data
			}]
			this.setState({
				graphs: update(this.state.graphs, { [index]: { $set: graphs[index] } })
			})
		}
		worker.postMessage(`${graphs[index].cryptocurrency},${graphs[index].currency},${this.state.jwt}`);
	}

	changeGraphLive = (e, index) => {
		const graphs = [...this.state.graphs];
		if (e.target.checked) {
			graphs[index].interval = setInterval(() => this.liveData(index), 4000);
			this.setState({ graphs });
		}
		else {
			clearInterval(graphs[index].interval);
		}
	}

	saveGraph = async (index) => {
		const bkGraph = { ...this.state.graphs[index] };
		const cryptocurrency= this.findName("cryptocurrencies", bkGraph.cryptocurrency);
		const currency= this.findName("currencies", bkGraph.currency);
		const graph = {
			categories: bkGraph.chartOptions.xAxis.categories,
			series: bkGraph.chartOptions.series[0],
			graphId: bkGraph.id,
			cryptocurrency: {
				value: bkGraph.cryptocurrency,
				name: cryptocurrency
			},
			currency: {
				value: bkGraph.currency,
				name: currency
			},
      date: new Date,
      image: bkGraph.image
		}
		await crypto.saveGraph(graph, this.state.user._id).catch(err => console.log("ERROR!", err));
	}

	getFilteredCryptocurrencies = () => {
		const { cryptocurrencies: allData, searchQueryCryptocurrencies } = this.state;
		let filtered = allData;
		if (searchQueryCryptocurrencies) filtered = allData.filter(m => m.name.toLowerCase().startsWith(searchQueryCryptocurrencies.toLowerCase()));
		return { filtered };
	};

	getFilteredCurrencies = () => {
		const { currencies: allData, searchQueryCurrencies } = this.state;
		let filtered = allData;
		if (searchQueryCurrencies) filtered = allData.filter(m => m.name.toLowerCase().startsWith(searchQueryCurrencies.toLowerCase()));
		return { filtered };
	};

	handleSearch = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render() {
		const { filtered: cryptocurrencies } = this.getFilteredCryptocurrencies();
		const { filtered: currencies } = this.getFilteredCurrencies();
		return (
			<Layout>
				<div className="w-50 mx-auto text-center pt-5">
					<img src={cryptoImg} />
					<h1 style={{fontFamily: "Courier New"}}><strong>Custom Data Graphs</strong></h1>
					<hr/>
					</div>
				{this.state.loaded ?
					<div className="text-center pt-2">
						<div className="row w-75 mx-auto">
							<div className="col-md-6">
								<input type="text" onChange={this.handleSearch} placeholder="Search Cryptocurrency..." value={this.state.searchQueryCryptocurrencies} name="searchQueryCryptocurrencies" className="form-control w-75" style={{display: "inline-block"}}/>
								<span>   <i className="fas fa-search" style={{display: "inline-block"}}/></span>
							</div>
							<div className="col-md-6">
								<select name="Cryptocurrency" onChange={(e) => this.changeCryptocurrency(e, "cryptocurrencies")} disabled={!this.state.loaded} className="form-control" style={{display: "inline-block", width: "90%"}}><option value="">Select Cryptocurrency</option>{cryptocurrencies.map(item => (<option value={item.id} key={item.id}>{item.name} - {item.symbol}</option>))}</select>
								<span>   <i className="fas fa-hand-pointer" style={{display: "inline-block"}}/></span>
							</div>
							<div className="col-md-6 mt-2">
								<input type="text" onChange={this.handleSearch} placeholder="Search Currency..." value={this.state.searchQueryCurrencies} name="searchQueryCurrencies" className="form-control w-75" style={{display: "inline-block"}}/>
								<span>   <i className="fas fa-search" style={{display: "inline-block"}}/></span>
							</div>
							<div className="col-md-6 mt-2">
								<select name="Currency" onChange={(e) => this.changeCryptocurrency(e, "currencies")} disabled={!this.state.loaded} className="form-control" style={{display: "inline-block", width: "90%"}}><option value="">Select Currency</option>{currencies.map(item => (<option value={item.id} key={item.id}>{item.name} - {item.symbol}</option>))}</select>
								<span>   <i className="fas fa-hand-pointer" style={{display: "inline-block"}}/></span>
							</div>
							<div className="col-md-6 mt-3">
								<p><strong>Add graph for selected values</strong></p>
								<button className="btn btn-primary" onClick={this.addGraph}><i className="fas fa-plus"/></button>
							</div>
							<div className="col-md-6 mt-3">
								<p><strong>Refresh all graphs</strong></p>
								<button className="btn btn-success" onClick={this.refreshAll} disabled={this.state.graphs.length === 0}><i className="fas fa-sync"/></button>
							</div>
						</div>
						{this.state.graphs.length > 0 ?
							this.state.graphs.map((item, index) =>
								<div key={item.id} className="pt-3">
									<hr/>
									<img src={item.image} />
									<div className="row mt-4">
										<div className="col-md-9 text-center">
											{!this.state.loading ? <ReactHighcharts key={item.id} highcharts={Highcharts} config={item.chartOptions} ref="chart" oneToOne={true} /> : <img src={loading} />}
										</div>
										<div className="col-md-3">
											<div className="form-group">
												<div className="pt-2">
													<select name="Cryptocurrency" onChange={(e) => this.changeGraphCryptocurrency(e, index)} defaultValue={item.cryptocurrency} className="form-control">{this.state.cryptocurrencies.map(i => (<option value={i.id} key={i.id}>{i.name} - {i.symbol}</option>))}</select>
												</div>
												<div className="pt-2">
													<select name="Currency" onChange={(e) => this.changeGraphCryptocurrency(e, index)} defaultValue={item.currency} className="form-control">{this.state.currencies.map(i => (<option value={i.id} key={i.id}>{i.name} - {i.symbol}</option>))}</select>
												</div>
												<div className="row">
													<div className="col-md-12 mt-3">
														<p><strong>Live data</strong></p>
														<input type="checkbox" onChange={(e) => this.changeGraphLive(e, index)} defaultValue={item.live} className="form-control" />
													</div>
													<div className="col-md-6 mt-3">
														<p><strong>Search</strong></p>
														<button className="btn btn-warning" onClick={() => this.refreshSingle(index)}><i className="fas fa-search"/></button>
													</div>
													<div className="col-md-6 mt-3">
														<p><strong>Refresh</strong></p>
														<button className="btn btn-success" onClick={() => this.refreshSingle(index)}><i className="fas fa-redo"/></button>
													</div>
													<div className="col-md-6 mt-3">
														<p><strong>Delete</strong></p>
														<button className="btn btn-danger" onClick={() => this.removeGraph(index)}><i className="fas fa-minus"/></button>
													</div>
													<div className="col-md-6 mt-3">
														<p><strong>Save</strong></p>
														<button className="btn btn-primary" onClick={() => this.saveGraph(index)}><i className="fas fa-save"/></button>
													</div>
												</div>
											</div>
										</div>
										
									</div>
								</div>
							) : ""}
					</div>
				: <div className="w-50 mx-auto text-center" style={{paddingTop: "30vh"}}><img src={loading} /></div>}
			</Layout>
		)
	}
}
