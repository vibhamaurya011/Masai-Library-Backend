const mongoose = require("mongoose")

const  bookSchema = mongoose.Schema({
    title: String,
    author: String,
    ISBN: Number,
    description: String,
    published: Date
},{
    versionKey:false
})

const bookModel = mongoose.model("user", bookSchema)

module.exports = bookModel