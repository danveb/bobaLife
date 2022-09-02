import { Navbar, Menu, Jumbotron, Summary } from "../index"; 
import { checkoutJumbotron } from "../../constants/jumbotron"; 
import styled from "styled-components";

const CheckoutContainer = styled.div`
    width: 100%; 
    padding: 0 24px 0 24px; 
    display: flex; 
    flex-direction: column; 
    color: #000; 
`

const Checkout = ({ menuOpen, setMenuOpen }) => {
    // destructure id, head, text from Jumbotron
    const { id, head, text } = checkoutJumbotron[0]; 
    
    return (
        <>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <CheckoutContainer>
                <Jumbotron id={id} head={head} text={text} />
                <Summary />
            </CheckoutContainer>
        </>
    )
}

export default Checkout