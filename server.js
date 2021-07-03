//create express app -import express
const exp = require( "express" )
const app = exp()
require( "dotenv" ).config()

//connect angular app with express server
const path = require( "path" )
app.use(exp.static(path.join(__dirname,'./dist/ECommerceApp')))

//import APIS
const userApi = require( "./APIS/user-api" )

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