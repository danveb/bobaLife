import { Link } from "react-router-dom"; 
import { GiBoba } from "react-icons/gi"; 
import "./NavbarLimited.scss"; 

const NavbarLimited = () => {
    return (
        <div className="nav-limited-container">
            <div className="nav-limited-wrapper">
                <div className="nav-limited-left">
                    <Link to="/">
                        <GiBoba />
                    </Link>
                </div>
                <div className="nav-limited-center">
                    <Link to="/">
                        <h1>bobaLife</h1>
                    </Link>
                </div>
                <div className="nav-limited-right">
                    <ul>
                        <li className="nav-limited-menuItem">
                            <Link to="/login">Login</Link>
                        </li>
                        <li className="nav-limited-menuItem">
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavbarLimited