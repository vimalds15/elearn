const express = require("express")
const {check,validationResult} = require("express-validator")
const jwt = require("jsonwebtoken")
const router = express.Router()
const config = require("config")
const bcrypt = require("bcryptjs")

const User = require("../models/User")


const validation = [
    check('name',"Please enter your name").not().isEmpty(),
    check("email","Please enter your email address").isEmail(),
    check("password","Please enter a password with 6 or more characters").isLength({min:6})
]


// @route POST api/users
// @desc Register a user
// @access Public

router.post('/',validation,async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {name,email,password} = req.body;

    try {
        let user = await User.findOne({email})

        if(user) return res.status(400).json({msg:"User already exists!"})

        user = new User({
            name,
            email,
            password
        })

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password,salt)

        await user.save()

        const payload = {
            user: {
                id: user.id,
            }
        }

        jwt.sign(payload,config.get('jwtSecret'),{
            expiresIn:360000
        },(err,token)=>{
            if (err) throw err;
            res.json({token});
        })
    } catch (error) {
        console.error(err.message);
        res.status(500).send("Internal Server Error")
    }
})