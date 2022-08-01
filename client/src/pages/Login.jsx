import { useEffect, useState } from "react"; 
import { Link, useNavigate } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux"; 
import { toast } from "react-toastify"; 
import { login, reset } from "../redux/auth/authSlice"; 
import { Navbar, Menu, Spinner } from "../components";
import "./Login.scss"; 

const Login = ({ menuOpen, setMenuOpen }) => {
    // useState 
    const [formData, setFormData] = useState({
        email: "", 
        password: "",
    }); 

    // destructured form data
    const { email, password } = formData; 

    // useNavigate 
    const navigate = useNavigate(); 

    // useDispatch 
    const dispatch = useDispatch(); 

    // select from state.auth
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth); 

    // useEffect
    useEffect(() => {
        if(isError) {
            toast.error(message); 
        }; 

        if(isSuccess || user) {
            navigate("/"); 
        }; 
        dispatch(reset()); 
    }, [user, isError, isSuccess, message, navigate, dispatch]);


    // handleChange
    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value
        })); 
    }; 

    // handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault(); 
        const userData = {
            email, 
            password
        };
        dispatch(login(userData)); 
    }; 

    if(isLoading) {
        return <Spinner />
    }

    return (
        <div>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="login">
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
        </div>
    )
    
}

export default Login