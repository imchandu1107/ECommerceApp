const jwt = require( "jsonwebtoken" )
require( "dotenv" ).config()

const checkToken = ( req, res, next ) => {
   //get token from request object header
   let tokenWithBearer=req.headers.authorization;
    
   let token;

   //if token doesn't exist
   if(tokenWithBearer===undefined){
       return res.send({message:"Please Login to access..."})
   }
    
   //if token is exists then verify
   else{
       token=tokenWithBearer.split(" ")[1]
       jwt.verify(token,process.env.SECRET,(err,decoded)=>{
           if(err){
               return res.send({message:"Session Expired..Login to continue..."})
           }
           else{
               next()
           }

       })
   }

}

module.exports = checkToken