const Seller = require("../models/sellers");
const mongoose = require('mongoose');

exports.sellers_get_all = (req, res, next) => {
    Seller.find()
        // .select('name price _id productImage')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                sellers: docs.map(doc => {
                    return {
                        id: doc._id,
                        name: doc.name,
                        displayName: doc.displayName,
                        rating: doc.rating,
                        services: doc.services,
                        content: doc.content,
                        timeSlots: doc.timeSlots
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


exports.sellers_get_seller = (req, res, next) => {
    const id = req.params.sellerId;
    Seller.findById(id)
        // .select('name price _id productImage')
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.status(200).json({
                    seller: doc
                });
            } else {
                res.status(404).json({
                    message: "No valid entry  found for this ID"
                })
            }

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
}


exports.sellers_post_article = (req, res, next) => {
    console.log("BODY", req.body)
    const seller = new Seller({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        displayName: req.body.displayName,
        rating: req.body.rating,
        services: req.body.services,
        content: req.body.content,
        timeSlots: req.body.timeSlots
    })

    seller.save().then((result) => {
        res.status(201).json({
            message: "Article created Successfully",
            sellers: {
                _id: result._id,
                name: result.name,
                displayName: result.displayName,
                rating: result.rating,
                services: result.services,
                content: result.content,
                timeSlots: result.timeSlots
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