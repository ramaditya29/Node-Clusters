import express  from "express";
import fs from "fs";
//const express = require("express");
const app = express();
const PORT = 3000; 

app.get("/heavy", (req, res) => { 
    let total = 0;
    for (let i = 0; i < 20_000_000_000; i++) {
        total++;
    }
    res.send(`The result of the CPU intensive task is ${total}\n`);
    
}) 
app.listen(PORT, (err) => { 
    if(err) { 
        console.log("Error in starting the server");
    }
    console.log(`Server started successfully on port:${PORT}`);
    console.log(`worker pid=${process.pid}`);
})