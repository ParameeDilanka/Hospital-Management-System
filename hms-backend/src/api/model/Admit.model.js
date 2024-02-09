const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const patientSchema = new Schema({

    PatientNumber:{
        type: String,
        required : true
    },

    d_admission : {
        type : String,
        required : true
    },
    n_visitDate : {
        type : String,
        required : true
    },
    l_test :{
        type : String,
        required : true
    },
    r_test: {
        type : String,
        required : true
    },
    prescription: {
        type : String,
        required : true
    },
    d_dischage: {
        type :  String,
        required : true
    }
})

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;