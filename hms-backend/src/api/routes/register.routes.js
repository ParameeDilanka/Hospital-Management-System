const router = require("express").Router();
let User = require("../model/register.model");

router.route("/add").post((req,res)=> {
    const name = req.body.name;
    const address = req.body.address;
    const gender = req.body.gender;
    const dob = req.body.dob;
    const age = Number(req.body.age);
    const contactNumber = req.body.contactNumber;
    const email = req.body.email;
    const NIC = req.body.NIC;
    const password = req.body.password;

    const newUser  = new User({
        name,
        address, 
        gender, 
        dob, 
        age, 
        contactNumber, 
        email, 
        NIC, 
        password
    })

    newUser.save().then(() => {
        res.json("Patient Succefully Added!")
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/getUser").get((req,res) => {
    User.find().then((user) => {
        res.json(user)
    }).catch((err) => {
        console.log(err)
    })
})

router.route("/delete/:id").delete(async (req, res) =>{
    let UserId = req.params.id;
    await User.findByIdAndDelete(UserId).then(() => {
        res.status(200).send({status: "Patient Deleted!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

module.exports = router;