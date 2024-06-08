import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.routes.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json()); //allows us to accept JSON data in the req.body
app.use("/api/products", productRoutes);

app.listen(PORT, ()=>{
    connectDB(); // Connect to MongoDB database. Replace 'your_database_name' with your actual database name.
    console.log("Server is running on port http://localhost:"+PORT+"\nHello CG Welcome Back");
});