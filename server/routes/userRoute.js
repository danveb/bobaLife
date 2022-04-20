const express = require("express"); 
const router = express.Router(); 
const { registerUser, signInUser, getUser, updateUser, deleteUser } = require("../controllers/userController"); 
const { protect } = require("../middleware/authMiddleware"); 

router.post("/", registerUser); 
router.post("/sign_in", signInUser); 
router.get("/:id", protect, getUser); 
router.put("/:id", protect, updateUser); 
router.delete("/:id", protect, deleteUser); 

module.exports = router