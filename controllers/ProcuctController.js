const Products = require('../models/Products');

exports.getAllProducts = (req,res) =>{
    Products.find()
    .then(products=>{
        res.status(200).json({
            response: true,
            products
        })
    })
    .catch(err=>{
        res.status(500).json({
            response:false,
            message:"Something went wrong while fetching the data from the database",
            error:err
        })
    })
}