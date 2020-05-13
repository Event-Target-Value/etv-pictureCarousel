// import express
const express = require("express");
// import body parser
const bodyParser = require("body-parser");  
// import path
const path = require("path");
// import cors
const cors = require('cors');

//--------------------------------------------------------------------------

// create app 
let app = express();

app.use(cors());
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, "..", "client", "src", "style.module.css")));

app.use(express.static(path.join(__dirname, "..", "client", "dist")));

// require routes
const routes = require(path.join(__dirname, "routes.js"))

app.use("/carousel", routes);

//--------------------------------------------------------------------------


// choose a port
const port = 3000;
// listen to the app
app.listen(port, ()=> {console.log("Ahoy! I'm listening! at port : " + port)});