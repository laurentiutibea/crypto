const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
		required: true,
		minlength: 3,
		maxlength: 255,
    },
	email: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 255,
		unique: true
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 1024
	},
	isAdmin: {
		type: Boolean,
		default: false
	}
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    {
        _id: this._id,
        name: this.name,
		email: this.email,
		isAdmin: this.isAdmin
    },
    config.get("jwtPrivateKey")
  );
  return token;
};

const User = mongoose.model("User", userSchema);

function validateUser(user){
	const schema = {
        name: Joi.string().min(3).max(255).required(),
		email: Joi.string().min(5).max(255).required().email(),
		password: Joi.string().min(5).max(1024).required(),
		isAdmin: Joi.boolean()
	};

	return Joi.validate(user, schema);
}


function validateBool(user){
	const schema = {
		isAdmin: Joi.boolean()
	};

	return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
exports.validateBool = validateBool;