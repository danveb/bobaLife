import stripeAPI from "../stripe.js";

// Build createCheckoutSession 
async function createCheckoutSession(req, res) {
    // domain url to redirect client 
    // WEB_APP_URL first running on frontend 3000
    // update .env to deployed URL
    const domainURL = process.env.WEB_APP_URL;  

    const { line_items, customer_email } = req.body; 

    // check req.body has line_items/email
    if(!line_items || !customer_email) {
        return res.status(400).json({ error: "missing required session parameters" }); 
    }

    // create session
    let session; 
    try {
        // call to stripe API to create checkout session
        session = await stripeAPI.checkout.sessions.create({
            // required params
            payment_method_types: ["card"], 
            mode: "payment", 
            line_items, 
            customer_email, 
            success_url: `${domainURL}/success?session_id={CHECKOUT_SESSION_ID}`, 
            cancel_url: `${domainURL}/cancel`, 
            shipping_address_collection: { allowed_countries: ["US"] },
        });
        res.status(200).json({ sessionId: session.id }); 
    } catch(error) {
        console.log(error); 
        res.status(400).json({ error: "error occured, unable to create session" }); 
    }; 
}; 

export default createCheckoutSession