import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';
dotenv.config();

const app = express();

app.use(express.json()); //allows us to accept JSON data in the req.body

app.post("api/products",async (req,res)=>{
    const product = req.body; // user will send this data
    if (!product.name || !product.price || !product.image ) {
        res.status(400).json({success:false, message:"Please provide all fields"});
    }
    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success:true, message:"Product created successfully", product:newProduct});
    } catch (error) {
        res.status(500).json({success : false, message:"Server Error"});
    }
});
app.get("/",(req,res)=>{
    res.send('Hello CG Welcome Back!'); // Send a response to the client
    
})

app.listen(5000, ()=>{
    connectDB(); // Connect to MongoDB database. Replace 'your_database_name' with your actual database name.
    console.log('Server is running on port http://localhost:5000 \nHello CG Welcome Back!');
})

//IMTjcZngfakWQJox
