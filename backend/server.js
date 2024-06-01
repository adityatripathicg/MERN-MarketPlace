import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';
import mongoose from 'mongoose';
dotenv.config();

const app = express();

app.use(express.json()); //allows us to accept JSON data in the req.body

app.listen(5000, ()=>{
    connectDB(); // Connect to MongoDB database. Replace 'your_database_name' with your actual database name.
    console.log('Server is running on port http://localhost:5000 \nHello CG Welcome Back!');
});