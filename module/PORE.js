const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const principles_of_reservoir_engineering2 = new Schema({
    Img:String,
    Name:String,
    Price:Number,
    Priced:Number,
    Type:Number,
});

// {timestamps: true}

const Principles_of_reservoir_engineering2 = mongoose.model("Principles_of_reservoir_engineering2", principles_of_reservoir_engineering2)
module.exports = Principles_of_reservoir_engineering2;
