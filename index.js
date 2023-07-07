const express=require('express');
const path=require('path');
const db=require('./startup/db')();
const bcrypt=require('bcrypt');
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = 3000;
require('./startup/routes')(app);


app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running and App is listening on port "+ PORT)
	else
		console.log("Error occurred, serverrr can't start", error);
	}
);


