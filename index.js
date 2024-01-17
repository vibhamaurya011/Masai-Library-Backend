const express = require("express")
var cors = require('cors')
const connection = require("./config/db")
const bookModel = require("./models/book.model")
require("dotenv").config()

const port = process.env.PORT || 3030
const app = express()
app.use(cors())
app.use(express.json())

app.use("/books", bookModel)

app.listen(port, async()=>{
    try{
        await connection;
        console.log('Connected to the database.');
        console.log(`Server is running on port ${port}.`);
    }catch(err){
        console.log(err.message)
    }
})

