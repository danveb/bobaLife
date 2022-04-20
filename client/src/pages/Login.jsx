import { useState } from "react"; 
import { Link } from "react-router-dom"; 
import { NavbarLimited, Footer } from "../components";
import "./Login.scss"; 

const Login = () => {
    // useState 
    const [formData, setFormData] = useState({
        email: "", 
        password: "",
    }); 

    const { email, password } = formData; 

    // handleChange
    const handleChange = () => {
        console.log('Changing')
    }

    // handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault(); 
    }

    return (
        <>
            <NavbarLimited />
            <div className="login-container">
                <div className="login-wrapper">
                    <h1>Sign In</h1>
                    <p>Please enter your credentials</p>
                    <form onSubmit={handleSubmit} >
                        <label htmlFor="email" />
                        <input
                            id="email" 
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email} 
                            onChange={handleChange}
                        />

                        <label htmlFor="password" />
                        <input 
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={password} 
                            onChange={handleChange}
                        />
                        <button type="submit">Sign In</button>
                        <Link to="/register">Register New Account</Link>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
    
}

export default Login