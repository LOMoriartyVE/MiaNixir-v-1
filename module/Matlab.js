const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const matlab = new Schema({
    Img:String,
    Name:String,
    Price:Number,
    Priced:Number,
    Type:Number,
});

// {timestamps: true}

const Matlab = mongoose.model("Matlab", matlab)


module.exports = Matlab;
