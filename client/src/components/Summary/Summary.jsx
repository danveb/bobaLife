import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; 
import { StripeCheckout } from "../index"; 
import styled from "styled-components";
import { device } from "../../styled"; 

const SummaryContainer = styled.div`
    padding: 20px 10px; 
    display: flex; 
    flex-direction: column; 
`
const SummaryMain = styled.div`
    max-width: 1600px; 
    width: 50%; 
    margin: 0 auto; 
    display: flex; 
    justify-content: center; 
    flex-direction: column; 
    padding: 2rem; 
    border-radius: 10px; 
    background-color: lightgoldenrodyellow; 

    @media ${device.tablet} {
        width: 80%; 
    }

    @media ${device.mobile} {
        width: 100%; 
    }
`
const SummaryTitle = styled.h2`
    font-family: "Prata", sans-serif; 
    font-size: 56px; 

    @media ${device.mobile} {
        font-size: 36px; 
    }
`
const SummaryItem = styled.div`
    display: flex; 
    justify-content: space-between; 
    margin: 20px 0px; 
`
const SummaryText = styled.p`
    font-family: "Poppins", sans-serif; 
    font-size: 15px; 
    font-weight: ${props=>props.type === "total" && "400"}; 
    font-size: ${props=>props.type === "total" && "20px"};
    color: ${props=>props.type === "total" && "crimson"} 
`
const SummaryBackBtn = styled.button`
    font-family: "Quicksand", sans-serif; 
    height: 50px; 
    width: 100%; 
    background-color: red; 
    border: 2px solid red; 
    line-height: 1em; 
    letter-spacing: .13em; 
    font-size: 11px; 
    text-transform: uppercase; 
    color: #000; 
    cursor: pointer; 
`

const Summary = () => {
    // useNavigate
    const navigate = useNavigate(); 

    // useSelector
    const { cartItems } = useSelector((state) => state.cart); 

    const cartQty = () => {
        let qty = cartItems.reduce((acc, item) => acc + item.qty, 0); 
        if(qty === 1) {
            return `${qty} item`;
        } else {
            return `${qty} items`
        }; 
    };

    const cartTotal = () => {
        let total = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2); 
        return total; 
    };
 
    return (
        <SummaryContainer>
            <SummaryMain>
                <SummaryTitle>Order</SummaryTitle>
                <SummaryItem>
                    <SummaryText>{`Subtotal (${cartQty()})`}</SummaryText>
                    <SummaryText>$ {cartTotal()}</SummaryText>
                </SummaryItem>
                <SummaryItem>
                    <SummaryText>Est. Shipping</SummaryText>
                    <SummaryText>$0.00</SummaryText>
                </SummaryItem>
                <SummaryItem>
                    <SummaryText>Tax</SummaryText>
                    <SummaryText>$0.00</SummaryText>
                </SummaryItem>
                <SummaryItem>
                    <SummaryText type="total">Total</SummaryText>
                    <SummaryText type="total">$ {cartTotal()}</SummaryText>
                </SummaryItem>
                {/* Stripe Checkout Component */}
                <StripeCheckout />
                <SummaryBackBtn onClick={()=> navigate("/cart")}>Back to Cart</SummaryBackBtn>
            </SummaryMain>
        </SummaryContainer>
    )
}

export default Summary