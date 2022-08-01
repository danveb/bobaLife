import { Navbar, Menu, Hero, Newsletter, Footer } from "../components"; 

const Home = ({ menuOpen, setMenuOpen }) => {
    return (
        <div>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Hero />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home