import User from "../models/user.model.js"

import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"

export const signup = async (req,res,next) =>{
    // console.log(req.body)
    const {username, email, password} = req.body

    if(!username || !password || !email || username === '' || password =='' || email === ''){
        next(errorHandler(400, 'All Fields are required'))
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
        next(error)
    }
    
}