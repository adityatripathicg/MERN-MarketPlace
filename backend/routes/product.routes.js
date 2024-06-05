import express from 'express';
import Product from './models/product.model.js';
import mongoose from 'mongoose';
import { createProducts, deleteProducts, getProducts, updateProducts } from '../controllers/product.controllers.js';
const router = express.Router();

router.get("/", getProducts);

router.post("/",createProducts);

router.put("/:id", updateProducts);

router.delete("/:id", deleteProducts);




export default router;