import mongoose, { Schema } from "mongoose";

const PharmacyStockSchema = new Schema(
    {
    
        item_code : { type : String, required : false},
        stock_id : { type : String, required : false },
        added_date : { type : String, required : false },
        manufacture_date : { type : String, required : false },
        expiry_date : { type : String, required : false },
        unit_price : { type : Number, required : false },
        added_quantity : { type : Number, required : false },
        sales_quantity : { type : Number, required : false }

    }, 
    {
        timestamps: true
    }
);

const PharmacyStock = mongoose.model("pharmacyStocks", PharmacyStockSchema);

module.exports = PharmacyStock;