const router = require("express").Router();
let PharmacyStock= require("../model/pharmacy_stock.model");


//Add Pharmacy Stock
router.route("/add").post((req,res) => {


    //Stock ID Generate
    let range = 99 - 11 + 1;
    let num = Math.random() * range;
    let ranNum = Math.floor(num) + 11;
    let itemId = req.body.itemCode + ranNum;

    //Added date
    let date = new Date();
    let dd = date.getDate()+1;
    let mm = date.getMonth()+1;
    let yyyy = date.getFullYear();
    let addedDate = yyyy+"-"+mm+"-"+dd;

    const item_code = req.body.itemCode;
    const stock_id = itemId;
    const manufacture_date = req.body.manufactureDate;
    const expiry_date = req.body.expiryDate;
    const unit_price = req.body.unitPrice;
    const added_quantity = req.body.addedQuantity;
    const sales_quantity = "0";
    const added_date = addedDate;
    
    console.log(req.body.manufactureDate);
    console.log(req.body.expiryDate);
            
    

    const newPharmacyStock = new PharmacyStock({

        item_code,
        stock_id,
        added_date,
        manufacture_date,
        expiry_date,
        unit_price,
        added_quantity,
        sales_quantity
    });
    
    newPharmacyStock.save().then(() => {
        res.json("added");
    }).catch((err)=>{
        console.log(err);
    })

});


//View Pharmacy Stock List By stockID
router.route("/get/all/:id").get(async (req,res) => {
    let itemId = req.params.id;

    const stock = await PharmacyStock.find({item_code: itemId}).then((item) => {
       
        res.json(item);
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get items"});
    })
})


//View One Pharmacy stock By stockID
router.route("/get/:id").get(async (req,res) => {
    let stockId = req.params.id;

    const stock = await PharmacyStock.findOne({stock_id: stockId}).then((stock) => {
       
        res.json(stock);
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get stock"});
    })
})


//Delete One Pharmacy Stock By stockID
router.route("/delete/:id").delete(async (req,res) => {
    let stockId = req.params.id;

    await PharmacyStock.findOneAndDelete({stock_id: stockId})
    .then(() => {
        res.status(200).send({status: "Stock deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete stock"});
    })
})


//Update Pharmacy Stock
router.route("/update/:id").put(async (req,res) => {

    let stockId = req.params.id;

    const manufacture_date = req.body.manufactureDate;
    const expiry_date = req.body.expiryDate;
    const unit_price = req.body.unitPrice;
    const added_quantity = req.body.addedQuantity;
   

    const updatePharmacyStock = {

        manufacture_date,
        expiry_date,
        unit_price,
        added_quantity
    };
    
    const update = await PharmacyStock.findOneAndUpdate({stock_id: stockId}, updatePharmacyStock).then(() => {
        res.status(200).send({status: "Pharmacy stock Updated", user: update});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    }) 
    

});


module.exports = router;