const express = require("express")
const app = express()
const port = process.env.PORT || 5000;
const connectDB = require("./config/db")

//connect database
connectDB();


app.listen(port,()=>{
    console.log(`Successfully running on port ${port}`)
})