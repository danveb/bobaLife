const jwt = require("jsonwebtoken"); 
const bcrypt = require("bcryptjs"); 
const asyncHandler = require("express-async-handler"); 
const User = require("../models/userModel"); 

// Generate JWT (token)
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    });
};

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

    // hash password with BCRYPTJS
    // - generate salt with 10 rounds (max 12) 
    const salt = await bcrypt.genSalt(10); 
    // - hash password
    const hashedPassword = await bcrypt.hash(password, salt); 

    // create user with username, email, password 
    // - add hashedPassword 
    const user = await User.create({
        username, 
        email, 
        password: hashedPassword
    }); 

    if(user) {
        res.status(201).json({
            _id: user.id, 
            username: user.username, 
            email: user.email, 
            createdAt: user.createdAt, 
            token: generateToken(user._id) // provides token for AUTHORIZATION
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
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id, 
            username: user.username, 
            email: user.email, 
            createdAt: user.createdAt, 
            token: generateToken(user._id) // provides token for AUTHORIZATION
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
        throw new Error("User not found"); 
    }
    await User.findById(req.params.id)
    res.status(200).json({ 
        _id: user.id, 
        username: user.username, 
        email: user.email, 
        isAdmin: user.isAdmin, 
        createdAt: user.createdAt, 
        token: generateToken(user._id) // provides token for AUTHORIZATION
    }); 
});

// @description: Update User 
// @route: PUT /api/users/:id
// @access: private
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id); 
    if(!user) {
        res.status(400); 
        throw new Error("User not found"); 
    };

    // allow any change to be updated 
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    // re-hash user's password and save it to database
    updatedUser.password = await bcrypt.hash(updatedUser.password, 10); 
    updatedUser.save(); 

    res.status(200).json(updatedUser); 
});

// @description: Delete User 
// @route: DELETE /api/users/:id
// @access: private
const deleteUser = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id)
    if(!user) {
        res.status(400); 
        throw new Error("User not found"); 
    };
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ id: req.params.id }); 
});

module.exports = {
    registerUser, 
    signInUser, 
    getUser, 
    updateUser, 
    deleteUser,
}