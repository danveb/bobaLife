import { useState, useEffect } from "react"; 
import { Link, useNavigate } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux"; 
import { toast } from "react-toastify"; 
import { register, reset } from "../../redux/auth/authSlice"; 
import { Spinner } from "../index";
import { RegisterContainer, Wrapper, Main, H1, P, Form, Label, Input, Btn } from "../../styles/Register.style";

const Register = () => {
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
            toast.error(message, {
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
                toast.error("Username is empty. Please create it again.", {
                position: "top-center", 
                autoClose: 1500, 
                pauseOnHover: true, 
            }); 
            } else if(email.length === 0) {
                toast.error("Email is empty. Please create it again.", {
                position: "top-center", 
                autoClose: 1500, 
                pauseOnHover: true, 
            }); 
            } else if(password.length === 0) {
                toast.error("Password is empty. Please create it again.", {
                position: "top-center", 
                autoClose: 1500, 
                pauseOnHover: true, 
            }); 
            } else {
                // dispatch register with userData
                dispatch(register(userData)); 
            }; 
        }; 
    }; 

    if(isLoading) {
        return <Spinner />
    };

    return (
        <RegisterContainer className="register">
            <Wrapper>
                <Main>
                    <H1>Register</H1>
                    <P>Create your free account</P>
                </Main>
                <Form className="register-form" onSubmit={handleSubmit}>
                    <Label
                        htmlFor="username"
                    >
                        Username</Label>
                    <Input 
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleChange}
                        type="username" 
                        placeholder="Your username" 
                    />
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
                    <Btn>Register</Btn>
                    <Link to="/login">Already have an account?</Link>
                </Form>
            </Wrapper>
        </RegisterContainer>
    )
    
}

export default Register