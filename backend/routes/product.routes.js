import express from 'express';

const router = express.Router();

app.get("/api/products", async (req,res)=>{
    try {
        const product = await Product.find({});
        res.status(200).json({success: true, data: products});
    } catch (error) {
        console.log("Error in Fetching Message ", error.message);
        res.status(500).json({success: false, message:"Server Error"});
    }
});

app.post("/api/products",async (req,res)=>{
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
});

app.put("/api/products/:id", async (req,res)=>{
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
});

app.delete("/api/delete/:id", async (req,res)=>{
    const {id} = req.params;
    console.log("ID : ", id);
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"Product deleted successfully"});
    } catch (error) {
        res.status(404).json({success:false, message:"Product Not Found"});
    }

});
// app.get("/",(req,res)=>{
//     res.send('Hello CG Welcome Back!'); // Send a response to the client
    
// })


export default router;