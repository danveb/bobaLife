import { Jumbotron, Summary } from "../index"; 
import { checkoutJumbotron } from "../../constants/jumbotron"; 
import { CheckoutContainer } from "../../styles/Checkout.style";

const Checkout = () => {
    // destructure id, head, text from Jumbotron
    const { id, head, text } = checkoutJumbotron[0]; 
    
    return (
        <CheckoutContainer>
            <Jumbotron id={id} head={head} text={text} />
            <Summary />
        </CheckoutContainer>
    )
}

export default Checkout