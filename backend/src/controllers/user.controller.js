const express = require("express");

const User = require("../models/user.model");

const router = express.Router();





const Product = require("../models/user.model");




router.post("", async (req, res) => {
    try {

        const product = await Product.create(req.body);
        res.send(product)

    } catch (err) {
        return res.status(400).send(err.message)
    }
})


router.get("", async (req, res) => {
    try {

        const product = await Product.find().lean().exec();
        res.send(product)

    } catch (err) {
        return res.status(400).send(err.message)
    }
})

module.exports = router;