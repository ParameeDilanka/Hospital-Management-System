const router = require("express").Router();
let pharmacist= require("../model/pharmacist");
const multer = require("multer");



const saveImg = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./../hms-frontend/public/images");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }   
})

const saveImgServer = multer({storage: saveImg});


router.post("/addPharmacist", saveImgServer.single("img"),(req,res) =>{

    const gender = req.body.gender;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const nic = req.body.nic;
    const number = req.body.number;
    const email = req.body.email;
    const password = req.body.password;
    const province = req.body.province;
    const city = req.body.city;
    const street = req.body.street;
    const pcode = req.body.pcode;
    const img = req.file.originalname;

    const NewPharmacist = new pharmacist({
        gender,
        fname,
        lname,
        nic,
        number,
        email,
        password,
        province,
        city,
        street,
        pcode,
        img
    })

    NewPharmacist.save().then(()=>{
        res.json("Staff member added successfully")
    }).catch((err)=>{
        console.log(err);
    })


})

router.route("/viewPharmacist").get((req,res)=>{
    
    pharmacist.find().then((pharmacist)=>{

        res.json(pharmacist)

    }).catch((err)=>{

        console.log(err); 

    })
})

router.put("/updatePharmacist/:id", saveImgServer.single("img"),(req,res)=>{

    let pharmacistId = req.params.id;

    const gender = req.body.gender;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const nic = req.body.nic;
    const number = req.body.number;
    const email = req.body.email;
    const password = req.body.password;
    const province = req.body.province;
    const city = req.body.city;
    const street = req.body.street;
    const pcode = req.body.pcode;
    const img = req.file.originalname;

    const updatePharmacist= {
        gender,
        fname,
        lname,
        nic,
        number,
        email,
        password,
        province,
        city,
        street,
        pcode,
        img
    }

    pharmacist.findByIdAndUpdate(pharmacistId, updatePharmacist).then(()=>{
      
        res.status(200).send({status: "staff details updated successfully "})

    }).catch((err) => {

        console.log(err);
        res.status(500).send({status:"Error With Updating Data! ",error:err.message});

    })
})


    
router.route("/deletePharmacist/:id").delete(async(req,res)=>{
    let pharmacistId = req.params.id;

    await pharmacist.findByIdAndDelete(pharmacistId).then((pharmacist)=>{

        res.status(200).send({status:"Staff member removed successfully"});

    }).catch((err) => {
         
        console.log(err.message);
        res.status(500).send({status:"Error In Deleting data!",error: err.message});
    })
})

router.route("/getPharmacist/:id").get(async (req, res) => {
    let pharmacistId = req.params.id;
    await pharmacist.findById(pharmacistId)
    .then((pharmacist) => {
        res.json(pharmacist);
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with fetching staff details",error:err.message});
    })
})



module.exports = router;
