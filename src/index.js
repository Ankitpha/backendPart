import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
        path: './env'
    });


connectDB();












// import mongoose from "mongoose";
// import {DB_NAME} from "./constants"
// import express from "express"

// const app = express()

// ;( async() => {
//     try {
//        await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`)
//        app.on("error", (error)=>{
//         console.log("error",error)
//         throw error;
//        })
//        app.listen(process.env.PORT, ()=>{
//         console.log(`app is listing on port ${process.env.PORT}`);
        
//        })
//     } catch (error) {
//         console.log("error",error)
//         throw error;
        
//     }
// })()