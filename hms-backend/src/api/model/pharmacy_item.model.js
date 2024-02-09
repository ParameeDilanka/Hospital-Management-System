import mongoose, { Schema } from "mongoose";

const PharmacyItemSchema = new Schema(
    {
    
        item_code : { type : String, required : true },
        generic_name : { type : String, required : true },
        brand_name : { type : String, required : true },
        category : { type : String, required : true },
        dosage : { type : String, required : true },
        imageURL : { type : String, required : false }

    }, 
    {
        timestamps: true
    }
);

const PharmacyItem = mongoose.model("pharmacyItems", PharmacyItemSchema);

module.exports = PharmacyItem;