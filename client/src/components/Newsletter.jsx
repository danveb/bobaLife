import { FaPaperPlane } from "react-icons/fa"; 
import "./Newsletter.scss"; 

const Newsletter = () => {
    return (
        <div className="newsletter-container">
            <h1 className="newsletter-title">
                Newsletter
            </h1>
            <p className="newsletter-subtitle">
                Interested in our hands-on boba classes?
            </p>
            <div className="newsletter-inputContainer">
                <input placeholder="Your Email"/>
                <button>
                    <FaPaperPlane />
                </button>
            </div>
        </div>
    )
}

export default Newsletter