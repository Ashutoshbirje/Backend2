const express = require("express");
const router = express.Router();
const { submitForm } = require("../controllers/contactController.js");

router.post("/contact", submitForm);

module.exports = router;
