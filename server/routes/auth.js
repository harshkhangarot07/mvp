const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const router = express.Router();

router.post('/register' ,async (req , res)=>{
    const { username , email , password} = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password ,10);
        const user = new User({username , email , password:hashedPassword})
        await user.save();
        res.status(200).json({message : 'User registered'})

    }catch(err){
        res.status(400).json({error : err.message})

    }
});

router.post('/login', async(req , res)=>{
    const user = await User.findOne({email});

   try{ if(!user) throw new Error('User not found')
    const isMatch = await bcrypt.compare(password , user.password)
    if(!isMatch) throw new Error('Invalid credentials')
    
    const token = jwt.sign({id: user._id} , process.env.JWT_SECRET , {expiresIn : '1h'});

    req.json(token)}
    catch(err){
        res.status(400).json({error : err.message})
    }

}

)

module.exports = router;

