const express = require("express");
const router = express.Router();
const axios = require("axios");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) =>{
	await axios.get("https://api.coincap.io/v2/assets").then(res => result = res.data);
	res.status(200).send(result);
});

module.exports = router;