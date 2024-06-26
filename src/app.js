import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"20kb"}))
//urlencoded is used to  handle the urls speciallly the extended is used to handle nested objects
app.use(express.urlencoded({extended:true,limit:"20kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes

import userRouter from "./routes/user.router.js";

// http:localhost:6000/api/v1/users/register
 
//routes declaration

app.use("/api/v1/users",userRouter)


export { app }