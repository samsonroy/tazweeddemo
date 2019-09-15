const mongoose = require("mongoose");

const articlesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    author: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String },
    publishedAt: {type: String, required: true },
    content: {type: String },
    category: {type: Number, required: true}
})

module.exports = mongoose.model("Article", articlesSchema);