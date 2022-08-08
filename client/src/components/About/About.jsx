import { Navbar, Menu, Jumbotron, Footer } from "../index"; 
import { aboutJumbotron } from "../../constants/jumbotron";
import { aboutTop, aboutCard, aboutBottom } from "../../constants/about"; 
import "./About.scss"; 

const About = ({ menuOpen, setMenuOpen }) => {
    // destructure id, head, text from heroJumbotron
    // pass down as props to Jumbotron component
    const { id, head, text } = aboutJumbotron[0]; 
    
    return (
        <div>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="about">
                <Jumbotron id={id} head={head} text={text} />
                <div className="about-wrapper">
                    <div className="about-container">
                        {aboutTop.map((top) => (
                            <div key={top.id}className="about-main">
                                <h1>#let's bobaLife</h1>
                                <img src={top.img} alt={top.alt} />
                                <p>{top.text}</p>
                            </div>
                        ))}
                        <div className="about-mid">
                            {aboutCard.map((card) => (
                                <div key={card.id} className="card">
                                <img src={card.img} alt={card.alt} />
                                <p>{card.text}</p>
                            </div>
                        ))}
                        </div>
                        {aboutBottom.map((bottom) => (
                            <div key={bottom.id}className="about-main">
                                <img src={bottom.img} alt={bottom.alt} />
                                <p>{bottom.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About