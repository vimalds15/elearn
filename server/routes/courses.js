const express = require("express")
const fs = require("fs")
const router = express.Router()
const mongodb = require("mongodb")

router.get('/init-video',(req,res)=> {
    
    // const bucket = new mongodb.GridFSBucket();
    // const videoUploadStream = bucket.openUploadStream('bucket');
})

// const db = client.db(dbName);
// const bucket = new mongodb.GridFSBucket(db);

module.exports = router;