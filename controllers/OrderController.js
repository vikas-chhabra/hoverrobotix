const Order = require('../models/Order');

exports.postOrder = (req, res) => {
    let order = req.body.order;
    let userId = req.body.userId;
    let amount = req.body.amount;

    const orderToSave = new Order({
        order: order,
        userId: userId,
        amount: amount,
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

exports.orderForUser = (req,res) =>{
    let userId = req.params.userId;

    Order.findById(userId)
    .then((result)=>{
        res.status(200).json({
            response:true,
            message:'Successfully fetched the orders',
            result
        })
    })
    .catch((err)=>{
        res.status(500).json({
            response:false,
            message:"Something went wrong while fetching the orders from the database",
            error:err
        })
    })
}

exports.toggleOrderStatus = (req,res) =>{
    let orderId = req.params.orderId;

    Order.findByIdAndUpdate(orderId, {
        orderStatus: !orderStatus
    })
    .then(_ => {
        res.status(200).json({
            response: true,
            msg: 'Order Toggled'
        });
    }).catch(_ => {
        res.status(401).json({
            response: false,
            msg: 'Order not Found'
        })
    })

}