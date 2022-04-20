const asyncHandler = require("express-async-handler"); 
const User = require("../models/userModel"); 

// @description: Register New User 
// @route: POST /api/users
// @access: public 
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body; 
    if(!username || !email || !password) {
        res.status(400);
        throw new Error("Please add all fields"); 
    };

    // check if user exists by email
    const userExists = await User.findOne({email})
    if(userExists) {
        res.status(400);
        throw new Error("User already exists");
    };

    // create user with username, email, password
    const user = await User.create({
        username, 
        email, 
        password
    }); 

    if(user) {
        res.status(201).json({
            _id: user.id, 
            username: user.username, 
            email: user.email, 
            createdAt: user.createdAt, 
        })
    } else {
        res.status(400)
        throw new Error("Invalid User data"); 
    };
});

// @description: Authenticate User 
// @route: POST /api/users/sign_in
// @access: public 
const signInUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // check for user email 
    const user = await User.findOne({ email });

    // if this is the user
    if(user) {
        res.json({
            _id: user.id, 
            username: user.username, 
            email: user.email, 
            createdAt: user.createdAt, 
        });
    } else {
        res.status(400) 
        throw new Error("Invalid credentials")
    };
});

// @description: Get User Data 
// @route: GET /api/users/:id 
// @access: private 
const getUser = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id)
    if(!user) {
        res.status(400); 
        throw new Error('User not found'); 
    }
    await User.findById(req.params.id)
    res.status(200).json({ 
        _id: user.id, 
        userusername: user.userusername, 
        email: user.email, 
        isAdmin: user.isAdmin, 
        createdAt: user.createdAt, 
    }); 
});

// @description: Update User 
// @route: PUT /api/users/:id
// @access: private
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id); 
    if(!user) {
        res.status(400); 
        throw new Error('User not found'); 
    };

    // UPDATE ONLY USERusername/EMAIL
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedUser); 
})

// @description: Delete User 
// @route: DELETE /api/users/:id
// @access: private
const deleteUser = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id)
    if(!user) {
        res.status(400); 
        throw new Error('User not found'); 
    }
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json({ id: req.params.id }); 
})

module.exports = {
    registerUser, 
    signInUser, 
    getUser, 
    updateUser, 
    deleteUser,
}