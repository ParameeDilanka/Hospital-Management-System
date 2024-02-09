const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");


const Schema = mongoose.Schema;

const staffSchema = new Schema({
    gender: {
        type: String,
        required: [true, "Please Enter Gender"]
    },
    fname: {
        type: String,
        required: [true, "Please Enter First Name"]
    },
    lname: {
        type: String,
        required: [true, "Please Enter Last Name"]
    },
    nic: {
        type: String,
        required: [true, "Please Enter NIC"]
    },
    specialization: {
        type: String,
        required: [true, "Please Enter Specialization"]
    },
    number: {
        type: String,
        required: [true, "Please Enter Number"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Email"]
    },
    password: {
        type: String,
        required: [true, "Please Enter Password"]
    },
    province: {
        type: String,
        required: [true, "Please Enter Province"]
    },
    city: {
        type: String,
        required: [true, "Please Enter City"]
    },
    street: {
        type: String,
        required: [true, "Please Enter Street"]
    },

    pcode: {
        type: String,
        required: [true, "Please Enter Postal Code"]
    },
    img: {
        type: String,
        
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,

    type: String,


})

//this is for register route
staffSchema.pre("save", async function (next) {
    //password encryption goes here
    if (!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt); //await is only can use in async function only

    next();
});

//this is for login route
staffSchema.methods.matchPasswords = async function (password) {
    return await bcrypt.compare(password, this.password); //check the entered password and password which is received from the db
};

//for register json web token (JWT)
staffSchema.methods.getSignedToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

//for reset json web token
staffSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");

    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);
    return resetToken;
};

const staff = mongoose.model("staff", staffSchema);
module.exports = staff;

