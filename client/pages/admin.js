import React, { Component } from 'react';
import _ from "lodash";

import Layout from "../components/layout";
import auth from "../services/authService";
import crypto from "../services/cryptoService";
import {getUsers, updateAdmin, deleteUser} from "../services/userService";
import {paginate} from "../utils/paginate";
import DataTable from "../components/dataTable";
import Pagination from "../components/pagination";
import loading from "../src/91.gif";
import cryptoImg from "../src/crypto-text.png";

export default class Admin extends Component{
    state = {
        user: {},
        data: [],
		pageSize: 7,
		currentPage: 1,
		searchQuery: "",
		sortColumn: {
			path: "email",
			order: "asc"
		},
		columns: [
            {path: "email", label: "Email"},
            {path: "name", label: "Name"},
			{key: "isAdmin", label:"Admin", content: data => (
					<select name="isAdmin" className="form-control select-w" onChange={(e) => this.handleChangeBool(e,data)}>
						<option value={data.isAdmin} hidden>{data.isAdmin}</option>
						<option value={true}>true</option>
						<option value={false}>false</option>
					</select>
				)},
			{key: "update", content: data => ( <button onClick={() => this.doUpdate(data)} className="btn btn-warning btn-sm">Update</button>)},
			{key: "delete", content: data => ( <button onClick={() => this.handleDelete(data)} className="btn btn-danger btn-sm">Delete</button>)}
		],
        disabled: false,
        loaded: false
    }

    getData = async () => {
        await getUsers().then(res => {
			const data = [...res.data];
			data.map(item => item.isAdmin = item.isAdmin.toString());
			this.setState({data, loaded: true});
		});
    }

    async componentDidMount() {
		const user = auth.getCurrentUser();
        this.setState({user});
        await this.getData();
    }

    handlePageChange = page => {
		this.setState({currentPage:page});
	};

	handleSearch = query => {
		this.setState({searchQuery: query.target.value, currentPage: 1});
	};

	handleSort = sortColumn => {
		this.setState({sortColumn});
    };
    
    handleDelete = async data => {
		const originalData = [...this.state.data];
		const allData = originalData.filter(m => m._id !== data._id);
		this.setState({data:allData});
		try {
			await deleteUser(data._id);
			await this.getData();
		}
		catch(ex){
			if(ex.response && ex.response.status === 404) console.log("This user was already deleted.");

			this.setState({data: originalData});
		}
	};

    handleChangeBool = (e,data) => {
		data[e.target.name] = e.target.value;
		let allData = {...this.state.data};
		for(let i=0; i<allData.length; i++) if(allData[i]._id === data._id) allData[i] = data;
		allData = Object.keys(allData).map(key => allData[key]);
		this.setState({data: allData});
	};
    
    doUpdate = async data => {
		try{
            delete data.__v;
			data.isAdmin = JSON.parse(data.isAdmin);
            await updateAdmin(data);
		}
		catch(ex){
			if(ex.response && ex.response.status === 400){
				console.log("Incorrectly data entered!");
			}
		}
    };
    
    getPageData = () => {
		const { pageSize, currentPage, data: allData, searchQuery, sortColumn } = this.state;

		let filtered = allData;
		if(searchQuery) filtered = allData.filter(m => m.email.toLowerCase().startsWith(searchQuery.toLowerCase()));

		const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

		const data = paginate(sorted, currentPage, pageSize);

		return {totalCount: filtered.length, data: data};
	};

    render(){
        if(process.browser && !auth.getCurrentUser()) {
            window.location.replace("/login");
        }
        else {
            if(process.browser && this.state.user.isAdmin === false) {
                window.location.replace("/index");
            }
            const { pageSize, currentPage, searchQuery, sortColumn } = this.state;
            const {totalCount, data} = this.getPageData();
        
            return (
                <Layout>
                    <div className="w-50 mx-auto text-center pt-5">
                        <img src={cryptoImg} />
                        <h1 style={{fontFamily: "Courier New"}}><strong>Administration panel</strong></h1>
                        <hr/>
				    </div>
                    {this.state.loaded ?
					<div className="text-center pt-2">
						<div className="row mx-auto">
                            <div className="col-md-12 mt-3">
                                <input type="text" onChange={this.handleSearch} placeholder="Search Users..." value={this.state.searchQuery} name="searchQueryCryptocurrencies" className="form-control shadow w-25" style={{display: "inline-block"}}/>
                                <span>   <i className="fas fa-search" style={{display: "inline-block"}}/></span>
                            </div>
                            <div className="col-md-12 mt-5">
                                {!_.isEmpty(this.state.data) ? <div>
                                    <DataTable
                                        data={data}
                                        sortColumn={sortColumn}
                                        onDelete={this.handleDelete}
                                        onSort={this.handleSort}
                                        columns={this.state.columns}
                                    /></div>: <img src={loading} alt="loading"/>}
                                <Pagination
                                    itemsCount={totalCount}
                                    pageSize={pageSize}
                                    currentPage={currentPage}
                                    onPageChange={this.handlePageChange}
                                />
                            </div>
                        </div>
                    </div> : <div className="w-50 mx-auto text-center" style={{paddingTop: "30vh"}}><img src={loading} /></div>}
                </Layout>
            );
        }
    }
}