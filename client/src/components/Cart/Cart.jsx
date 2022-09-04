import { useNavigate } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux"; 
import { decrementQty, incrementQty, removeItem, clearCart } from "../../redux/cart/cartSlice";
import { Jumbotron } from "../index"; 
import { basketJumbotron } from "../../constants/jumbotron"; 
import { CartContainer, Wrapper, Top, TopBtn, Bottom, Info, Product, ProductDetail, Img, Details, ProductName, ProductDescription, ProductRemove, PriceDetail, ProductAmountContainer, QtyContainer, QtyTitle, QtyBtn, ProductPrice, Hr, SummaryMain, SummaryTitle, SummaryItem, SummaryText, ReviewBtn, EmptyDiv, EmptyTitle } from "../../styles/Cart.style";

const Cart = () => {
    // destructure id, head, text from basketJumbotron
    const { id, head, text } = basketJumbotron[0]; 

    // useNavigate
    const navigate = useNavigate(); 

    // useDispatch
    const dispatch = useDispatch(); 

    // useSelector (cart/user) 
    const { cartItems } = useSelector((state) => state.cart); 
    const { user } = useSelector((state) => state.auth); 

    // handleCartCheckout
    const handleCartCheckout = () => {
        if(user) {
            navigate("/checkout");  
        } else {
            navigate("/login"); 
        }; 
    }; 

    const cartSubTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2); 
    }; 

    const cartQty = () => {
        let qty = cartItems.reduce((acc, item) => acc + item.qty, 0); 
        if(qty === 1) {
            return `${qty} item`;
        } else {
            return `${qty} items`
        }; 
    };

    return (
        <>
        <CartContainer>
            <Jumbotron id={id} head={head} text={text} />
            <Wrapper>
                {cartItems.length === 0 ? 
                <EmptyDiv>
                    <EmptyTitle>Your Basket Is Empty...</EmptyTitle>
                </EmptyDiv> : (
                <>
                    <Top>
                        <TopBtn onClick={() => navigate("/shop")}>CONTINUE SHOPPING</TopBtn>
                        <TopBtn type="filled" onClick={() => dispatch(clearCart())}>Empty Basket</TopBtn>
                    </Top>
                    <Bottom>
                    <Info>
                        {cartItems.map((item) => (
                            <div key={item.id}>
                                <Product>
                                    <ProductDetail>
                                        <Img src={item.image} alt="product" />
                                        <Details>
                                            <ProductName>{item.title}</ProductName>
                                            <ProductDescription>{item.description}</ProductDescription>
                                            <ProductRemove onClick={() => dispatch(removeItem(item.id))}>Remove Item</ProductRemove>
                                        </Details>
                                    </ProductDetail>
                                    <PriceDetail>
                                        <ProductAmountContainer>
                                        <QtyContainer>
                                            <QtyBtn onClick={() => dispatch(decrementQty(item.id))}>-</QtyBtn>
                                            <QtyTitle>{item.qty}</QtyTitle>
                                            <QtyBtn onClick={() => dispatch(incrementQty(item.id))}>+</QtyBtn>
                                        </QtyContainer>
                                        </ProductAmountContainer>
                                        <ProductPrice>$ {(item.price * item.qty).toFixed(2)}</ProductPrice>
                                    </PriceDetail>
                                </Product>
                                <Hr />
                            </div>
                        ))}
                    </Info>
                    <SummaryMain>
                        <SummaryTitle>Basket</SummaryTitle>
                        <SummaryItem>
                            <SummaryText>{`Subtotal (${cartQty()})`}</SummaryText>
                            <SummaryText>$ {cartSubTotal()}</SummaryText>
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
                            <SummaryText type="total">$ {cartSubTotal()}</SummaryText>
                        </SummaryItem>
                        <ReviewBtn 
                            onClick={handleCartCheckout}
                        >Review</ReviewBtn>
                    </SummaryMain>
                </Bottom>
                </>)}
            </Wrapper>
        </CartContainer>
        </>
    )
}

export default Cart