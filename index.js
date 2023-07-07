const express=require('express');
const path=require('path');
const db=require('./db/db');
const user=require('./model/user');
const router=require('./route/route');
const app = express();
const PORT = 3000;

app.use('/api',router);

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running and App is listening on port "+ PORT)
	else
		console.log("Error occurred, serverrr can't start", error);
	}
);


