import { Navbar, Menu, Hero, Footer } from "../components/index"; 

const Home = ({ menuOpen, setMenuOpen }) => {
    return (
        <div>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Hero />
            <Footer />
        </div>
    )
}

export default Home