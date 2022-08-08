import { useState, useEffect } from "react"; 
import { Link, useNavigate } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux"; 
import { toast } from "react-toastify"; 
import { register, reset } from "../../redux/auth/authSlice"; 
import { Navbar, Menu, Spinner } from "../index";
import "./Register.scss"; 

const Register = ({ menuOpen, setMenuOpen }) => {
    // useState 
    const [formData, setFormData] = useState({
        username: "", 
        email: "", 
        password: "",
    }); 

    // destructured form data
    const { username, email, password } = formData; 

    // useNavigate
    const navigate = useNavigate();  

    // useDispatch
    const dispatch = useDispatch(); 

    // select from state.auth
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth); 

    // useEffect 
    useEffect(() => {
        if(isError) {
            toast.error("Sorry, an error occured. Try again or create a new account.", {
                position: "top-center", 
                autoClose: 2000, 
                pauseOnHover: true, 
            }); 
        }
        if(isSuccess) {
            toast.success(`Welcome ${user.username}!`, {
                position: "top-center", 
                autoClose: 1500, 
                pauseOnHover: false, 
            }); 
            navigate("/")
        }
        // redirect existing user back home 
        if(user) {
            navigate("/"); 
        }
        // dispatch reset() 
        dispatch(reset()); 

        // dependency array to fire useEffect if there are any changes 
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
        if(!password) {
            toast.error("Please enter password")
        } else {
            const userData = {
                username, 
                email, 
                password,
            }
            // error checking with toast... 
            if(username.length === 0) {
                toast.error("Username is empty. Please create it again."); 
            } else if(email.length === 0) {
                toast.error("Email is empty. Please create it again."); 
            } else if(password.length === 0) {
                toast.error("Password is empty. Please create it again."); 
            } else {
                // dispatch register with userData
                dispatch(register(userData)); 
            }; 
        }; 
    }; 

    if(isLoading) {
        return <Spinner />
    }

    return (
        <div>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />            <div className="register">
                <div className="register-wrapper">
                    <h1>Register</h1>
                    <p>Please enter your details</p>
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
        </div>
    )
    
}

export default Register