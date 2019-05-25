const express = require("express");
const router = express.Router();
const Phone = require("../phones.json");
// const Phone = require("../models/Phone");


router.get('/phones', (req, res, next) => {
    res.status(200).json(Phone)
});

module.exports = router;