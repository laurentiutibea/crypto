import React, { Component } from 'react';
import Layout from "../components/layout";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import auth from "../services/authService";
import crypto from "../services/cryptoService";

import loading from "../src/91.gif";
import cryptoImg from "../src/crypto-text.png";

const chartOptions = {
	chart: { zoomType: 'x' },
	xAxis: {
		type: 'datetime',
		dateTimeLabelFormats: { day: '%d-%m-%Y - %h:%m' },
        title: { text: 'Date' },
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

export default class SavedData extends Component {
    state = {
        user: {},
        jwt: "",
        data: {
            graphs: []
        },
        loaded: false,
        graphs: [],
        loadArr: [],
        compare: false
    }

    async componentDidMount(){
        const user = await auth.getCurrentUser();
        const jwt = auth.getJwt();
        this.setState({ user, jwt });
        this.refreshData();
    }

    refreshData = async () => {
        let graphs = [];
		const loadArr = [...this.state.loadArr];
        if(this.state.graphs.length === 0) graphs = [];
        else this.setState({graphs:[]});
        const {data} = await crypto.getSavedData(this.state.user._id);
        this.setState({loaded: false});
        for(let i=0; i<data.graphs.length; i++){
            let bkOptions = { ...chartOptions };
            bkOptions.title = { text: `${data.graphs[i].cryptocurrency.name} to ${data.graphs[i].currency.name} exchange rate over time` };
            bkOptions.series = [{
                type: "line",
                name: `${data.graphs[i].cryptocurrency.name} to ${data.graphs[i].currency.name}`,
                data: data.graphs[i].series.data,
                connectNulls: true
            }];
			bkOptions.xAxis.categories = data.graphs[i].categories;
			graphs.push({
				chartOptions: bkOptions,
				cryptocurrency: {
                    name: data.graphs[i].cryptocurrency.name,
                    value: data.graphs[i].cryptocurrency.value
                },
				currency: {
                    name: data.graphs[i].currency.name,
                    value: data.graphs[i].currency.value
                },
				live: false,
                image: data.graphs[i].image,
                graphId: data.graphs[i].graphId,
                date: data.graphs[i].date
            });
			loadArr.push(false);
        }
        this.setState({data, loaded: true, graphs, loadArr});
        console.log(graphs);
    }

    refreshSingle = async (index) => {
        const {data} = await crypto.getSavedData(this.state.user._id);
        const loadArr = [...this.state.loadArr];
        loadArr[index] = true;
        this.setState({loadArr});
        const graphs = [...this.state.graphs];
        let bkOptions = { ...chartOptions };
        bkOptions.title = { text: `${data.graphs[index].cryptocurrency.name} to ${data.graphs[index].currency.name} exchange rate over time` };
        bkOptions.series = [{
            type: "line",
            name: `${data.graphs[index].cryptocurrency.name} to ${data.graphs[index].currency.name}`,
            data: data.graphs[index].series.data,
            connectNulls: true
        }];
        bkOptions.xAxis.categories = data.graphs[index].categories;
        graphs[index] = {
            chartOptions: bkOptions,
            cryptocurrency: {
                name: data.graphs[index].cryptocurrency.name,
                value: data.graphs[index].cryptocurrency.value
            },
            currency: {
                name: data.graphs[index].currency.name,
                value: data.graphs[index].currency.value
            },
            live: false,
            image: data.graphs[index].image,
            graphId: data.graphs[index].graphId,
            date: data.graphs[index].date
        };
        loadArr[index] = false;
        this.setState({data, loaded: true, graphs, loadArr});
        console.log(graphs);
    }

    compare = async (e,index) => {
        if(e.target.checked){
            const worker = new Worker("static/service-worker.js");
            const graphs = [...this.state.graphs];
            console.log(graphs);
            const loadArr = [...this.state.loadArr];
            loadArr[index] = true;
            this.setState({loadArr});
            worker.onmessage = e => {
                graphs[index].chartOptions.series.push({
                    type: "line",
                    name: "NEW:"+this.state.graphs[index].chartOptions.series[0].name,
                    data: e.data.prices,
                    _colorIndex: 1,
                    connectNulls: true,
                    pointStart: 1,
                    pointInterval: 2
                });

                const dates = [];
                for(let i=0; i<e.data.time.length; i++){
                    dates.push(graphs[index].chartOptions.xAxis.categories[i]);
                    dates.push(e.data.time[i]);
                }
                graphs[index].chartOptions.xAxis.categories = [...dates];
                graphs[index].chartOptions.series[0].pointInterval =  2;
                loadArr[index] = false;
                this.setState({graphs, loadArr, compare: true});
                console.log(graphs[index].chartOptions.xAxis.categories);
            }
            worker.postMessage(`${graphs[index].cryptocurrency.value},${graphs[index].currency.value},${this.state.jwt}`);
        }
        else{
            const graphs = [...this.state.graphs];
            const loadArr = [...this.state.loadArr];
            loadArr[index] = true;
            await this.setState({loadArr});
            graphs[index].chartOptions.title = { text: `${graphs[index].cryptocurrency.name} to ${graphs[index].currency.name} exchange rate over time` };
            graphs[index].chartOptions.series = [{
                type: "line",
                name: `${graphs[index].cryptocurrency.name} to ${graphs[index].currency.name}`,
                data: graphs[index].chartOptions.series[0].data,
                connectNulls: true
            }];
            if(graphs[index].chartOptions.xAxis.categories.length > 9) graphs[index].chartOptions.xAxis.categories = graphs[index].chartOptions.xAxis.categories.filter((item, index) => index%2 === 0);
            loadArr[index] = false;
            this.setState({
                graphs: graphs,
                loadArr,
                compare: false
            })
        }
    }

    editGraph = async (index, action) => {
		let graphs = [...this.state.graphs];
        if(action === "remove") graphs = graphs.filter((item, i) => i !== index);
        let bkGraphs = [];
        let bkCategories = [];
        graphs.forEach((element, i) => {
            if(i === index) bkCategories = element.chartOptions.xAxis.categories.filter((item, index) => index%2 !== 0);
            else if(element.chartOptions.xAxis.categories.length > 9) bkCategories = element.chartOptions.xAxis.categories.filter((item, index) => index%2 === 0);
            else bkCategories = element.chartOptions.xAxis.categories;
            bkGraphs.push({
                categories: bkCategories,
                series: action === "save" ? i === index ? element.chartOptions.series[1] : element.chartOptions.series[0] : element.chartOptions.series[0],
                graphId: element.graphId,
                cryptocurrency: {
                    value: element.cryptocurrency.value,
                    name: element.cryptocurrency.name
                },
                currency: {
                    value: element.currency.value,
                    name: element.currency.name
                },
                date: new Date,
                image: element.image
            })
        });
        const graph = {
            userId: this.state.user._id,
            graphs: bkGraphs
        }
        await crypto.replaceGraphs(graph);
        this.setState({ graphs });
    }

    render() {
        if(process.browser && !auth.getCurrentUser()) {
            window.location.replace("/login");
        }
        else return (
            <Layout>
                <div className="w-50 mx-auto text-center pt-5">
					<img src={cryptoImg} />
					<h1 style={{fontFamily: "Courier New"}}><strong>Saved Data</strong></h1>
					<hr/>
                    {this.state.loaded && <div className="col-md-12 mt-3">
                        <p><strong>Refresh</strong></p>
                        <button className="btn btn-success" onClick={this.refreshData}><i className="fas fa-sync"/></button>
                    </div>}
                </div>
                {this.state.loaded ?
                    <div className="text-center">
                        {this.state.graphs.length > 0 ?
                            this.state.graphs.map((item, index) =>
                                <div key={item.graphId} className="pt-3">
                                    <hr/>
                                    <img src={item.image} />
                                    <div className="row mt-4">
                                        <div className="col-md-9 text-center">
                                            {!this.state.loading && !this.state.loadArr[index] ? <HighchartsReact key={item.id} highcharts={Highcharts} options={item.chartOptions} allowChartUpdate = {true}  /> : <div className="mx-auto text-center" style={{paddingTop: "20%"}}><img src={loading} /></div>}
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <div className="pt-2">
                                                    <span><strong>Cryptocurrency</strong></span>
												</div>
                                                <div className="pt-2">
													<input type="text" value={item.cryptocurrency.name} className="form-control text-center shadow" disabled/>
												</div>
                                                <div className="pt-2">
                                                    <span><strong>To currency</strong></span>
												</div>
												<div className="pt-2">
                                                    <input type="text" value={item.currency.name} className="form-control text-center shadow" disabled/>
												</div>
                                                <div className="row">
                                                    <div className="col-md-12 mt-3">
                                                        <p><strong>Compare with current data</strong></p>
                                                        <input type="checkbox" onChange={(e) => this.compare(e, index)} className="form-control" />
                                                    </div>
                                                    <div className="col-md-6 mt-3">
                                                        <p><strong>Delete</strong></p>
                                                        <button className="btn btn-danger" onClick={() => this.editGraph(index,"remove")}><i className="fas fa-minus"/></button>
                                                    </div>
                                                    <div className="col-md-6 mt-3">
                                                        <p><strong>Save</strong></p>
                                                        <button className="btn btn-primary" onClick={() => this.editGraph(index,"save")} disabled={!this.state.compare}><i className="fas fa-save"/></button>
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
