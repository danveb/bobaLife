import express from "express"; 
const router = express.Router(); 
import { registerUser, signInUser, getUser, updateUser, deleteUser } from "../controllers/userController.js"; 
import { protect } from "../middleware/authMiddleware.js"; 

router.post("/", registerUser); 
router.post("/sign_in", signInUser); 
router.get("/:id", protect, getUser); 
router.put("/:id", protect, updateUser); 
router.delete("/:id", protect, deleteUser); 

export default router