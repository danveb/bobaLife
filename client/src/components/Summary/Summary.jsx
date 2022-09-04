import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; 
import { StripeCheckout } from "../index"; 
import { SummaryContainer, Main, H2, Item, P, BackBtn } from "../../styles/Summary.style";

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
            <Main>
                <H2>Order</H2>
                <Item>
                    <P>{`Subtotal (${cartQty()})`}</P>
                    <P>$ {cartTotal()}</P>
                </Item>
                <Item>
                    <P>Est. Shipping</P>
                    <P>$0.00</P>
                </Item>
                <Item>
                    <P>Tax</P>
                    <P>$0.00</P>
                </Item>
                <Item>
                    <P type="total">Total</P>
                    <P type="total">$ {cartTotal()}</P>
                </Item>
                {/* Stripe Checkout Component */}
                <StripeCheckout />
                <BackBtn onClick={()=> navigate("/cart")}>Back to Cart</BackBtn>
            </Main>
        </SummaryContainer>
    )
}

export default Summary