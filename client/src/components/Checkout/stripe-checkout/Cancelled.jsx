import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { clearCart } from "../../../redux/cart/cartSlice";
import { Jumbotron } from "../../index"; 
import { cancelledJumbotron } from "../../../constants/jumbotron";
import { CancelledContainer, Wrapper, Main, Btn } from "../../../styles/Cancelled.style";

const Cancelled = () => {
    // destructure id, head, text from jumbotron
    const { id, head, text } = cancelledJumbotron[0]; 

    // useNavigate
    const navigate = useNavigate(); 
    
    // useDispatch
    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(clearCart()); 
    }, [dispatch])

    return (
        <CancelledContainer>
            <Jumbotron id={id} head={head} text={text} />
            <Wrapper>
                <Main>
                    <Btn onClick={() => navigate("/")}>Back Home</Btn>
                </Main>
            </Wrapper>
        </CancelledContainer>
    )
}

export default Cancelled