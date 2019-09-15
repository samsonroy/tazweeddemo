const express = require('express');
const router = express.Router();

// const checkAuth = require("../middleware/check-auth");

const articlesControllers = require("../controllers/articles");

router.get('/', articlesControllers.articles_get_all);
router.post("/", articlesControllers.articles_post_article);

module.exports = router;