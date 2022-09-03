import { useEffect, useState } from "react"; 
import { Link, useNavigate } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux"; 
import { toast } from "react-toastify"; 
import { login, reset } from "../../redux/auth/authSlice"; 
import { Navbar, Menu, Spinner } from "../index";
import styled from "styled-components";
import { device } from "../../styled";

const LoginContainer = styled.div`
    height: calc(100vh - 79px); 
    width: 100%; 
    padding: 40px 24px; 
    display: flex; 
    flex-direction: column; 
    color: #000; 
`
const LoginWrapper = styled.div`
    max-width: 1400px; 
    width: 50%; 
    margin: 0 auto; 

    @media ${device.tablet} {
        width: 80%;
    }
    @media ${device.mobile} {
        width: 100%;
    }
`
const LoginMain = styled.div`
    font-family: "Prata", sans-serif; 
`
const LoginTitle = styled.h1`
    font-size: 56px; 
    margin-bottom: 10px; 

    @media ${device.tablet} {
        font-size: 40px; 
    }
`
const LoginText = styled.p`
    font-family: "Poppins", sans-serif; 
    font-size: 14px; 
    margin-bottom: 20px; 

    & span {
        font-style: italic; 
    }
`
const Form = styled.form`
    display: flex; 
    flex-direction: column; 
    width: 100%;  
    padding: 2rem; 
    border-radius: 10px; 
    background-color: lightgoldenrodyellow;

    & a {
        color: #000; 
        text-decoration: none; 
        text-align: right;
        font-size: 13px; 
        cursor: pointer; 
    }
`
const Label = styled.label`
    line-height: 1em; 
    letter-spacing: .1em; 
    font-size: 11px; 
    text-transform: uppercase; 
    color: #000; 
    margin-bottom: 10px; 
`
const Input = styled.input`
    line-height: 1em; 
    outline: 0; 
    border: 1px solid #000; 
    padding: 0.875rem 0.75rem; 
    width: 100%; 
    font-size: 12px; 
    color: #000; 
    margin-bottom: 15px; 
`
const LoginBtn = styled.button`
    font-family: "Quicksand", sans-serif; 
    height: 50px; 
    width: 100%; 
    background-color: #000; 
    border: 2px solid #000; 
    line-height: 1em; 
    letter-spacing: .13em; 
    font-size: 11px; 
    text-transform: uppercase; 
    color: #fff; 
    margin-bottom: 15px; 
    cursor: pointer; 
`

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
            toast.error(message, {
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
        <>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <LoginContainer>
                <LoginWrapper>
                    <LoginMain>
                        <LoginTitle>Sign In</LoginTitle>
                        <LoginText>Enter your account <span>credentials</span></LoginText>
                    </LoginMain>
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
                        <LoginBtn>Sign In</LoginBtn>
                        <Link to="/register">Need a new account?</Link>
                    </Form>
                </LoginWrapper>
            </LoginContainer>
        </>
    )
    
}

export default Login