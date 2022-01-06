const express = require("express");

const router = express.Router();

const Product = require("../models/products.model");

router.get("/products", async (req, res) => {

    try {
        const products = await Product.find().lean().exec();
        // console.log('productsda:', products[0])
                
        return res.render("products", {products});
    } catch (e) {
        return res.status(500).json({message: e.message, status:"Failed"})       
    }   
    
});

module.exports = router;