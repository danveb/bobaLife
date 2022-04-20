import { FaGlobeAmericas, FaWhatsapp, FaEnvelopeOpen, FaRegCreditCard, FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa"; 
import "./Footer.scss"; 

const Footer = () => {
    return (
        <div id="contact" className="footer-container">
            <div className="footer-left">
            <h3 className="footer-title">Contact Us</h3>
                <div className="footer-contact">
                    <FaGlobeAmericas style={{ marginRight: "10px" }}/>310 N Rodeo Dr, Beverly Hills, CA 90210</div>
                <div className="footer-contact">
                    <FaWhatsapp style={{ marginRight: "10px" }}/>+1 (310) 156-3333
                </div>
                <div className="footer-contact">
                    <FaEnvelopeOpen style={{ marginRight: "10px" }}/>contact@bobalife.com
                </div>
                <div className="footer-contact">
                    <FaRegCreditCard style={{ marginRight: "10px" }}/>Contactless payments accepted
                </div>
            </div>
            <div className="footer-center">
                <h3 className="footer-title">Our Hours</h3>
                <ul className="footer-list">
                    <li className="footer-listItem">Every Day @ 10:00 - 21:00</li>
                </ul>
            </div>
            <div className="footer-right">
                <h3 className="footer-brand">bobaLife</h3>
                <p className="footer-subtitle">Proud to serve a world-class boba carefully crafted by our baristas.</p>
                <div className="footer-socialContainer">
                    <div className="footer-socialIcon" color="3b5999">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                    </div>
                    <div className="footer-socialIcon" color="e4405f">
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    </div>
                    <div className="footer-socialIcon" color="55acee">
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
                    </div>
                    <div className="footer-socialIcon" color="000000">
                        <a href="https://www.github.com/danveb" target="_blank" rel="noreferrer"><FaGithub /></a>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Footer 