import http from "./httpService";
import {apiUrl} from "../config";
import jwtDecode from "jwt-decode";

const apiEndpoit = apiUrl + "/auth";
const tokenKey = "token";

export async function login(email, password){
	const {data: jwt} = await http.post(apiEndpoit, {email, password});
	localStorage.setItem(tokenKey, jwt);
}

export async function confirmLogin(email, password){
	return await http.post(apiEndpoit, {email, password});
}

export function loginWithJwt(jwt){
	localStorage.setItem(tokenKey, jwt);
}

export async function logout(){
	localStorage.removeItem(tokenKey);
}

export function getCurrentUser(){
	try{
		const jwt = localStorage.getItem("token");
		http.setJwt(getJwt());
		return jwtDecode(jwt);
	}
	catch(ex){
		return null;
	}
}

export function getJwt(){
	const jwt = localStorage.getItem(tokenKey);
	return jwt;
}

export default{
	login,
	confirmLogin,
	loginWithJwt,
	logout,
	getCurrentUser,
	getJwt
}