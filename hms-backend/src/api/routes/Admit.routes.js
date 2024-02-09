const router = require("express").Router();
let Patient = require("../model/Admit.model");

router.route("/add").post((req,res)=> {

    const PatientNumber = req.body.PatientNumber;
    const d_admission = req.body.d_admission;
    const n_visitDate = req.body.n_visitDate;
    const l_test = req.body.l_test;
    const r_test = req.body.r_test;
    const prescription = req.body.prescription;
    const d_dischage = req.body.d_dischage;

    const newPatient  = new Patient({
        PatientNumber,
        d_admission,
        n_visitDate, 
        l_test, 
        r_test, 
        prescription, 
        d_dischage
    })

    newPatient.save().then(() => {
        res.json("Patient Admit Details Succefully Added!")
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/getPatient").get((req,res) => {
    Patient.find().then((patient) => {
        res.json(patient)
    }).catch((err) => {
        console.log(err)
    })
})

router.route("/get/:id").get(async (req, res) => {
    let patientId = req.params.id;
    await Patient.findById(patientId)
    .then((patient) => {
        res.json(patient);
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with update Parient",error:err.message});
    })
})

router.put("/update/:id",(req,res)=>{
    let patientId = req.params.id;
    
    const PatientNumber = req.body.PatientNumber;
    const d_admission = req.body.d_admission;
    const n_visitDate = req.body.n_visitDate;
    const l_test = req.body.l_test;
    const r_test = req.body.r_test;
    const prescription = req.body.prescription;
    const d_dischage = req.body.d_dischage; 

    const UpdatePatientAdmitDetails= {
        PatientNumber,
        d_admission,
        n_visitDate, 
        l_test, 
        r_test, 
        prescription, 
        d_dischage
    }

    Patient.findByIdAndUpdate(patientId, UpdatePatientAdmitDetails).then(()=>{
        res.status(200).send({status: "Patient Details updated successfully "})
        
    }).catch((err) => {

        console.log(err);
        res.status(500).send({status:"Error With Updating Data! ",error:err.message});

    })
})



router.route("/delete/:id").delete(async (req, res) =>{
    let patientId = req.params.id;
    await Patient.findByIdAndDelete(patientId).then(() => {
        res.status(200).send({status: "Patient Admit Details SuccefullyDeleted!"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete Parient", error: err.message});
    })
})

module.exports = router;