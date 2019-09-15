const express = require('express');
const router = express.Router();

// const checkAuth = require("../middleware/check-auth");

const appointmentsControllers = require("../controllers/appointments");

router.get('/', appointmentsControllers.appointments_get_all);
router.post("/", appointmentsControllers.appointments_post_appointment);

module.exports = router;