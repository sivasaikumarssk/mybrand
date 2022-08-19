const express = require("express");

const app = express();
const connect = require("./configs/db");
app.use(express.json());
app.listen(5555,async function(){
    try{
        await connect();
        console.log("Listening to port 5555");
    }
    catch(err){
        console.log("err",err.message);
    }
})