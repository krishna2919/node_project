const config=require('config');
const jwt=require('jsonwebtoken');
const genrateToken=(req,res,next)=>{
    const token=jwt.sign({email:req.body.email},config.get('jwtPrivateKey'));
    console.log(token,'token');
    res.middlewareData=token;
    next();
}

const verifyToken=(req,res,next)=>{
    const tokenvalue=req.header('x-token');
    if(tokenvalue==undefined)
    {
        res.send('token access is not allowed...');
    }
    try
    {
        const verifytoken=jwt.verify(token_value,config.get('jwtPrivateKey'));
        console.log(verifytoken);
        req.user=verifytoken;
        next();
    }
    catch(ex)
    {
        res.status(400).send('Invalid token..');
    }

}
exports.genrateToken=genrateToken;
exports.verifyToken=verifyToken;


