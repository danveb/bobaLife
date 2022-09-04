import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { clearCart } from "../../../redux/cart/cartSlice";
import { Jumbotron } from "../../index"; 
import { successJumbotron } from "../../../constants/jumbotron";
import { SuccessContainer, Wrapper, Main, Text, Btn } from "../../../styles/Success.style";

const Success = () => {
    // destructure id, head, text from jumbotron
    const { id, head, text } = successJumbotron[0]; 

    // useNavigate
    const navigate = useNavigate(); 
    
    // useDispatch
    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(clearCart()); 
    }, [dispatch])

    return (
        <SuccessContainer className="success">
            <Jumbotron id={id} head={head} text={text} />
            <Wrapper>
                <Main>
                    <Text>We are currently processing your order and will shortly send you an email confirmation with order details and next steps.</Text>
                    <Btn onClick={() => navigate("/")}>Back Home</Btn>
                </Main>
            </Wrapper>
        </SuccessContainer>
    )
}

export default Success