const express = require("express");
const router = express.Router();
const axios = require("axios");
const auth = require("../middleware/auth");

router.get("/cryptocurrencies", auth, async (req, res) =>{
	let symbols, cryptocurrencies, currencies = {};
	let resultCurrencies = [];
	await axios.get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies').then(res => symbols = res.data)
	await axios.get('https://api.coingecko.com/api/v3/coins/list').then(res => cryptocurrencies = res.data);
	await axios.get('https://openexchangerates.org/api/currencies.json').then(res => currencies = res.data);
	for (let [key, value] of Object.entries(currencies)) {
		if(symbols.includes(key.toLowerCase())){
			resultCurrencies.push({
				id: key,
				name: value,
				symbol: key
			})
		}
	}
	resultCurrencies.concat(cryptocurrencies.filter(item => symbols.includes(item.symbol)));
	cryptocurrencies.map(item => item.symbol = item.symbol.toUpperCase());
	resultCurrencies.map(item => item.symbol = item.symbol.toUpperCase());
	res.status(200).send({cryptocurrencies,currencies: resultCurrencies});
});

router.post("/", auth, async (req, res) =>{
	let result = {};
	await axios.get(`https://api.coingecko.com/api/v3/coins/${req.body.cryptocurrency}`).then(res => result = res.data);
	const prices = [];
	const currentPrice = result.market_data.current_price[req.body.currency];
	const time = [];
	const currentDate = new Date;
	const currentDateFormat = currentDate.getDate()+"/"+(currentDate.getMonth()+1)+"/"+currentDate.getFullYear()+" - "+currentDate.getHours()+":"+currentDate.getMinutes();
	const oneYear = new Date(currentDate.getTime() - 31556952000); // one year
	const twoHundred = new Date(currentDate.getTime() - 17280000000); // 200 days
	const sixty = new Date(currentDate.getTime() - 5184000000); // 60 days
	const thirty = new Date(currentDate.getTime() - 2592000000); // 30 days
	const fourteen = new Date(currentDate.getTime() - 1209600000); // 14 days
	const seven = new Date(currentDate.getTime() - 604800000); // 7 days
	const twentyfourHours = new Date(currentDate.getTime() - 86400000); // 24 hours
	const oneHour = new Date(currentDate.getTime() - 3600000); // 1 hour
	time.push(oneYear.getDate()+"/"+(oneYear.getMonth()+1)+"/"+oneYear.getFullYear()+" - "+oneYear.getHours()+":"+oneYear.getMinutes());
	time.push(twoHundred.getDate()+"/"+(twoHundred.getMonth()+1)+"/"+twoHundred.getFullYear()+" - "+twoHundred.getHours()+":"+twoHundred.getMinutes());
	time.push(sixty.getDate()+"/"+(sixty.getMonth()+1)+"/"+sixty.getFullYear()+" - "+sixty.getHours()+":"+sixty.getMinutes());
	time.push(thirty.getDate()+"/"+(thirty.getMonth()+1)+"/"+thirty.getFullYear()+" - "+thirty.getHours()+":"+thirty.getMinutes());
	time.push(fourteen.getDate()+"/"+(fourteen.getMonth()+1)+"/"+fourteen.getFullYear()+" - "+fourteen.getHours()+":"+fourteen.getMinutes());
	time.push(seven.getDate()+"/"+(seven.getMonth()+1)+"/"+seven.getFullYear()+" - "+seven.getHours()+":"+seven.getMinutes());
	time.push(twentyfourHours.getDate()+"/"+(twentyfourHours.getMonth()+1)+"/"+twentyfourHours.getFullYear()+" - "+twentyfourHours.getHours()+":"+twentyfourHours.getMinutes());
	time.push(oneHour.getDate()+"/"+(oneHour.getMonth()+1)+"/"+oneHour.getFullYear()+" - "+oneHour.getHours()+":"+oneHour.getMinutes());
	time.push(currentDateFormat);
	prices.push(parseFloat((currentPrice - result.market_data.price_change_percentage_1y_in_currency[req.body.currency] / 100).toFixed(3)));
	prices.push(parseFloat((currentPrice - result.market_data.price_change_percentage_200d_in_currency[req.body.currency] / 100).toFixed(3)));
	prices.push(parseFloat((currentPrice - result.market_data.price_change_percentage_60d_in_currency[req.body.currency] / 100).toFixed(3)));
	prices.push(parseFloat((currentPrice - result.market_data.price_change_percentage_30d_in_currency[req.body.currency] / 100).toFixed(3)));
	prices.push(parseFloat((currentPrice - result.market_data.price_change_percentage_14d_in_currency[req.body.currency] / 100).toFixed(3)));
	prices.push(parseFloat((currentPrice - result.market_data.price_change_percentage_7d_in_currency[req.body.currency] / 100).toFixed(3)));
	prices.push(parseFloat((currentPrice - result.market_data.price_change_percentage_24h_in_currency[req.body.currency] / 100).toFixed(3)));
	prices.push(parseFloat((currentPrice - result.market_data.price_change_percentage_1h_in_currency[req.body.currency] / 100).toFixed(3)));
	prices.push(parseFloat((currentPrice).toFixed(3)));
	res.status(200).send({prices,currentPrice: parseFloat((currentPrice).toFixed(3)),time,currentTime:currentDateFormat,image:result.image.small});
});

router.post("/save", auth, async (req, res) =>{
	console.log(req.body);
	res.status(200).send();
});

module.exports = router;
