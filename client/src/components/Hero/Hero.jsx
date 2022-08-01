import milktea from "../../assets/hero/milktea.png"; 
import { companies } from "../../constants/companies"; 
import "./Hero.scss"; 

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-wrapper">
                <div className="hero-left">
                    <img src={milktea} alt="milktea" />
                </div>
                <div className="hero-right">
                    <div className="hero-title">
                        <h3>Welcome to bobaLife</h3>
                        <h4>Summer|22</h4>
                    </div>
                    <div className="hero-description">
                        <p>We have only one obsession, and you guessed it right: boba. Some call it boba, some call it bubble tea, but we all know this word is interchangeable. We are just passionate to share our boba to the world. This is exactly what makes us who we are. We welcome you to a friendly atmosphere delicately curated to serve you a world-class boba on every single cup. Welcome to bobaLife.</p>
                    </div>
                </div>
            </div>
            <div className="hero-sub">
                <div className="hero-title">
                    <h3>Proud to share bobaLife with</h3>
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