import http from "./httpService";
import {apiUrl} from "../config";

const apiEndpoit = apiUrl + "/crypto";

export function getCurrencies(){
	return http.get(apiEndpoit);
}

export default{
    getCurrencies
}