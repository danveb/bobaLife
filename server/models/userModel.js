import mongoose from "mongoose"; 

// userSchema 
const userSchema = mongoose.Schema({
    username: {
        type: String, 
        required: [true, "Please add a username"],
        unique: true
    }, 
    email: {
        type: String, 
        required: [true, "Please add an email"],
        unique: true
    }, 
    password: {
        type: String, 
        required: [true, "Please add a password"]
    }
}, {
    timestamps: true
}); 

const User = mongoose.model("User", userSchema)
export default User