const express = require("express");
const router = express.Router();
const axios = require("axios");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) =>{
	//await axios.get("https://api.coincap.io/v2/assets").then(res => result = res.data);
	let result = {};
	await axios.get(`https://api.coingecko.com/api/v3/coins/${req.body.cryptocurrency}`).then(res => result = res.data);
	const prices = [];
	const time = [];
	const currentPrice = result.market_data.current_price[req.body.currency];
	const currentDate = new Date;
	time.push(currentDate.getDate()+"/"+(currentDate.getMonth()+1)+"/"+currentDate.getFullYear()+" - "+currentDate.getHours()+":"+currentDate.getHours());
	console.log(time);
	prices.push(parseFloat((currentPrice - result.market_data.price_change_percentage_1y_in_currency[req.body.currency] / 100).toFixed(3)));
	prices.push(parseFloat((currentPrice - result.market_data.price_change_percentage_200d_in_currency[req.body.currency] / 100).toFixed(3)));
	prices.push(parseFloat((currentPrice - result.market_data.price_change_percentage_60d_in_currency[req.body.currency] / 100).toFixed(3)));
	prices.push(parseFloat((currentPrice - result.market_data.price_change_percentage_30d_in_currency[req.body.currency] / 100).toFixed(3)));
	prices.push(parseFloat((currentPrice - result.market_data.price_change_percentage_14d_in_currency[req.body.currency] / 100).toFixed(3)));
	prices.push(parseFloat((currentPrice - result.market_data.price_change_percentage_7d_in_currency[req.body.currency] / 100).toFixed(3)));
	prices.push(parseFloat((currentPrice - result.market_data.price_change_percentage_24h_in_currency[req.body.currency] / 100).toFixed(3)));
	prices.push(parseFloat((currentPrice - result.market_data.price_change_percentage_1h_in_currency[req.body.currency] / 100).toFixed(3)));
	prices.push(parseFloat((currentPrice).toFixed(3)));
	res.status(200).send({prices,currentPrice: parseFloat((currentPrice).toFixed(3)),time});
});

module.exports = router;