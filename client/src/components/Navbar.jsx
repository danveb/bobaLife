import { linkItems } from "../constants/data";
import { GiBoba } from "react-icons/gi"; 
import "./Navbar.scss"; 

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="nav-wrapper">
                <div className="nav-left">
                    <a href="#home">
                        <GiBoba />
                    </a>
                </div>
                <div className="nav-center">
                    <a href="#home">
                        <h1>bobaLife</h1>
                    </a>
                </div>
                <div className="nav-right">
                    <ul>
                    {linkItems.map((item) => (
                        <li key={item.id} className="nav-menuItem">
                            <a href={item.url}>
                                {item.text}
                            </a>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar