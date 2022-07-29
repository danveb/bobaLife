import { Link, useNavigate } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux"; 
import { logout, reset } from "../../redux/auth/authSlice"; 
import { links } from "../../constants/links";
import { FaRegUserCircle } from "react-icons/fa"; 
import { MdLogout } from "react-icons/md"; 
import "./Navbar.scss"; 

const Navbar = ({ menuOpen, setMenuOpen }) => {
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
    }; 

    return (
        <div className="navbar">
            <div className={"nav-wrapper " + (menuOpen && "active")}>
                <div className="nav-left">
                    <Link to="/" className="logo">bobaLife</Link>
                </div>
                <div className="nav-center">
                    <ul className="nav-links">
                        {links.map((link) => (
                            <li key={link.id}>
                                <Link to={`${link.path}`}>
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="nav-right">
                    {user ? (
                        <MdLogout onClick={handleLogout} />
                        ) : (
                            <Link to="/login"><FaRegUserCircle /></Link>
                        )}
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar