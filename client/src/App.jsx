import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home"; 
import { About, Drinks, Login, Register, Shop, Cart, Checkout, Success, Cancelled } from "./components/index"; 
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

// import stripe as side-effect
import "@stripe/stripe-js";

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false); 
    
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> } />
                    <Route path="/about" element={<About menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> } />
                    <Route path="/drinks" element={<Drinks menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> } />
                    <Route path="/login" element={<Login menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> } />
                    <Route path="/register" element={<Register menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> } />
                    <Route path="/shop" element={<Shop menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> } />
                    <Route path="/cart">
                        <Route path="" element={<Cart menuOpen={menuOpen} setMenuOpen={setMenuOpen} />} />
                        <Route path=":id" element={<Cart menuOpen={menuOpen} setMenuOpen={setMenuOpen} />} />
                    </Route>
                    <Route path="/checkout" element={<Checkout menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> } />
                    <Route path="/success" element={<Success menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> } />
                    <Route path="/cancel" element={<Cancelled menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> } />
                </Routes>
            </Router>
            <ToastContainer />
        </>
    )
}

export default App 