const express = require("express");
const router = express.Router();
const _ = require("lodash");
const bcrypt = require("bcryptjs");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const {User, validate, validateBool} = require("../models/user");
const {Graph} = require("../models/graph");

router.get("/", [auth, admin], async (req, res) =>{
	const user = await User.find().select("-password -__v");
	res.send(user);
});

router.get("/me", auth, async (req, res) =>{
	const user = await User.findById(req.user._id).select("-password");
	res.send(user);
});

router.post("/", async (req, res) => {
	const {error} = validate(req.body);
	if(error) return res.status(400).send(error.details[0].message);

	let user = await User.findOne({ email: req.body.email });
	if (user) return res.status(400).send("The user with this email is already registered.");

	user = new User(_.pick(req.body, ["name", "email", "password", "isAdmin"]));
	const salt = await bcrypt.genSalt(10);
	user.password = await bcrypt.hash(user.password, salt);

	await user.save();

	const token = user.generateAuthToken();
	res.header("x-auth-token", token).send(_.pick(user, ["_id", "name", "email", "isAdmin"]));
});

router.put("/:id", auth, async (req, res) => {
	const {error} = validate(req.body);
	if(error) return res.status(400).send(error.details[0].message);

	let user = new User(_.pick(req.body, ["name", "email", "password", "isAdmin"]));
	const salt = await bcrypt.genSalt(10);
	user.password = await bcrypt.hash(user.password, salt);
	
	user = await User.findByIdAndUpdate(
		req.params.id,
		{
            name: req.body.name,
			email: req.body.email,
			password: user.password,
			isAdmin: req.body.isAdmin
		}
	);

	if (!user) return res.status(404).send("The user with this id was not found.");
	
	const token = user.generateAuthToken();
	res.header("x-auth-token", token).send(_.pick(user, ["_id", "name", "email", "isAdmin"]));
});

router.put("/admin/:id", [auth, admin], async (req, res) => {
	const {error} = validateBool(req.body);
	if(error) return res.status(400).send(error.details[0].message);

	let user = await User.findByIdAndUpdate(
		req.params.id,
		{
			$set: {
				isAdmin: req.body.isAdmin
			}
		}
	);
	if (!user) return res.status(404).send("The user with this id was not found.");

	const token = user.generateAuthToken();
	res.header("x-auth-token", token).send(_.pick(user, ["_id", "email", "isAdmin", "root"]));
});

router.delete("/:id", [auth, admin], async (req, res) => {
	const user = await User.findByIdAndRemove(req.params.id);
	const graph = await Graph.findOneAndRemove({userId:req.params.id});

	if (!user) return res.status(404).send("The user with the given ID was not found.");
	if (!graph) return res.status(404).send("The graph with the given ID was not found.");

	res.send({user,graph});
});

module.exports = router;