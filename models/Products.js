const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    productName: {
        type: String,
        required: [true, 'Product name is required']
    },
    spec: {
        type: String,
        required: [true, 'Spec are required'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    filters: {
        type: Array,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Products', productsSchema);