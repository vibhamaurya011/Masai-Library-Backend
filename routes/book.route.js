const express = require("express")
const bookModel = require("../models/book.model")

const userRoute = express.Router()

userRoute.get("/", async(req, res)=>{
    try{
        const books = await bookModel.find()
        res.status(200).json(books)
    }catch(err){
        res.status(400).json({Error: err.message})
    }
})

userRoute.post("/add", async(req, res)=>{
    try {
        const book = new bookModel(req.body);
        await book.save();
        res.status(201).json({ message: "Book added successfully", book: book });
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
})

userRoute.patch("/update/:id", async(req, res)=>{
    try{
        const bookId = req.params.id;
        const updateBook = await bookModel.findByIdAndUpdate(bookId);
        if (!updateBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book update successfully" });
    }catch(err){
        res.status(400).json({Error: err.message})
    }
})

userRoute.delete("/delete/:id", async(req, res)=>{
    try{
        const bookId = req.params.id;
        const deletedBook = await bookModel.findByIdAndDelete(bookId);
        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book deleted successfully" });
    }catch(err){
        res.status(400).json({Error: err.message})
    }
})