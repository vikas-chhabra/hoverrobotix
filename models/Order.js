const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    order: {
        type: Array,
        required: [true, 'Array for the orders is required']
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'User Id is required'] 
    },
    ammount:{
        type: Number,
        required: [true, 'Amount Id is required']
    },
    orderStatus:{
        type: Boolean,
        default:false,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);