import http from "./httpService";
import {apiUrl} from "../config";

const apiEndpoit = apiUrl + "/users";

function userUrl(id){
	return `${apiEndpoit}/${id}`;
}

function adminUrl(id){
	return `${apiEndpoit}/admin/${id}`;
}

export function getUsers(){
	return http.get(apiEndpoit);
}

export function register(user){
	return http.post(apiEndpoit, {
        name: user.name,
		email: user.email,
		password: user.password,
		isAdmin: false
	});
}

export function update(user){
	if(user._id){
		const body = {...user};
		delete body._id;
		delete body.__v;
		return http.put(userUrl(user._id), body);
	}
}

export function updateAdmin(user){
	if(user._id){
		const body = {...user};
		delete body._id;
		delete body.__v;
		delete body.name;
		delete body.email;
		return http.put(adminUrl(user._id), body);
	}
}

export function deleteUser(userId){
	return http.delete(userUrl(userId));
}

export default{
    getUsers,
    register,
    update,
	deleteUser,
	updateAdmin
}