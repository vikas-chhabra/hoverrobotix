const contactForm = require('../models/contactForm');

exports.sendQuery = (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let subject = req.body.subject;
    let message = req.body.message;

    const contact = new contactForm({
        name: name,
        email: email,
        subject: subject,
        message: message
    })

    contact.save()
        .then(result => {
            res.status(200).json({
                response: true,
                message: 'Response saved Successfully!',
                result
            })
        })
        .catch((err) => {
            res.status(500).json({
                response: false,
                message: 'Something went wrong while saving the data to the database',
                error: err
            })
        })
}

exports.getAllContactQuerys = (req, res) => {
    contactForm.find()
        .then(querys => {
            res.status(200).json({
                querys,
                response: true,
                message:'querys fetched successfully' 
            })
        })
        .catch(err=>{
            res.status(500).json({
                response:false,
                message:'Something went wrong while getting all the querys from the database',
                error:err
            })
        })
}