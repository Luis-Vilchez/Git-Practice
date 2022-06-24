const mongoose = require("mongoose");
const powerLifterDB = mongoose.connection;

function connect(user,password,host,port,powerLifterDB){
    const connectionString = ('mongodb+srv://powerlifter:tuco10@cluster0.rrj9vdy.mongodb.net/?retryWrites=true&w=majority');
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

function setUpConnectionHandlers(callback){
    powerLifterDB.once("connecting", () => {
        console.log("connecting to mongoDB");
    });

    powerLifterDB.once("connected", () => {
        console.log("connected to mongoDB");
    });

    powerLifterDB.once("open", () => {
        console.log("open connection to mongoDB");
    });

    powerLifterDB.once("error", () => {
        console.log("error connecting to mongoDB");
    });
}

module.exports = {
    connect: connect,
    setUpConnectionHandlers: setUpConnectionHandlers,
};