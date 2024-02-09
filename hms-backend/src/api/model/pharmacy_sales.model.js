import mongoose, { Schema } from "mongoose";

const PharmacySaleSchema = new Schema(
    {
    
        sold_date : { type : String, required : true },
        sold_month : { type : String, required : true },
        item_code : { type : String, required : true },
        generic_name : { type : String, required : true },
        brand_name : { type : String, required : true },
        dosage : { type : String, required : true },
        imageURL : { type : String, required : false },
        quantity : { type : Number, required : true },
        total_amount : { type : Number, required : false }

    }, 
    {
        timestamps: true
    }
);

const PharmacySale = mongoose.model("pharmacySales", PharmacySaleSchema);

module.exports = PharmacySale;
