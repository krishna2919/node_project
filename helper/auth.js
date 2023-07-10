const config=require('config');
const jwt=require('jsonwebtoken');
const genrateToken=(req,res,next)=>{
    const token=jwt.sign({email:req.body.email},config.get('jwtPrivateKey'));
    console.log(token,'token');
    res.middlewareData=token;
    next();
}

const verifyToken=(req,res,next)=>{
    const token_value=req.header('x-token');
    if(token_value==undefined)
    {
        res.send('access denied...');
    }
    try
    {
        const verify=jwt.verify(token_value,config.get('jwtPrivateKey'));
        console.log(verify);
        req.user=verify;
        next();
    }
    catch(ex)
    {
        res.status(400).send('Invalid token..');
    }

}
exports.genrateToken=genrateToken;
exports.verifyToken=verifyToken;


