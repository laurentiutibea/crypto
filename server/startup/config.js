const config = require("config");

module.exports = function () {
	if(!config.get("jwtPrivateKey")){
		throw new Error("Error: jwtPrivateKey is not defined.");
	}
};