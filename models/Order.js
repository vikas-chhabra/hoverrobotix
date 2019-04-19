const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    order: {
        type: Array,
        required: [true, 'Array for the orders is required']
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: [ture, 'User Id is required'] 
    },
    ammount:{
        type: Number,
        required: [ture, 'Amount Id is required']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);