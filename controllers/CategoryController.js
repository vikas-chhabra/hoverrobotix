const Categories = require('../models/Categories');

exports.getAllCategories = (req, res) => {
    Categories.find()
        .then((categories) => {
            res.status(200).json({
                response: true,
                message: 'Categories fetched successfully!',
                categories
            })
        })
        .catch(err => {
            res.status(200).json({
                response: false,
                message: "Some error occured while fetching the categories from the database",
                error: err
            })
        })
}

exports.insertNewCategory = (req, res) => {
    let categoryName = req.body.categoryName;
    let flag = 0;
    const category = new Categories({
        categoryName: categoryName
    });
    Categories.find()
        .then(allCategories => {
            allCategories.forEach(element => {
                if (element.categoryName === categoryName) {
                    flag = 1;
                    return res.status(401).json({
                        response: false,
                        message: "Category already exists please edit the category"
                    })
                }
            });

            if (flag === 0) {
                category.save()
                    .then(_ => {
                        res.status(201).json({
                            response: true,
                            msg: 'Category Added successfully!'
                        });
                    })
                    .catch(error => {
                        res.status({
                            response: false,
                            msg: 'Error while creating Category',
                            error
                        });
                    });
            }
        })
        .catch(err => {
            res.status(500).json({
                response: false,
                message: "Something went wrong while saving the category to the database",
                error: err
            })
        })
}

exports.editCategory = (req, res) => {
    let categoryId = req.params.categoryId;
    let newCategoryName = req.params.newCategoryName;

    Categories.updateOne({
            _id: categoryId
        }, {
            $set: {
                'categoryName': newCategoryName
            }
        })
        .then((result) => {
            res.status(201).json({
                response: true,
                message: "Category Updated successfuly",
                result
            })
        })
        .catch(err => {
            res.status(500).json({
                response: false,
                message: "Something went wrong while saving the category to the database",
                error: err
            })
        })
}

exports.deleteCategory = (req, res) => {
    let categoryId = req.params.categoryId;

    if (categoryId !== undefined) {
        Categories.deleteOne({
                _id: categoryId
            })
            .then(result => {
                res.status(200).json({
                    response:true,
                    message:"Category deleted successfully!!",
                    result
                })
            })
            .catch(err=>{
                res.status(200).json({
                    response:true,
                    message:"Somthint went wrong while deleting the category from the databse",
                    error:err
                })
            })
    }
}