import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { clearCart } from "../../../redux/cart/cartSlice";
import { Navbar, Menu, Jumbotron } from "../../index"; 
import { cancelledJumbotron } from "../../../constants/jumbotron";
import styled from "styled-components";
import { device } from "../../../styled";

const CancelledContainer = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    padding: 0 24px 0 24px; 
`
const CancelledWrapper = styled.div`
    max-width: 1400px; 
    width: 50%; 
    margin: 0 auto; 
    padding: 30px 0; 

    @media ${device.tablet} {
        width: 80%; 
    }
    @media ${device.mobile} {
        width: 100%; 
    }
`
const CancelledMain = styled.div`
    display: flex; 
    flex-direction: column; 
`
const CancelledBtn = styled.button`
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

const Cancelled = ({ menuOpen, setMenuOpen }) => {
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
        <>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <CancelledContainer>
            <Jumbotron id={id} head={head} text={text} />
            <CancelledWrapper>
                <CancelledMain>
                    <CancelledBtn onClick={() => navigate("/")}>Back Home</CancelledBtn>
                </CancelledMain>
            </CancelledWrapper>
        </CancelledContainer>
        </>
    )
}

export default Cancelled