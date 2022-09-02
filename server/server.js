import express from "express"; 
import colors from "colors"; 
import dotenv from "dotenv/config"; 
import connectDB from "./config/db.js"; 
import userRoute from "./routes/userRoute.js"; 
import productRoute from "./routes/productRoute.js"; 
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"; 
import cors from "cors"; 
const port = process.env.PORT || 8801; 

// Import createCheckoutSession
import createCheckoutSession from "./api/checkout.js"; 

connectDB() 

const app = express(); 

// Middleware 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

// Cors
app.use(cors()); 

// Routes 
app.use("/api/users", userRoute); 
app.use("/api/products", productRoute); 

// Stripe Route 
app.post("/create-checkout-session", createCheckoutSession); 

// Error Middleware
app.use(notFound);  
app.use(errorHandler);

// Test 123 
app.get('/', (req, res) => { res.send('Hello from Express!') })

app.listen(port, () => console.log(`Server started on port ${port}`)); 