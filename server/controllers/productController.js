import asyncHandler from "express-async-handler"; 
import Product from "../models/productModel.js";

const getAllProducts = asyncHandler(async(req, res) => {
    const products = await Product.find({}); 
    if(!products) {
        res.status(400); 
        throw new Error("Products Not Found"); 
    };
    res.status(200).json(products); 
}); 

const createProduct = asyncHandler(async(req, res) => {
    const { title, description, image, price } = req.body; 
    const product = await Product.create({
        title, 
        description,
        image, 
        price,
    }); 
    if(product) {
        res.status(201).json({
            _id: product.id, 
            title: product.title, 
            description: product.description, 
            image: product.image, 
            price: product.price, 
        }); 
    } else {
        res.status(400); 
        throw new Error("Invalid Product Entry"); 
    }; 
});

const deleteProduct = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id); 
    if(!product) {
        res.status(400); 
        throw new Error("Product Not Found");
    }; 
    await Product.findByIdAndDelete(req.params.id); 
    res.status(200).json({ id: req.params.id }); 
}); 

export {
    getAllProducts, 
    createProduct, 
    deleteProduct, 
}