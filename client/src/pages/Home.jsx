import { Announcement, Navbar, Hero, About, Newsletter, Footer } from "../components"; 

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Hero />
            <About /> 
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home