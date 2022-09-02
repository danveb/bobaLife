import mongoose from "mongoose"; 

// productSchema 
const productSchema = mongoose.Schema({
    // all fields 
    user: {
        type: mongoose.Schema.Types.ObjectId, // which user created the product, 
        required: true, 
        ref: "User", // relationship with User model
    }, 
    title: {
        type: String, 
        required: true, 
    }, 
    description: {
        type: String,
        required: true, 
    }, 
    image: {
        type: String, 
        required: true, 
    }, 
    price: {
        type: Number, 
        required: true, 
        default: 0, 
    }, 
}, {
    timestamps: true, 
})

const Product = mongoose.model("Product", productSchema); 
export default Product