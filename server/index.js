import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js'
dotenv.config()

mongoose.connect(process.env.MONGO_ENV).then(()=>{
    console.log('Connected Mongo');
})
.catch((err)=>{
console.log(err);
})

const app = express()
app.use(express.json())

app.listen(3000,()=>{
    console.log('Server Running');
})

app.use("/server/user", userRouter)
app.use("/server/auth", authRouter)

