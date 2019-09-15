const mongoose = require("mongoose");

const sellersSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    displayName: { type: String, required: true },
    rating: { type: String, required: true },
    services: [{
        serviceName: String,
        iconName: String
    }],
    content: { type: String },
    timeSlots: [{
        slots: String
    }]
})

module.exports = mongoose.model("Seller", sellersSchema);