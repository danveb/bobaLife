import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home"; 
import { Navbar, Menu, About, Drinks, Login, Register, Shop, Cart, Checkout, Success, Cancelled } from "./components/index"; 
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

// import stripe as side-effect
import "@stripe/stripe-js";

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false); 

    // useEffect for scrolling allowed/not-allowed when using nav-menu
    useEffect(() => {
        if(menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset"; 
        }
    }, [menuOpen]); 
    
    return (
        <>
            <Router>
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Routes>
                    <Route path="/" element={<Home /> } />
                    <Route path="/about" element={<About /> } />
                    <Route path="/drinks" element={<Drinks /> } />
                    <Route path="/login" element={<Login /> } />
                    <Route path="/register" element={<Register /> } />
                    <Route path="/shop" element={<Shop menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> } />
                    <Route path="/cart">
                        <Route path="" element={<Cart />} />
                        <Route path=":id" element={<Cart />} />
                    </Route>
                    <Route path="/checkout" element={<Checkout /> } />
                    <Route path="/success" element={<Success /> } />
                    <Route path="/cancel" element={<Cancelled /> } />
                </Routes>
            </Router>
            <ToastContainer />
        </>
    )
}

export default App 