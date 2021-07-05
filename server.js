//create express app -import express
const exp = require( "express" )
const app = exp()
require( "dotenv" ).config()

//connect angular app with express server
const path = require( "path" )
app.use(exp.static(path.join(__dirname,'./dist/ECommerceApp')))

//import APIS
const userApi = require( "./APIS/user-api" )


//importing mongo client
const mc = require( "mongodb" ).MongoClient

//connection string
const databaseUrl = process.env.DATABASE_URL

//connecting to database
mc.connect( databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true }, ( err, client ) => {
    if ( err ) {
        console.log( "Error in connecting to database", err )
    }
    else {
        //get database onject
        let databaseObj = client.db( "demodb" )

        //creating user collection object
        let userCollectionObj = databaseObj.collection( "usercollection" )

        app.set("userCollectionObj",userCollectionObj)

        console.log( "Connected to Database" )
        
    }
} )


//executing specific API based on url
app.use( "/user", userApi )

//invalid url
app.use( ( req, res, next ) => {
    res.send( { message: `path ${req.url} is invalid` } )
})

//error handling middlewares
app.use( ( err, req, res, next ) => {
    res.send( { message: `Error is ${err.message}` } )
} )

//assigning port
const port = process.env.PORT
app.listen( port, () => console.log( `Server listening on port ${port}` ) )