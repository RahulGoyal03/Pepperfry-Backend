const express = require("express");

const router = express.Router();

const User = require("../models/users.model");

require("dotenv").config();

const jwt = require("jsonwebtoken");

const newToken = (user) => {
    return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);
};


// for geting register details from pepperfry
router.post("/signup", async (req, res) => {
  
    try {
        let user = await User.findOne({email: req.body.mail}).lean().exec();

        // if it already exists then throw an error
        if(user){
            const message = "email already exist please use another one"
            return res.render("index", {message});
            
        }
        user = await User.create(
          {
            name: req.body.uname,
            mobile: req.body.num,
            email: req.body.mail,
            password: req.body.psw
          }
        );

        const token = newToken(user);

        const message = "successfully created";

        logined_user_name = req.body.uname;
        logined_user_mobile = req.body.num;
        console.log(logined_user_name, logined_user_mobile)
        return res.render("index", {message, logined_user_name, logined_user_mobile});
        // return res.status(200).send(user)
    } catch (e) {        
        return res.status(500).json({message: e.message, status:"Failed"})
    }
  })

router.post("/login", async (req, res) => {
    try{
        // check if the email address provided already exist
        let user = await User.findOne({email: req.body.mail});
        // if it does not exist then throw an error
        if(!user){
            const message = "There is no account with this email"
            return res.render("index", {message});
        }

        // else we match the password        
        const match = await user.checkPassword(req.body.psw);        

        // if not match then throw an error
        if(!match){
            const message = "email or password is wrong";
            return res.render("index", {message});                                    
        }

        const token = newToken(user);

        const message = "login successfully";
        
        logined_user_name = user.name;
        logined_user_mobile = user.mobile;
        return res.render("index", {message, logined_user_name, logined_user_mobile});
        
    }catch(e){
        return res.status(500).json({message: e.message, status:"Failed"})
    }
});


module.exports = router;