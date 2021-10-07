const express = require("express");
const { check, validationResult } = require("express-validator");
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const middleware = require("../middleware/auth");
const router = express.Router();

const User = require("../models/User");

const validation = [
    check('email',"Require email").isEmail(),
    check("password","Require Password").exists()
]

// @route   POST    api/auth
// @desc    Auth User & get token
// @access  Public


router.post("/", [
    check('email',"Require email").isEmail(),
    check("password","Require Password").exists()
], async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) return res.status(400).json({errors:errors.array()})

    const {email,password} = req.body;

    try {
        let user = await User.findOne({email});
        if (!user) return res.status(400).json({msg:"Invalid Credentials"})

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({msg:"Invalid Credentials"})

        const payload = {
            user:{
                id:user.id,
            }
        }

        jwt.sign(payload,config.get("jwtSecret"),{
            expiresIn: 360000
        },(err,token)=>{
            if (err) throw err;
            res.json({token});
        });

    } catch (error) {
        console.error(error.message)
    }
});

module.exports = router