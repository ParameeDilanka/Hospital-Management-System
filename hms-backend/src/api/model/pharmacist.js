const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pharmacistSchema = new Schema({

    gender : {
        type: String,
        required:[true, "Please Enter Gender"] 
    },

    fname : {
        type: String,
        required:[true, "Please Enter First Name"] 
    },
    lname : {
        type: String,
        required:[true, "Please Enter Last Name"] 
    },
    nic : {
        type: String,
         required:[true, "Please Enter NIC"] 
    },
    number : {
        type: String,
        required:[true, "Please Enter Number"] 
    },
    email : {
        type: String,
        required: [true, "Please Enter Email"] 
    },
    password : {
        type: String,
        required:[true, "Please Enter Password"] 
    },
    province : {
        type: String,
        required:[true, "Please Enter Province"] 
    },
    city : {
        type: String,
        required:[true, "Please Enter City"] 
    },
    street : {
        type: String,
        required:[true, "Please Enter Street"] 
    },
    
    pcode : {
        type: String,
        required:[true, "Please Enter Postal Code"] 
    },
    img : {
        type: String,
        required:[true, "Please Upload Image"] 
    }

})

const pharmacist = mongoose.model("pharmacist", pharmacistSchema );

module.exports = pharmacist;