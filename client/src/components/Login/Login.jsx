import { useEffect, useState } from "react"; 
import { Link, useNavigate } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux"; 
import { toast } from "react-toastify"; 
import { login, reset } from "../../redux/auth/authSlice"; 
import { Spinner } from "../index";
import { LoginContainer, Wrapper, Main, H1, P, Form, Label, Input, Btn } from "../../styles/Login.style";

const Login = () => {
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
            toast.error(message, {
                position: "top-center", 
                autoClose: 2500, 
                pauseOnHover: true, 
            }); 
        }; 
        if(isSuccess) {
            toast.success(`Welcome back ${user.username}`, {
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
            toast.error("Email field is empty. Please enter it again.", {
                position: "top-center", 
                autoClose: 1500, 
                pauseOnHover: true, 
            }); 
        } else if(password.length === 0) {
            toast.error("Password field is empty. Please enter it again.", {
                position: "top-center", 
                autoClose: 1500, 
                pauseOnHover: true, 
            }); 
        } else {
            dispatch(login(userData)); 
        }
    }; 

    if(isLoading) {
        return <Spinner />
    };

    return (
        <LoginContainer>
            <Wrapper>
                <Main>
                    <H1>Sign In</H1>
                    <P>Enter your account <span>credentials</span></P>
                </Main>
                <Form onSubmit={handleSubmit}>
                    <Label
                        htmlFor="email"
                    >
                        Email</Label>
                    <Input 
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        type="email" 
                        placeholder="Your email" 
                    />
                    <Label
                        htmlFor="password"
                    >
                        Password</Label>
                    <Input 
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        type="password" 
                        placeholder="Your password" 
                    />
                    <Btn>Sign In</Btn>
                    <Link to="/register">Need a new account?</Link>
                </Form>
            </Wrapper>
        </LoginContainer>
    )
    
}

export default Login