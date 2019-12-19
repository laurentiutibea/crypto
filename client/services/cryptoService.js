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

export function saveGraph(graph){
    return http.post(`${apiEndpoit}/save`,graph);
}

export default{
    getCurrencies,
    getCryptocurrencies,
    saveGraph
}