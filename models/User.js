const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'Username is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    active: {
        type: Boolean,
        default: true
    },
    address:{
        type:String,
        default:null,
    },
    gender:{
        type:Boolean,
        default:true,
        required: [true, 'Gender is required']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);