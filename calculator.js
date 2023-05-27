const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
	res.sendFile(`${__dirname}/index.html`);
});

app.post('/', function(req, res) {
	let num1 = parseInt(req.body.num1);
	let num2 = parseInt(req.body.num2);

	let result = num1 + num2;

	res.send(`<h1 style="text-align:center;">The Calculation is:${result}</h1>`);
});

app.get('/bmicalculator', function(req, res) {
	res.sendFile(`${__dirname}/bmiCalculator.html`);
});
app.post('/bmicalculator', function(req, res) {
	let weight = parseFloat(req.body.weight);
	let height = parseFloat(req.body.height);

	let result = weight / (height * height);

	res.send(`<h1 style="text-align:center;">Your Bmi is:${result}</h1>`);
});

app.listen('3000', function() {
	console.log('Port 3000 is on!');
});
