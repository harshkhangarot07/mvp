const express = require('express')
const Task = require('../models/Tasks')
const User = require('../models/User')
const router = express.Router();
const jwt = require('jsonwebtoken')


const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split('')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' })
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ error: 'invalid token' });
        req.userID = decoded.indexOf;
        next()
    });
}

router.post