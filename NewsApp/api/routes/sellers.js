const express = require('express');
const router = express.Router();

// const checkAuth = require("../middleware/check-auth");

const sellersControllers = require("../controllers/seller");

router.get('/', sellersControllers.sellers_get_all);
router.post("/", sellersControllers.sellers_post_article);
router.get("/:sellerId", sellersControllers.sellers_get_seller);

module.exports = router;