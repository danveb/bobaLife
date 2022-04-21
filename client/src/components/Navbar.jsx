import { Link, useNavigate } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux"; 
import { logout, reset } from "../redux/auth/authSlice"; 
import { linkItems } from "../constants/data";
import { GiBoba } from "react-icons/gi"; 
import "./Navbar.scss"; 

const Navbar = () => {
    // useNavigate
    const navigate = useNavigate(); 

    // useDispatch 
    const dispatch = useDispatch(); 

    // useSelector
    const { user } = useSelector((state) => state.auth); 

    const handleLogout = () => {
        dispatch(logout()); 
        dispatch(reset());
        navigate("/"); 
    }

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
                    { user ? (
                        <button className="btn-link" onClick={handleLogout}>
                            Logout
                        </button>
                    ) : (
                        <>
                        <li className="nav-menuItem">
                            <Link to="/login">Login</Link>
                        </li>
                        <li className="nav-menuItem">
                            <Link to="/register">Register</Link>
                        </li>
                        </>
                    )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar