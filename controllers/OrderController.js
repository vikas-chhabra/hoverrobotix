const Order = require('../models/Order');

exports.postOrder = (req, res) => {
    let order = req.body.order;
    let userId = req.body.userId;
    let amount = req.body.amount;

    const orderToSave = new Order({
        order: order,
        userId: userId,
        amount: amount
    })

    orderToSave.save()
        .then(result => {
            res.status(200).json({
                result,
                response:true,
                message:'Saved successfully!'
            })
        })
        .catch(err=>{
            res.status(500).json({
                error:err,
                message:"Something went wrong while saving the order to the database",
                response:false
            })
        })
}