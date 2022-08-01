import hero from "../../assets/hero/barista1.jpeg"; 
import { companies } from "../../constants/companies"; 
import "./Hero.scss"; 

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-wrapper">
                <div className="hero-left">
                    <img src={hero} alt="barista" />
                </div>
                <div className="hero-right">
                    <div className="hero-title">
                        <h3>Welcome to bobaLife</h3>
                    </div>
                    <div className="hero-description">
                        <p>Book a private bubble tea class with us! Learn the know-how to making the perfect boba, along with a fun hands-on experience for your team. With our staff your team will learn how to properly brew our signature tea, make tapioca from scratch and recreate the classic milk tea with boba.</p>
                    </div>
                </div>
            </div>
            <div className="hero-sub">
                <div className="hero-title">
                    <h3>Proud to partner with</h3>
                </div>
                <div className="hero-companies">
                    <ul>
                        {companies.map((company) => (
                            <li key={company.id}>
                                <img src={company.logo} alt={company.alt} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hero 