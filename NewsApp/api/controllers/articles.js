const Article = require("../models/articles");
const mongoose = require('mongoose');

exports.articles_get_all = (req, res, next) => {
    Article.find()
    // .select('name price _id productImage')
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            articles: docs.map(doc => {
                return {
                    id: doc._id,
                    author: doc.author,
                    title: doc.title,
                    description: doc.description,
                    url: doc.url,
                    publishedAt: doc.publishedAt,
                    content: doc.content,
                    category: doc.category
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

exports.articles_post_article = (req, res, next) => {
    const article = new Article({
        _id: new mongoose.Types.ObjectId(),
        author: req.body.author,
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        publishedAt: Date.now(),
        content: req.body.content,
        category: req.body.category,
    })

    article.save().then((result) => {
        res.status(201).json({
            message: "Article created Successfully",
            articles: {
                _id: result._id,
                author: result.author,
                title: result.title,
                description: result.description,
                url: result.url,
                publishedAt:  result.publishedAt,
                content: result.content,
                category: result.category
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