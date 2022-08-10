import { useEffect, useState } from "react"; 
import { Link, useNavigate } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux"; 
import { toast } from "react-toastify"; 
import { login, reset } from "../../redux/auth/authSlice"; 
import { Navbar, Menu, Spinner } from "..";
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
            toast.error("Invalid email/password. Please enter it again.", {
                position: "top-center", 
                autoClose: 2500, 
                pauseOnHover: true, 
            }); 
        }; 
        if(isSuccess) {
            toast.success(`Welcome back ${user.username}.`, {
                position: "top-center", 
                autoClose: 1500, 
                pauseOnHover: true, 
            }); 
            navigate("/"); 
        }; 
        // redirect existing user back to home
        if(user) {
            navigate("/"); 
        }
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
        // error check with toast 
        if(email.length === 0) {
            toast.error("Email is empty. Please enter it again."); 
        } else if(password.length === 0) {
            toast.error("Password field is empty. Please enter it again."); 
        } else {
            dispatch(login(userData)); 
        }
    }; 

    if(isLoading) {
        return <Spinner />
    }

    return (
        <div>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="login">
                <div className="login-top">
                    <div className="login-title">
                        <h1>Sign In</h1>
                        <p>Enter your account credentials</p>
                    </div>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label
                            htmlFor="email"
                        >
                            Email</label>
                        <input 
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            type="email" 
                            placeholder="Your email" 
                        />
                        <label
                            htmlFor="password"
                        >
                            Password</label>
                        <input 
                            id="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            type="password" 
                            placeholder="Your password" 
                        />
                        <button>Sign In</button>
                        <Link to="/register">Need a new account?</Link>
                    </form>
                </div>
            </div>
        </div>
    )
    
}

export default Login