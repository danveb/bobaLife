import { useState } from "react"; 
import { Link } from "react-router-dom"; 
import { NavbarLimited, Footer } from "../components";
import "./Register.scss"; 

const Login = () => {
    // useState 
    const [formData, setFormData] = useState({
        username: "", 
        email: "", 
        password: "",
    }); 

    const { username, email, password } = formData; 

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
            <div className="register-container">
                <div className="register-wrapper">
                    <h1>Register</h1>
                    <p>Please fill out the following:</p>
                    <form onSubmit={handleSubmit} >
                        <label htmlFor="username" />
                        <input
                            id="username" 
                            type="username"
                            name="username"
                            placeholder="Enter a username"
                            value={username} 
                            onChange={handleChange}
                        />
                        <label htmlFor="email" />
                        <input
                            id="email" 
                            type="email"
                            name="email"
                            placeholder="Enter an email"
                            value={email} 
                            onChange={handleChange}
                        />
                        <label htmlFor="password" />
                        <input 
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter a password"
                            value={password} 
                            onChange={handleChange}
                        />
                        <button type="submit">Register</button>
                        <Link to="/login">Sign In Here</Link>
                    </form>
                </div>
            </div>
        <Footer />
        </>
    )
    
}

export default Login