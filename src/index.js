import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config();

connectDB();

// import express from "express";
// const app = express();

// ;(async () =>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL} / ${DB_NAME}`)
//         app.on("error" ,(error) =>{
//             console.error("Error in Express app", error);
//             throw error
//         })

//         app.listen(process.env.PORT , () =>{
//             console.log(`Server is running on the port ${process.env.PORT}`);
            
//         })
//     } catch (error) {
//         console.error("Error in DB connection", error);
//         throw error
//     }
// })()