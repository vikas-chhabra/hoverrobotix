const express = require('express');
const app = express.Router();
const product = require('../controllers/ProcuctController');
const multer = require('multer');
const uniqid = require('uniqid');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, uniqid()+file.originalname);
    }
});

const file_filter = (req,file,cb)=>{    //photo type filter
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null,true);
    }
    else{
        cb(null,false);
    }
}

const upload = multer({storage,file_filter:file_filter});


app.get('/',product.getAllProducts);
app.post('/addProduct',upload.array('productImages'),product.addProduct);

module.exports = app;