const express = require("express"); 
const router = express.Router(); 
const { registerUser, signInUser, getUser, updateUser, deleteUser } = require("../controllers/userController"); 

router.post("/", registerUser); 
router.post("/sign_in", signInUser); 
router.get("/:id", getUser); 
router.put("/:id", updateUser); 
router.delete("/:id", deleteUser); 

module.exports = router