const express = require("express"); 
const colors = require("colors"); 
const dotenv = require("dotenv").config(); 
const { errorHandler } = require("./middleware/errorMiddleware"); 
const connectDB = require("./config/db"); 
const port = process.env.PORT || 4000; 
const cors = require("cors"); 

connectDB(); 

const app = express(); 

// Middleware 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

app.use(errorHandler); 
app.use(cors()); 

// Routes 
app.use("/api/users", require("./routes/userRoute")); 

// Test 123 
app.get('/', (req, res) => { res.send('Hello from Express!') })

app.listen(port, () => console.log(`Server started on port ${port}`)); 