const mongoose = require('mongoose');

const contactFormSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Full name is required']
    },
    email: {
        type: String,
        required: [true, 'email are required'],
    },
    subject: {
        type: String,
        required: [true, 'Subject is required']
    },
    message: {
        type: String,
        required: [true, 'Message is required']
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Contact', contactFormSchema);