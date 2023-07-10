const express=require('express');
const app=express();
const config=require('config');
require('./startup/db')();
require('./startup/routes')(app);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
// if(!config.get('jwtPrivateKey')){
//     console.error('FATAL ERROR:jwtPrivatekey is not defined..');
//     process.exit(1);
// }
const port=process.env.PORT||3000;
app.listen(port,()=>console.log(`listening on port ${port}`));




