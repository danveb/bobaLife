import { FaGlobeAmericas, FaWhatsapp, FaEnvelopeOpen, FaRegCreditCard, FaGithub } from "react-icons/fa"; 
import "./Footer.scss"; 

const Footer = () => {
    return (
        <div id="contact" className="footer">
            <div className="footer-wrapper">
                <div className="footer-left">
                    <div className="footer-title">
                        <h3>Contact Us</h3>
                    </div>
                    <div className="footer-contact">
                        <FaGlobeAmericas style={{ marginRight: "10px" }}/>1502 N Milwaukee Ave, Chicago, IL 60622</div>
                    <div className="footer-contact">
                        <FaWhatsapp style={{ marginRight: "10px" }}/>+1 (312) 846-9730
                    </div>
                    <div className="footer-contact">
                        <FaEnvelopeOpen style={{ marginRight: "10px" }}/>contact@bobalife.com
                    </div>
                    <div className="footer-contact">
                        <FaRegCreditCard style={{ marginRight: "10px" }}/>Contactless payments accepted
                    </div>
                </div>
                <div className="footer-center">
                    <div className="footer-title">
                        <h3>Our Hours</h3>
                    </div>
                    <ul className="footer-list">
                        <li className="footer-listItem">Every Day @ 10:00 - 21:00</li>
                    </ul>
                </div>
                <div className="footer-right">
                    <div className="footer-brand">
                        <h3>bobaLife</h3>
                    </div>
                    <p className="footer-subtitle">Proud to serve a world-class boba carefully crafted by our baristas.</p>
                    <div className="footer-socialContainer">
                        <div className="footer-social">
                            <a href="https://www.github.com/danveb" target="_blank" rel="noreferrer"><FaGithub /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer 