import Product from './models/product.model.js';
import mongoose from 'mongoose';

export const getProducts = async (req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json({success: true, data: products});
    } catch (error) {
        console.log("Error in Fetching Message ", error.message);
        res.status(500).json({success: false, message:"Server Error"});
    }
}

export const createProducts = async (req,res)=>{
    const product = req.body; // user will send this data
    if (!product.name || !product.price || !product.image ) {
        return res.status(400).json({success:false, message:`Please provide all fields Name: ${product.name}, Price: ${product.price}, Image:${product.image}`});
    }
    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success:true, product:newProduct});
    } catch (error) {
        res.status(500).json({success : false, message:"Server Error"});
    }
}

export const updateProducts = async (req,res)=>{
    const {id} = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success:false, message:"Invalid Product ID"});
    }
    try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product,{new:true});
    res.status(200).json({succuess : true, data : updatedProduct});
    } catch (error) {
        res.status(500).json({success : false, message:"Server Error"});
    }
}

export const deleteProducts = async (req,res)=>{
    const {id} = req.params;
    console.log("ID : ", id);
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"Product deleted successfully"});
    } catch (error) {
        res.status(404).json({success:false, message:"Product Not Found"});
    }

}
