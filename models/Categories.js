const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
    categoryName: {
        type: String,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Categories', categoriesSchema);