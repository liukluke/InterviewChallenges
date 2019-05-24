const express = require("express");
const router = express.Router();
const Phone = require("../phones.json");
// const Phone = require("../models/Phone");


router.get('/phones', (req, res, next) => {
    res.status(200).json(Phone)
});

router.get('/one-phone/:id', (req, res, next) => {
    console.log(Phone)
    res.status(200).json(Phone.filter(el => (el.id == req.params.id)))
});


module.exports = router;