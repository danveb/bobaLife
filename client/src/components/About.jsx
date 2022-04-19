import barista1 from "../assets/barista1.jpeg"; 
import shop1 from "../assets/shop1.jpeg"; 
import "./About.scss"; 

const About = () => {
    return (
        <div id="about" className="about-container">
            <div className="about-top">
                <h1 className="about-top--title">
                    About
                </h1>
                <p className="about-top--subtitle">
                    We have one obsession: boba. We are passionate about sharing bobaLife with you. Here we have created a friendly atmosphere to welcome you and serve you world-class boba.
                </p>
            </div>
            <div className="about-center">
                <div className="about-center--left">
                        <img src={barista1} alt="barista" />
                </div>
                <div className="about-center--right">
                    <p className="about-center--title">
                        The Four Seasons
                    </p>
                    <p className="about-center--subtitle">
                        Our collection reflects the changing seasons to bring authentic drinks that can be enjoyed per season. 
                        <br />
                        <br />
                        Our base starts from a carefully curated collection of tea leaves we source from organic tea masters. 
                        <br />
                        <br />
                        Our tapioca is sourced from a single-region in Asia to ensure high quality and richness to our drinks. 
                        <br />
                        <br />
                        We use all natural sweeteners to provide a healthy yet tasty drink you will experience only with us. 
                    </p>
                    <p className="about-center--title">
                        Personalized Experience
                    </p>
                    <p className="about-center--subtitle">
                        Our baristas are here to walk you through the drink-making process. Just stop by our counter to get recommendations on availble drinks from our latest collection. 
                    </p>
                </div>
            </div>
            <div className="about-bottom">
                <div className="about-bottom--top">
                    <p className="about-bottom--title">
                        Welcome Home
                    </p>
                    <p className="about-bottom-subtitle">
                        Welcome to your home away from home. We have curated our space to make you feel where you really want to be. Our designers have put emphasis on creating an ambiance so you can comfortably have a chat, study, and meet like-minded peers. 
                        <br />
                        <br />
                        If it's your first time visiting our shop make sure to stop by our mural and take an insta-worthy pic.  
                        <br />
                        <br />
                    </p>
                </div>
                <div className="about-bottom-img">
                        <img src={shop1} alt="shop" />
                </div>
            </div>
        </div>
    )
}

export default About