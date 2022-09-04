import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchFromAPI } from "../../../helper/checkoutHelper";
import { useStripe } from "@stripe/react-stripe-js"; 
import { Form, Label, Input, CheckoutBtn } from "../../../styles/StripeCheckout.style"; 

const StripeCheckout = () => {
    // useState
    const [email, setEmail] = useState(""); 

    // useSelector 
    const { cartItems } = useSelector((state) => state.cart); 
    const { user } = useSelector((state) => state.auth); 

    // useEffect
    useEffect(() => {
        setEmail(user.email); 
    }, [user.email]); 

    // useStripe 
    const stripe = useStripe(); 

    // handleCheckout 
    // redirect user to stripe checkout 
    const handleCheckout = async (e) => {
        e.preventDefault(); 
        // line_items 
        const line_items = cartItems.map((item) => {
            return {
                quantity: item.qty, 
                price_data: {
                    currency: "usd", 
                    unit_amount: item.price * 100, // amount in cents so multiply by 100 to get correct amount 
                    product_data: {
                        name: item.title, 
                        description: item.description, 
                        images: [item.image], 
                    }
                }
            }
        }); 

        const response = await fetchFromAPI("create-checkout-session", {
            body: { line_items, customer_email: email },
        }); 
        const { sessionId } = response; 
        const { error } = await stripe.redirectToCheckout({
            sessionId
        }); 
        if(error) {
            console.log(error); 
        }; 
    }; 

    return (
        <Form onSubmit={handleCheckout}>
            <Label htmlFor="email" />
            <Input 
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                value={email}
                disabled={user.email ? true : false}
                required
            />
            <CheckoutBtn
                type="submit"
            >
                Checkout
            </CheckoutBtn>
        </Form>
    )
}

export default StripeCheckout