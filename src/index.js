// require('dotenv').config({path:'./env'})


import dotenv from "dotenv"

import connectDB from "./db/index.js"


dotenv.config({
    path:'./env'
})

connectDB().then(()=>{
    // we can write app.on() also
    app.listen(process.env.PORT || 4000,()=>{
        console.log("server is running at some port")
    })
}).catch((err)=>{
    console.log(`mongoDB Coonection failed !!!`,err);
})

/*
import express from "express";
const app=express()
// console.log('MongoDB URI:', process.env.MONGODB_URI);  // Logs the MongoDB URI from .env
// console.log('DB Name:', DB_NAME);  // Logs the value of DB_NAME from constants.js
// console.log('Port:', process.env.PORT);
(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error occured")
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }catch(error){
        console.log("Error ",error);
        throw error
    }
})() // using effis in JS
*/
