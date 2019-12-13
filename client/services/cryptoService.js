import http from "./httpService";
import {apiUrl} from "../config";

const apiEndpoit = apiUrl + "/crypto";

export function getCurrencies(cryptocurrency, currency){
	return http.post(apiEndpoit, {
        cryptocurrency,
        currency
    });
}

export default{
    getCurrencies
}