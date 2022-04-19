import { heroItems } from "../constants/data"; 
import "./Hero.scss"; 

const Hero = () => {
    return (
        <div id="home" className="hero-container">
            <div className="hero-wrapper">
                {heroItems.map((item) => (
                <div key={item.id} className="hero-slide">
                    <div className="hero-imgContainer">
                        <img src={item.img} alt="boba-rainbow" />
                    </div>
                    <div className="hero-infoContainer">
                        <h1 className="hero-title">{item.title}</h1>
                        <p className="hero-description">{item.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Hero 