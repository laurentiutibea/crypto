import http from "./httpService";
import {apiUrl} from "../config";

const apiEndpoit = apiUrl + "/crypto";

export function getCryptocurrencies(){
    return http.get(`${apiEndpoit}/cryptocurrencies`);
}

export function getCurrencies(cryptocurrency, currency){
	return http.post(apiEndpoit, {
        cryptocurrency,
        currency
    });
}

export function saveGraph(graph, userId){
    return http.post(`${apiEndpoit}/save`,{graph, userId});
}

export function createUserGraphs(userId){
    return http.post(`${apiEndpoit}/create`,{userId});
}

export default{
    getCurrencies,
    getCryptocurrencies,
    saveGraph,
    createUserGraphs
}