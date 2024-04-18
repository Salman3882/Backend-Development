import dotenv from 'dotenv';
import {connectDb} from './db/index.js'
import { app } from './app.js';
dotenv.config({
    path: './env'
})





connectDb()
.then(()=>{

    app.on("error",()=>{
        console.log("Error:",error)
        throw error
    })
    app.listen(process.env.PORT,()=>{
        console.log("MONGODB connected at PORT: ",process.env.PORT)

    })
})
.catch((err)=>{
    console.log("error connecting to MONGODB !!",err);
})








// (async()=>{
//     try{
//         await  mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("error",()=>{
//             console.log("Error: ", error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on  ${process.env.PORT}`);
//         })
//     }
//     catch(error){
//         console.error("Error connecting to Mongodb: ",error)
//         throw error
//     }
// })()

