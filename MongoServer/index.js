const express = require('express');
const cors = require('cors');
const connection = require('./Config/db.js');

const app = express();
app.use(cors());

app.get('/', async(req, res)=>{
    const result = await 
})

app.listen(8080, async()=>{
    try {
        await connection;
        console.log("Connected");
        
    } catch (error) {
        console.log(error);
    }
})