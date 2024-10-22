import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

import userRoutes from './routes/user.routes.js'



dotenv.config()

mongoose.connect(process.env.URI)
    .then(()=>{
        console.log("DB Connected")
    })
    .catch((err) => {
        console.log("DB Connection Error : ",err)
    })

const app = express();


app.listen(3000, ()=>{
    console.log('Server is Running on 3000!')
})


app.use('/api/user' , userRoutes)