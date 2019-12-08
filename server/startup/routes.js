const express = require('express');
const users = require("../routes/users");
const auth = require("../routes/auth");
const crypto = require("../routes/crypto");
const error = require("../middleware/error");

module.exports = function(app){
	app.use(express.json());
	app.use("/api/users", users);
	app.use("/api/auth", auth);
	app.use("/api/crypto", crypto);
	app.use(error);
};