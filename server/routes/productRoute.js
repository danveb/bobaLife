import express from "express"; 
const router = express.Router(); 
import { getAllProducts, createProduct, deleteProduct } from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js"; 

// GET /api/products/
router.get("/", getAllProducts); 

// POST /api/products 
router.post("/", protect, createProduct); 

// PUT /api/products/:id
router.delete("/:id", protect, deleteProduct); 

export default router