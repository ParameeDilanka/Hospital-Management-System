const router = require("express").Router();
let PharmacyItem = require("../model/pharmacy_item.model");


//Add Pharmacy Items
router.route("/add").post((req,res) => {


    //Item ID Generate
    let range = 99 - 11 + 1;
    let num = Math.random() * range;
    let ranNum = Math.floor(num) + 11;
    let itemId = "APTB" + ranNum;


    const item_code = itemId;
    const generic_name = req.body.genericName;
    const brand_name = req.body.brandName;
    const category = req.body.category;
    const dosage = req.body.dosage;
    const imageURL = req.body.imageURL;
    
    const newPharmacyItem = new PharmacyItem({

        item_code,
        generic_name,
        brand_name,
        category,
        dosage,
        imageURL
    });
    
    newPharmacyItem.save().then(() => {
        res.json("added");
    }).catch((err)=>{
        console.log(err);
    })

});

//View All Pharmacy Items
router.route("/").get((req,res) => {

    PharmacyItem.find().then((items) => {
        res.json(items)
    }).catch((err) => {
        console.log(err)
    });

});


//View One Pharmacy Item By itemID
router.route("/get/:id").get(async (req,res) => {
    let itemId = req.params.id;

    const item = await PharmacyItem.findOne({item_code: itemId}).then((item) => {
       
        res.json(item);
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get items"});
    })
})


//Delete One Pharmacy Item By itemID
router.route("/delete/:id").delete(async (req,res) => {
    let itemId = req.params.id;

    await PharmacyItem.findOneAndDelete({item_code: itemId})
    .then(() => {
        res.status(200).send({status: "Item deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete item"});
    })
})


//Update Pharmacy Items
router.route("/update/:id").put(async (req,res) => {

    let itemId = req.params.id;

    const generic_name = req.body.genericName;
    const brand_name = req.body.brandName;
    const category = req.body.category;
    const dosage = req.body.dosage;
   
    const updatePharmacyItem = {

        generic_name,
        brand_name,
        category,
        dosage
    };
    
    const update = await PharmacyItem.findOneAndUpdate({item_code: itemId}, updatePharmacyItem).then(() => {
        res.status(200).send({status: "Pharmacy Item Updated", user: update});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    }) 
    

});



module.exports = router;