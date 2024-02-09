const router = require("express").Router();
let staff = require("../model/staff");
const multer = require("multer");
// const bcrypt = require("bcrypt");

const saveImg = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./../hms-frontend/public/images");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const saveImgServer = multer({ storage: saveImg });


router.post("/addStaff", saveImgServer.single("img"), (req, res) => {


    const gender = req.body.gender;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const nic = req.body.nic;
    const specialization = req.body.specialization;
    const number = req.body.number;
    const email = req.body.email;
    const password = req.body.password;
    const province = req.body.province;
    const city = req.body.city;
    const street = req.body.street;
    const pcode = req.body.pcode;
    const img = req.file.originalname;

    const NewStaff = new staff({

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
        img
    })

    NewStaff.save().then(() => {
        res.json("Staff member added successfully")
    }).catch((err) => {
        console.log(err);
    })


})

router.route("/").get((req, res) => {

    staff.find().then((staff) => {

        res.json(staff)

    }).catch((err) => {

        console.log(err);

    })
})

router.put("/update/:id", saveImgServer.single("img"), (req, res) => {

    let staffId = req.params.id;

    const gender = req.body.gender;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const nic = req.body.nic;
    const specialization = req.body.specialization;
    const number = req.body.number;
    const email = req.body.email;
    const password = req.body.password;
    const province = req.body.province;
    const city = req.body.city;
    const street = req.body.street;
    const pcode = req.body.pcode;
    const img = req.file.originalname;

    const updateStaff = {

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
        img
    }

    staff.findByIdAndUpdate(staffId, updateStaff).then(() => {

        res.status(200).send({ status: "staff details updated successfully " })

    }).catch((err) => {

        console.log(err);
        res.status(500).send({ status: "Error With Updating Data! ", error: err.message });

    })
})



router.route("/delete/:id").delete(async (req, res) => {
    let id = req.params.id;

    await staff.findByIdAndDelete(id).then((staff) => {

        res.status(200).send({ status: "Staff member removed" });

    }).catch((err) => {

        console.log(err.message);
        res.status(500).send({ status: "Error In removing staff member!", error: err.message });
    })
})

router.route("/get/:id").get(async (req, res) => {
    let id = req.params.id;
    await staff.findById(id)
        .then((staff) => {
            res.json(staff);
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with fetching staff details", error: err.message });
        })
})


const {
    login,
    forgotpassword,
    resetpassword,
    registerStaff,
} = require("../controllers/staff");



router.route("/login").post(login);

router.route("/forgotpassword").post(forgotpassword);

router.route("/passwordreset/:resetToken").put(resetpassword);

router.route("/registerStaff").post(registerStaff);





module.exports = router;