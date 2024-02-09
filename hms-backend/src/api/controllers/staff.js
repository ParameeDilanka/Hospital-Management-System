const Staff = require("../model/staff")
const sendEmail = require("../../utils/sendEmail");
const crypto = require("crypto");


exports.login = async (req, res) => {
  //controller for login
  const { email, password } = req.body;

  if (!email || !password) {
    //backend validation
    return res
      .status(400)
      .json({ success: false, error: "Please enter email and password" });
  } //400 Bad Request

  try {
    const staff = await Staff.findOne({ email }).select("+password"); //match two passwords

    if (!staff) {
      //true
      return res.status(401).json({
        success: false,
        available: "User does not exists. Please create an account !",
      });
    }

    const isMatch = await staff.matchPasswords(password); //matching the passwords from the received from request and from the db

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, error: "Invalid Credentials" });
    }

    sendToken(staff, 200, res);
  } catch (error) {
    res.status(500).json({
      // 500 internal server error
      success: false,
      error: error.message,
    });
  }
};

exports.forgotpassword = async (req, res) => {
  //controller for forgot password
  const { email } = req.body;

  try {
    const staff = await Staff.findOne({ email }); //check for email availability for sending emails

    if (!staff) {
      return res
        .status(404)
        .json({ success: false, error: "Email could not be sent" });
    }

    const resetToken = staff.getResetPasswordToken(); // get the password reset token

    await staff.save();

    const resetURL = `https://sri-booking-proj.herokuapp.com/passwordreset/${resetToken}`; //setting a URL to send to the user for emails

    const message = `
        <h1>You have requested a password reset</h1>
        <p>Please go to this URL to reset password</p>
        <a href=${resetURL} clicktracking=off>${resetURL}</a>
         `;
    try {
      await sendEmail({
        //send email
        to: staff.email,
        subject: "Password Reset Request",
        text: message,
      });

      res.status(200).json({ success: true, verify: "Email Sent" });
    } catch (error) {
      staff.resetPasswordToken = undefined;
      staff.resetPasswordExpire = undefined;

      await staff.save();

      return res
        .status(500)
        .json({ success: false, error: "Email could not be sent" });
    }
  } catch (error) {
    next(error);
  }
};

exports.resetpassword = async (req, res) => {
  //controller for reset password
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex"); //create a hash code using crypto

  try {
    const staff = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() }, //find and update the relavant database field
    });

    if (!staff) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid Reset Token" });
    }

    staff.password = req.body.password;
    staff.resetPasswordToken = undefined;
    staff.resetPasswordExpire = undefined;

    await staff.save();

    res.status(200).json({ success: true, verify: "Password reset success" });
  } catch (error) {
    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ success: false, error: message });
    }
  }
};

//when we use asynchronous function we need try catch block
exports.registerStaff = async (req, res) => {
  //controller for register
  const {gender, fname, lname, nic, specialization, number, email, password,province,city,street,pcode,type } = req.body; //destructur e method

  try {
    const staff = await Staff.create({
      gender,
      fname,
      lname,
      nic,
      specialization,
      number,
      email,
      password,
      province,
      city,
      street,
      pcode,
      type //this.password filed of staff.js in models
    });
    sendToken(staff, 200, res);
  } catch (error) {
    if (error.code === 11000) {
      const message = "Already have an account using this email ";
      return res.status(400).json({ success: false, error: message });
    }

    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ success: false, error: message });
    }
  }
};

const sendToken = (staff, statusCode, res) => {
  //JWT get
  const token = staff.getSignedToken();
  const gender = staff.gender;
  const fname = staff.fname;
  const lname = staff.lname;
  const nic= staff.nic;
  const specialization = staff.specialization;
  const number= staff.number;
  const email = staff.email;
  const password = staff.password;
  const province= staff.province;
  const city = staff.city;
  const street = staff.street;
  const pcode = staff.pcode;
  const type = staff.type;
  res.status(200).json({
    success: true,
    token,
    gender,
    fname,
    lname,
    nic,
    specialization,
    number,
    email,
    password,
    province,
    city,
    street,
    pcode,
    type 
  });
};



