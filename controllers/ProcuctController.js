const Products = require('../models/Products');

exports.getAllProducts = (req, res) => {
    Products.find()
        .then(products => {
            res.status(200).json({
                response: true,
                products
            })
        })
        .catch(err => {
            res.status(500).json({
                response: false,
                message: "Something went wrong while fetching the data from the database",
                error: err
            })
        })
}

exports.addProduct = (req, res) => {
    let productName = req.body.productName;
    let spec = req.body.spec;
    let description = req.body.description;
    let images_array = [];
    let categoryId = req.body.categoryId;
    let price = req.body.price;

    req.files.forEach(element => {
        images_array.push(element.path)
    });

    const product = new Products({
        productName: productName,
        spec: spec,
        description: description,
        images: images_array,
        categoryId: categoryId,
        price: price
    })

    product.save()
        .then(result => {
            res.status(200).json({
                response: true,
                message: "Product saved successfully!",
                result: result
            })
        })
        .catch(err => {
            res.status(500).json({
                response: false,
                message: "Something went wrong while saving the product to the database",
                error: err
            })
        })
}

exports.deleteProduct = (req, res) => {
    let productId = req.params.productId;

    Products.findOne({
        _id: productId
    }).then(product => {
        if(product){
            Products.deleteOne({_id:productId})
            .then(result=>{
                res.status(202).json({
                    message:"product deleted successfully!",
                    response:true,
                    result
                })
            })
        }
        else{
            res.status(404).json({
                response:false,
                message:"No Product found to delete"
            })
        }
    })
    .catch(err=>{
        const error = new Error(err);
        error.status = 500;
        next(error);
    })
}

exports.getSpecificCategoryProducts = (req,res) =>{
    let categoryId = req.params.categoryId;

    Products.find({categoryId:categoryId})
    .then(Products=>{
        res.status(200).json({
            response:true,
            message: 'Products fetch successfully',
            products:Products
        })
    })
    .catch(err=>{
        res.status(500).json({
            response:false,
            message:"Something went wrong while getting the Products of the specific categories",
            error:err
        })
    })
}

exports.getDetailsOfProduct=(req,res)=>{
    let productID = req.params.productId;

    Products.findById(productID).populate('categoryId')
    .then(details=>{
        res.status(200).json({
            response:true,
            message:"Product Information fetched Successfully!",
            details
        })
    })
    .catch(err=>{
        res.status(500).json({
            response:false,
            message:"Something went wrong while fetching the information from the database",
            error:err
        })
    })
}