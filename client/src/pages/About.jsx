import { Navbar, Menu, Footer } from "../components"; 
import { details } from "../constants/aboutDetails"; 
import "./About.scss"; 

const About = ({ menuOpen, setMenuOpen }) => {
    return (
        <div>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="about">
                {details.map((detail) => (
                    <div className="about-wrapper" key={detail.id}>
                        <div className="about-left">
                            <div className="about-title">
                                <h3>{detail.title}</h3>
                            </div>
                            <div className="about-description">
                                <p>{detail.description}</p>
                            </div>
                        </div>
                        <div className="about-right">
                            <img src={detail.img} alt={detail.alt} />
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default About