const router = require("express").Router();
let PharmacySale = require("../model/pharmacy_sales.model");


//Add Pharmacy Sales
router.route("/add").post((req,res) => {


     //Added date
    let date = new Date();
    let dd = date.getDate()+1;
    let mm = date.getMonth()+1;
    let yyyy = date.getFullYear();
    if(mm<10) 
    {
        mm='0'+mm;
    } 

    if(dd<10) 
    {
        dd='0'+dd;
    } 
    let soldDate = yyyy+"-"+mm+"-"+dd;
    let soldMonth = yyyy+"-"+mm;
     

    const sold_date = soldDate;
    const sold_month = soldMonth;
    const item_code = req.body.item.item_code;
    const generic_name = req.body.item.generic_name;
    const brand_name = req.body.item.brand_name;
    const dosage = req.body.item.dosage;
    const imageURL = req.body.item.imageURL;
    const quantity = req.body.quantity;
    const total_amount = req.body.totAmount;
    
    const newPharmacySale = new PharmacySale({

        sold_date,
        sold_month,
        item_code,
        generic_name,
        brand_name,
        dosage,
        imageURL,
        quantity,
        total_amount
    });
    
    newPharmacySale.save().then(() => {
        res.json("added");
    }).catch((err)=>{
        console.log(err);
    })

});

//
router.route("/group/:month").get(async (req,res) => {
    let month = req.params.month;
   

    const item = await PharmacySale.aggregate(
        [   
            {$match: {sold_month: {$in: [month]}}},
            {$group: {
                        _id: {brand_name: "$brand_name", item_code: "$item_code", generic_name: "$generic_name", dosage: "$dosage",   imageURL: "$imageURL"}, 
                        total: {$sum: "$total_amount"}, 
                        quantity: {$sum: "$quantity"}
                    }
            },
            {$project: {_id: 0, item_code: "$_id.item_code", brand_name: "$_id.brand_name", generic_name: "$_id.generic_name", imageURL: "$_id.imageURL", dosage: "$_id.dosage", total: 1, quantity: 1}},
            {$sort: {total: -1}},
        ]
        ).then((item) => {
       
        res.json(item);
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get items"});
    })
});

//
router.route("/total/:month").get(async (req,res) => {
    let month = req.params.month;
   

    const item = await PharmacySale.aggregate(
        [   
            {$match: {sold_month: {$in: [month]}}},
            {$group: {
                        _id: {sold_month: "$sold_month"}, 
                        total: {$sum: "$total_amount"}, 
                        quantity: {$sum: "$quantity"}
                    }
            },
            {$project: {_id: 0, sold_month: "$_id.sold_month", total: 1, quantity: 1}}
        ]
        ).then((item) => {
       
        res.json(item);
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get items"});
    })
})



module.exports = router;