const router = require("express").Router();
let receptionist= require("../model/receptionist");
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


router.post("/addRec", saveImgServer.single("img"),(req,res) =>{

    const gender = req.body.gender;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const nic = req.body.nic;
    const qualifications = req.body.qualifications;
    const number = req.body.number;
    const email = req.body.email;
    const password = req.body.password;
    const province = req.body.province;
    const city = req.body.city;
    const street = req.body.street;
    const pcode = req.body.pcode;
    const img = req.file.originalname;

    const NewReceptionist = new receptionist({
        gender,
        fname,
        lname,
        nic,
        qualifications,
        number,
        email,
        password,
        province,
        city,
        street,
        pcode,
        img
    })

    NewReceptionist.save().then(()=>{
        res.json("Staff member added successfully")
    }).catch((err)=>{
        console.log(err);
    })


})

router.route("/viewRec").get((req,res)=>{
    
    receptionist.find().then((receptionist)=>{

        res.json(receptionist)

    }).catch((err)=>{

        console.log(err); 

    })
})

router.put("/updateRec/:id", saveImgServer.single("img"),(req,res)=>{

    let receptionistId = req.params.id;

    const gender = req.body.gender;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const nic = req.body.nic;
    const qualifications = req.body.qualifications;
    const number = req.body.number;
    const email = req.body.email;
    const password = req.body.password;
    const province = req.body.province;
    const city = req.body.city;
    const street = req.body.street;
    const pcode = req.body.pcode;
    const img = req.file.originalname;

    const updateReceptionist= {
        gender,
        fname,
        lname,
        nic,
        qualifications,
        number,
        email,
        password,
        province,
        city,
        street,
        pcode,
        img
    }

    receptionist.findByIdAndUpdate(receptionistId, updateReceptionist).then(()=>{
      
        res.status(200).send({status: "staff details updated successfully "})

    }).catch((err) => {

        console.log(err);
        res.status(500).send({status:"Error With Updating Data! ",error:err.message});

    })
})


    
router.route("/deleteRec/:id").delete(async(req,res)=>{
    let id = req.params.id;

    await receptionist.findByIdAndDelete(id).then((receptionist)=>{

        res.status(200).send({status:"Staff member removed"});

    }).catch((err) => {
         
        console.log(err.message);
        res.status(500).send({status:"Error In removing staff member!",error: err.message});
    })
})

router.route("/getRec/:id").get(async (req, res) => {
    let receptionistId = req.params.id;
    await receptionist.findById(receptionistId)
    .then((receptionist) => {
        res.json(receptionist);
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with fetching staff details",error:err.message});
    })
})


module.exports = router;
