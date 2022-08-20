const express = require("express");
const connect = require("./configs/db");
const {register,login} = require("./controllers/auth.controller");
const {body} = require("express-validator");
const userController = require("./controllers/user.controller")
const app = express();
const cors = require("cors");

const corsOptions = {
    origin: '*',
    credentials: true,            
    optionSuccessStatus: 200
  }

app.use(cors());
app.use(express.json());
app.use("/users",userController);
app.use("/register", cors(corsOptions),body("name").isString().isLength({min : 2}),body("email").isEmail(),
body("password").isLength({min : 6})
,cors(corsOptions),  register)
app.use("/login", login);


app.listen(process.env.PORT ||5555,async function(){
    try{
        await connect();
        console.log("Listening to port 5555");
    }
    catch(err){
        console.log("err",err.message);
    }
})