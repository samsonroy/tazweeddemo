const Appointment = require("../models/appointments");
const mongoose = require('mongoose');

exports.appointments_get_all = (req, res, next) => {
    Appointment.find()
        // .select('name price _id productImage')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                sellers: docs.map(doc => {
                    return {
                        id: doc._id,
                        sellerID: doc.sellerID,
                        appointmentTime: doc.appointmentTime
                    }
                })
            }
            res.status(200).json(response)
        })
        .catch(err => {
            console.log("ERrror", err);
            res.status(500).json({
                error: err
            })
        })
}





exports.appointments_post_appointment = (req, res, next) => {
    console.log("BODY", req.body)
    const seller = new Appointment({
        _id: new mongoose.Types.ObjectId(),
        sellerID: req.body.sellerID,
        appointmentTime: req.body.appointmentTime,
    })

    seller.save().then((result) => {
        res.status(201).json({
            message: "Article created Successfully",
            sellers: {
                _id: result._id,
                sellerID: result.sellerID,
                appointmentTime: result.appointmentTime
            }
        })
    })
        .catch(err => {
            console.log("ERROR", err);
            res.status(500).json({
                error: err
            })
        });
}