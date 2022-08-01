import { FaPaperPlane } from "react-icons/fa"; 
import "./Newsletter.scss"; 

const Newsletter = () => {
    return (
        <div className="newsletter">
            <div className="newsletter-wrapper">
                <div className="newsletter-title">
                    <h3>Newsletter</h3>
                </div>
                <p className="newsletter-subtitle">
                    Stay up to date with our latest flavors.
                </p>
                <div className="newsletter-cta">
                    <input placeholder="Your Email" />
                    <button>
                        <FaPaperPlane />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter