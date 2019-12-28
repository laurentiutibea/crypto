import http from "./httpService";
import {apiUrl} from "../config";

const apiEndpoit = apiUrl + "/crypto";

export function getCryptocurrencies(){
    return http.get(`${apiEndpoit}/cryptocurrencies`);
}

export function getSavedData(userId){
	return http.post(`${apiEndpoit}/savedData`, {userId});
}

export function getInfo(cryptocurrency, currency){
	return http.post(`${apiEndpoit}/getInfo`, {
        cryptocurrency,
        currency
    });
}

export function saveGraph(graph, userId){
    return http.post(`${apiEndpoit}/save`,{graph, userId});
}

export function replaceGraphs(graphs){
    return http.post(`${apiEndpoit}/replace`,graphs);
}

export function createUserGraphs(userId){
    return http.post(`${apiEndpoit}/create`,{userId});
}

export default{
    getInfo,
    getCryptocurrencies,
    saveGraph,
    createUserGraphs,
    getSavedData,
    replaceGraphs
}