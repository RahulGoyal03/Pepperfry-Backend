const mongoose = require("mongoose");


const productSchema = new mongoose.Schema(
    {
        img: {type: String, required: true},
        name: {type: String, required: true},
        brand: {type: String, required: true},
        price: {type: Number, required: true, unique: true},
        cutPrice: {type: Number, required: true},
    }
);

const product = mongoose.model("product", productSchema);

module.exports = product;