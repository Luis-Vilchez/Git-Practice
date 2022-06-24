const express = require ("express");
const mongo = require("./mongo");
const app = express();
//use express
app.use(express.json());

const mongodb = require("./mongo");
mongodb.setUpConnectionHandlers(() => {
    console.log("hi");
});

mongodb.connect()

// add in env vars
const dotenv = require("dotenv");
const {mongo} = require("mongoose");


//set up the port number
const port = flags.get("port") || process.env.PORT || 3000;

