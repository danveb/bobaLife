import { useNavigate } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux"; 
import { decrementQty, incrementQty, removeItem, clearCart } from "../../redux/cart/cartSlice";
import { Navbar, Menu, Jumbotron } from "../index"; 
import { basketJumbotron } from "../../constants/jumbotron"; 
import styled from "styled-components";
import { device } from "../../styled";

const Container = styled.div`
    padding: 0 24px 0 24px; 
`
const Wrapper = styled.div`
    padding: 20px; 

    @media ${device.mobile} {
        padding: 10px;    
    }
`
const Top = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center; 
    padding: 20px; 

    @media ${device.mobile} {
        padding: 0; 
    }
`
const TopButton = styled.button`
    font-family: "Quicksand", sans-serif; 
    height: 50px; 
    line-height: 1em; 
    letter-spacing: .13em; 
    font-size: 11px; 
    text-transform: uppercase; 
    margin-bottom: 10px; 
    cursor: pointer; 
    padding: 10px; 
    background: ${props=>props.type === "filled" ? "red" : "transparent"}; 
    color: ${props=>props.type === "filled" ? "#fff" : "#000"}; 
    border-radius: 2px;  

    @media ${device.tablet} {
        font-size: 9px; 
        padding: 5px; 
    }
`
const Bottom = styled.div`
    display: flex; 
    justify-content: space-between; 

    @media ${device.tablet} {
        flex-direction: column;    
    }
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex; 
    justify-content: space-between; 

    @media screen and (max-width: 480px) {
        flex-direction: column;    
    }
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;  

    @media ${device.mobile} {
        flex-direction: column; 
        text-align: center; 
    }
`
const Image = styled.img`
    width: 170px; 
    margin: 10px 0; 

    @media ${device.mobile} {
        width: 100%; 
    }
`
const Details = styled.div`
    padding: 10px; 
    display: flex; 
    justify-content: space-around; 
    flex-direction: column; 
    font-family: "Poppins", sans-serif; 

    @media ${device.mobile} {
        padding: 0; 
    }
`
const ProductName = styled.h3`
    font-size: 16px; 

    @media ${device.tablet} {
        margin-bottom: 15px; 
    }
`
const ProductDescription = styled.p`
    font-size: 13px; 
    font-style: italic; 

    @media ${device.tablet} {
        margin-bottom: 15px; 
    }
`
const ProductRemove = styled.a`
    font-size: 12px; 
    width: fit-content; 
    text-decoration: none; 
    color: dodgerblue; 
    cursor: pointer; 

    @media ${device.mobile} {
        margin: 0 auto;
    }
`
const PriceDetail = styled.div`
    flex: 0.7;
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
`
const ProductAmountContainer = styled.div`
    display: flex; 
    align-items: center; 
`
const QtyContainer = styled.div`
    margin: 30px 0px; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
`
const QtyTitle = styled.div`
    margin: 0 15px; 
`
const QtyBtn = styled.button`
    width: 25px; 
    height: 25px; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    background-color: gainsboro; 
    border: none; 
    border-radius: 100px; 
`
const ProductPrice = styled.div`
    font-size: 20px; 
    font-weight: 200; 

    @media screen and (max-width: 480px) {
        margin-bottom: 20px;
    }
`
const Hr = styled.hr`
    background-color: #eee; 
    border: none; 
    height: 1px; 
`
const SummaryMain = styled.div`
    flex: 1; 
    border: 0.5px solid lightgray; 
    border-radius: 10px; 
    padding: 15px; 
    font-family: "Prata", sans-serif; 
`
const SummaryTitle = styled.h2`
    font-size: 26px; 
`
const SummaryItem = styled.div`
    margin: 25px 0px; 
    display: flex; 
    justify-content: space-between; 
`
const SummaryText = styled.p`
    font-weight: ${props=>props.type === "total" && "400"}; 
    font-size: ${props=>props.type === "total" && "20px"};
    color: ${props=>props.type === "total" && "crimson"} 
`
const ReviewBtn = styled(TopButton)`
    width: 100%; 
    background-color: #000; 
    border: 2px solid #000; 
    color: #fff; 
`
const EmptyDiv = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center; 
`
const EmptyTitle = styled.h3`
    font-family: "Prata", sans-serif; 
    color: red; 
    font-size: 18px; 
    font-weight: 200; 
`

const Cart = ({ menuOpen, setMenuOpen }) => {
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
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Container>
            <Jumbotron id={id} head={head} text={text} />
            <Wrapper>
                {cartItems.length === 0 ? 
                <EmptyDiv>
                    <EmptyTitle>Your Basket Is Empty...</EmptyTitle>
                </EmptyDiv> : (
                <>
                    <Top>
                        <TopButton onClick={() => navigate("/shop")}>CONTINUE SHOPPING</TopButton>
                        <TopButton type="filled" onClick={() => dispatch(clearCart())}>Empty Basket</TopButton>
                    </Top>
                    <Bottom>
                    <Info>
                        {cartItems.map((item) => (
                            <div key={item.id}>
                                <Product>
                                    <ProductDetail>
                                        <Image src={item.image} alt="product" />
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
        </Container>
        </>
    )
}

export default Cart