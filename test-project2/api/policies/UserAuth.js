const jwt = require('jsonwebtoken');

module.exports = async(req, res, proceed)=>{
    const userToken = req.headers.token.split(" ")[1];
    if(!userToken) return res.send("Login First");
    else{
        const decoded = jwt.verify(userToken, 'shhhhh', (err, decoded)=>{
            if(err) return res.send("You are not authorised");
            // console.log(decoded);
            req.user = decoded;
            proceed();
        })
    }
}