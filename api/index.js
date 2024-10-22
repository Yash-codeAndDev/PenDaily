import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'


dotenv.config()


mongoose.connect(process.env.URI)
    .then(()=>{
        console.log("DB Connected")
    })
    .catch((err) => {
        console.log("DB Connection Error : ",err)
    })

const app = express();

app.use(express.json())


app.listen(3000, ()=>{
    console.log('Server is Running on 3000!')
})


app.use('/api/user' , userRoutes)

app.use('/api/auth' , authRoutes)