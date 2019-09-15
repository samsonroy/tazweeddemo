const mongoose = require("mongoose");

const appointmentsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    sellerID: { type: String, required: true },
    appointmentTime: { type: String, required: true }
})

module.exports = mongoose.model("Appointment", appointmentsSchema);