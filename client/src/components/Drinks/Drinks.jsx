import { Navbar, Menu, Jumbotron, Footer } from "../index"; 
import { drinksJumbotron } from "../../constants/jumbotron";
import "./Drinks.scss"; 
import { drinkItems } from "../../constants/drinks";

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
                        <div className="drinks-top">
                            {drinkItems.map((drink) => (
                                <div key={drink.id}className="card">
                                    <h4>{drink.title}</h4>
                                    <p>{drink.description}</p>
                                    <p>{drink.price}</p>
                                </div>
                            ))}
                        </div>
                        <div className="drinks-mid">
                            <p>All of our drinks are served with tapioca</p>
                            <p>Check back next season for our new collection</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Drinks