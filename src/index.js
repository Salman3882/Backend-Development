import dotenv from 'dotenv';
import express from 'express';
import {connectDb} from './db/index.js'
dotenv.config({
    path: './env'
})
const app = express()



connectDb()








// (async()=>{
//     try{
//         await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",()=>{
//             console.log("Error: ", error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on  ${process.env.PORT}`);
//         })
//     }
//     catch(error){
//         console.error("Error connecting",error)
//         throw error
//     }
// })()

