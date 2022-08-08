import { footerContact, footerHours } from "../../constants/footer"; 
import { FaGithub } from "react-icons/fa"; 
import "./Footer.scss"; 

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-left">
                    <h3>Contact Us</h3>
                    {footerContact.map((item) => (
                        <div 
                            key={item.id}
                            className="footer-contact"
                        >
                            {item.logo}
                            {item.text}
                        </div>
                    ))}
                </div>
                <div className="footer-center">
                    <h3>Our Hours</h3>
                    {footerHours.map((item) => (
                        <div
                            key={item.id}
                            className="footer-contact"
                        >
                            {item.logo} 
                            {item.text}
                        </div>
                    ))}
                </div>
                <div className="footer-right">
                    <h3>bobaLife</h3>
                    <p>Proud to serve a world-class boba carefully crafted by our baristas.</p>
                    <h5>© All rights reserved – Danny Bae</h5>
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