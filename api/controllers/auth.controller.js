import User from "../models/user.model.js"

import bcryptjs from 'bcryptjs'

export const signup = async (req,res) =>{
    // console.log(req.body)
    const {username, email, password} = req.body

    if(!username || !password || !email || username === '' || password =='' || email === ''){
        return res.status(400).json({message : 'All fields are required'})
    }

    const hashPassword = bcryptjs.hashSync(password, 5);

    const newUser = new User({
        username,
        email,
        password : hashPassword,
    });
    try {
        await newUser.save();
        res.json({message : 'Signup Successful'})
    } catch (error) {
        res.status(500).json({message : error.message})
    }
    
}