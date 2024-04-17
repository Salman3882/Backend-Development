import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"


 export const connectDb = async ()=>{
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log("DB connected !! DB Host: ", connectionInstance.connection.host )
   } catch (error) {
        console.log("Error connecting to Database: ",error);
        process.exit(1)
    }
}