import { useState } from "react"; 
import { Link, useNavigate } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux"; 
import { logout, reset } from "../../redux/auth/authSlice"; 
import { links } from "../../constants/links";
// import { motion } from "framer-motion"; 
// import { GiBoba } from "react-icons/gi"; 
// import { BiDotsVerticalRounded, BiArrowToRight } from "react-icons/bi"; 
import "./Navbar.scss"; 
import { FaRegUserCircle } from "react-icons/fa"; 

const Navbar = ({ menuOpen, setMenuOpen }) => {
    // useState 
    const [toggle, setToggle] = useState(false); 

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
        // <div className="nav-container">
        //     <div className="nav-wrapper">
        //         <div className="nav-left">
        //             <a href="#home">
        //                 <GiBoba />
        //             </a>
        //         </div>
        //         <div className="nav-center">
        //             <a href="#home">
        //                 <h1>bobaLife</h1>
        //             </a>
        //         </div>
        //         <div className="nav-right">
        //             <ul>
        //             {linkItems.map((item) => (
        //                 <li key={item.id} className="nav-menuItem">
        //                     <a href={item.url}>
        //                         {item.text}
        //                     </a>
        //                 </li>
        //             ))}
        //             { user ? (
        //                 <button className="btn-link" onClick={handleLogout}>
        //                     Logout
        //                 </button>
        //             ) : (
        //                 <>
        //                 <li className="nav-menuItem">
        //                     <Link to="/login">Login</Link>
        //                 </li>
        //                 <li className="nav-menuItem">
        //                     <Link to="/register">Register</Link>
        //                 </li>
        //                 </>
        //             )}
        //             </ul>
        //         </div>
        //         <div className="nav-mobile">
        //             <BiDotsVerticalRounded onClick={() => setToggle(true)} />
        //                 {toggle && (
        //                     <motion.div
        //                         whileInView={{ x: [100, 0] }}
        //                         transition={{ duration: 0.45, ease: 'easeOut' }}
        //                     >
        //                         <BiArrowToRight onClick={() => setToggle(false)} />
        //                             <ul>
        //                             {linkItems.map((item) => (
        //                                 <li key={item.id} >
        //                                     <a href={item.url} onClick={() => setToggle(false)} >
        //                                         {item.text}
        //                                     </a>
        //                                 </li>
        //                             ))}
        //                             { user ? (
        //                                 <button onClick={handleLogout}>
        //                                     Logout
        //                                 </button>
        //                             ) : (
        //                                 <>
        //                                 <li>
        //                                     <Link to="/login" onClick={() => setToggle(false)} >Login</Link>
        //                                 </li>
        //                                 <li>
        //                                     <Link to="/register" onClick={() => setToggle(false)} >Register</Link>
        //                                 </li>
        //                                 </>
        //                             )}
        //                             </ul>
        //                     </motion.div>
        //                 )}
        //         </div>
        //     </div>
        // </div>
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
                        {/* { user ? (
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
                        )} */}
                    </ul>
                </div>
                <div className="nav-right">
                    <Link to="/login"><FaRegUserCircle /></Link>
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