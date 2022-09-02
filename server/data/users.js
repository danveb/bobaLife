import bcrypt from "bcryptjs"; 

const users = [
    {
        username: "admin", 
        email: "admin@gmail.com", 
        password: bcrypt.hashSync("admin", 10), // synchronously generate hash with 10 rounds
    }, 
    {
        username: "peach", 
        email: "peach@gmail.com", 
        password: bcrypt.hashSync("peach", 10), // synchronously generate hash with 10 rounds
    }, 
    {
        username: "jojo", 
        email: "jojo@gmail.com", 
        password: bcrypt.hashSync("jojo", 10), // synchronously generate hash with 10 rounds
    }, 
]; 

export default users