import { Link, useNavigate } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux"; 
import { logout, reset } from "../../redux/auth/authSlice"; 
import { clearCart } from "../../redux/cart/cartSlice";
import { links } from "../../constants/links";
import { Badge } from "@mui/material"; 
import { AccountCircle, ShoppingBasket, PowerSettingsNew } from "@mui/icons-material"
import "./Navbar.scss"; 
import { toast } from "react-toastify"; 

const Navbar = ({ menuOpen, setMenuOpen }) => {
    // useNavigate
    const navigate = useNavigate(); 

    // useDispatch 
    const dispatch = useDispatch(); 

    // useSelector
    const { user } = useSelector((state) => state.auth); 
    const { cartItems } = useSelector((state) => state.cart); 

    const handleLogout = () => {
        dispatch(logout()); 
        dispatch(reset());
        dispatch(clearCart()); 
        toast.info(`Sad to see you go ${user.username} 😭 `, {
            position: "top-center", 
            autoClose: 2000, 
            pauseOnHover: false, 
        });
        navigate("/"); 
    }; 

    const cartQty = () => {
        return cartItems.reduce((acc, item) => acc + item.qty, 0); 
    }; 

    return (
        <div className="navbar">
            <div className={"nav-wrapper " + (menuOpen && "active")}>
                <div className="nav-left">
                    <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>bobaLife</Link>
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
                        <PowerSettingsNew onClick={handleLogout} />
                        ) : (
                            <Link to="/login"><AccountCircle onClick={() => setMenuOpen(false)}/></Link>
                        )}
                    <Link to="/cart">
                        <Badge color="primary" badgeContent={cartQty()}>
                            <ShoppingBasket onClick={() => setMenuOpen(false)}/>
                        </Badge>
                    </Link>
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