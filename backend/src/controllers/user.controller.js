const express = require("express");
const router = express.Router();

const User = require("../models/user.models");

router.post("",async(req,res)=>{
    try{
        const user = await User.create(req.body);
        res.send(user);
    }
    catch(err){
        return res.status(400).send(err.message)
    }
})

router.get("",async(req,res)=>{
    try{
        const user = await User.find().lean().exec();
        res.send(user);
    }
    catch(err){
        return res.status(400).send(err.message);
    }
})

module.exports = router;