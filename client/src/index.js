import ReactDOM from "react-dom/client"; 
import App from "./App"; 
import { Provider } from "react-redux";
import { store } from "./app/store"; 
import "./index.css"; 

// Stripe 
import { Elements } from "@stripe/react-stripe-js"; 
import { loadStripe } from "@stripe/stripe-js"; 

// instantiate stripe Promise and pass stripe key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY); 

const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(
    <Provider store={store}>
        <Elements stripe={stripePromise}>
            <App />
        </Elements>
    </Provider>
); 