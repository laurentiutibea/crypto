const express = require("express");
const router = express.Router();
const axios = require("axios");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) =>{
	//await axios.get("https://api.coincap.io/v2/assets").then(res => result = res.data);
	let result = {};
	await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin").then(res => result = res.data);
	const prices = [];
	prices.push(result.market_data.price_change_percentage_1y_in_currency["eur"]);
	prices.push(result.market_data.price_change_percentage_200d_in_currency["eur"]);
	prices.push(result.market_data.price_change_percentage_60d_in_currency["eur"]);
	prices.push(result.market_data.price_change_percentage_30d_in_currency["eur"]);
	prices.push(result.market_data.price_change_percentage_14d_in_currency["eur"]);
	prices.push(result.market_data.price_change_percentage_7d_in_currency["eur"]);
	prices.push(result.market_data.price_change_percentage_24h_in_currency["eur"]);
	prices.push(result.market_data.price_change_percentage_1h_in_currency["eur"]);
	console.log(prices);
	res.status(200).send(result);
});

module.exports = router;