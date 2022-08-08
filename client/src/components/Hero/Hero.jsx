import { Jumbotron } from "../index"; 
import { companies } from "../../constants/companies"; 
import { heroJumbotron } from "../../constants/jumbotron"; 
import { heroCards } from "../../constants/hero"; 
import boba from "../../assets/hero/boba2.png"; 
import "./Hero.scss"; 

const Hero = () => {
    // destructure id, head, text from heroJumbotron
    // pass down as props to Jumbotron component
    const { id, head, text } = heroJumbotron[0]; 

    return (
        <div className="hero">
            <Jumbotron id={id} head={head} text={text} />
            <div className="hero-wrapper">
                <div className="hero-gallery-container">
                    <div className="hero-mid">
                        {heroCards.map((card) => (
                            <div key={card.id} className="hero-card">
                                <img src={card.img} alt={card.alt} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hero-main-container">
                    <div className="hero-left">
                        <h1>let's #bobaLife</h1>
                        <img src={boba} alt="milk tea" />
                    </div>
                    <div className="hero-right">
                        <h3>Why bobaLife?</h3>
                        <p>We have only one obsession, and you guessed it right: boba. Some call it boba, some call it bubble tea, but we all know this word is interchangeable. Life is so short and we are just passionate to share boba to the world. This is exactly what makes us who we are. We want to welcome you to a friendly atmosphere delicately curated to serve you a world-class boba on every single cup. <span>Welcome to bobaLife.</span></p>
                    </div>
                </div>
                <div className="hero-sub">
                    <h3>Proud to share bobaLife</h3>
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