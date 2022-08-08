import { Navbar, Menu, Jumbotron, Footer } from "../index"; 
import { drinksJumbotron } from "../../constants/jumbotron";
import "./Drinks.scss"; 

const Drinks = ({ menuOpen, setMenuOpen }) => {
    // destructure id, head, text from heroJumbotron
    // pass down as props to Jumbotron component
    const { id, head, text } = drinksJumbotron[0]; 
    
    return (
        <div>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="drinks">
                <Jumbotron id={id} head={head} text={text} />
                <div className="drinks-wrapper">
                    <div className="drinks-container">
                        <div className="drinks-main">
                            <h1>#drinks @bobaLife</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptates assumenda nulla suscipit, magni repellat, minus aliquam mollitia odio nobis ex cupiditate, iste saepe a excepturi! Optio et minus excepturi.Lorem </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Drinks