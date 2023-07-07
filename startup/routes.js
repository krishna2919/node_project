const registration=require('../route/registration');


module.exports= function(app){

    app.use('/api/registration',registration);

}