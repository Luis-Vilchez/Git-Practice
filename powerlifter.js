const mongoose = require ("mongoose");

const PLschema = mongoose.Schema({
    name: {type: String},
    weightclass: {type: Number},
    age: {type: Number},
    ethnicity: {type: String},
});

const Power = mongoose.model("Power",PLschema);
module.exports = Power;