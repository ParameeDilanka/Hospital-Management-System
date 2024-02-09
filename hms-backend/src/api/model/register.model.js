const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    gender :{
        type : String,
        required : true
    },
    dob: {
        type : String,
        required : true
    },
    age: {
        type : Number,
        required : true
    },
    contactNumber: {
        type :  String,
        required : true
    },
    email: {
        type :  String,
        required : true
    },
    NIC:{
        type: String,
        required : true
    },

    password:{
        type: String,
        required : true
    },
})

const User = mongoose.model("User", userSchema);

module.exports = User;