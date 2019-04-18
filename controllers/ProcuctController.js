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

exports.addProduct = (req,res) =>{
    let productName = req.body.productName;
    let spec = req.body.spec;
    let description = req.body.description;
    let images_array = [];
    let categoryId = req.body.categoryId;
    
    req.files.forEach(element => {
        images_array.push(element.path)
    });

    const product = new Products ({
        productName:productName,
        spec:spec,
        description:description,
        images:images_array,
        categoryId:categoryId
    })

    product.save()
    .then(result=>{
        res.status(200).json({
            response:true,
            message:"Product saved successfully!",
            result:result
        })
    })
    .catch(err=>{
        res.status(500).json({
            response:false,
            message:"Something went wrong while saving the product to the database",
            error:err
        })
    })
}