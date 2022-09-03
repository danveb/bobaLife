import { Navbar, Menu, Jumbotron, Footer } from "../index"; 
import { aboutJumbotron } from "../../constants/jumbotron";
import { aboutTop, aboutCard } from "../../constants/about"; 
import styled from "styled-components";
import { device } from "../../styled";

const AboutContainer = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    padding: 0 24px 0 24px; 
`
const AboutWrapper = styled.div`
    height: 100%; 
    padding: 30px 0; 
    max-width: 1400px; 
    width: 72%; 

    @media ${device.mobile} {
        width: 90%; 
    }
`
const AboutContent = styled.div``
const EmptyDiv = styled.div``
const AboutImg = styled.img`
    width: 100%; 
    height: ${props=>props.type === "main" ? "40vh" : "350px"}; 
    object-fit: cover; 
`
const AboutText = styled.p`
    margin: 17px 0; 
    line-height: 1.5rem; 
    font-size: 17px; 
    padding: 20px; 
    border: 1.5px solid var(--bottle-green); 
`
const AboutMid = styled.div`
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    gap: 10px; 
    width: 100%; 
    margin: 0 auto;

    & :nth-child(4) {
        grid-column: span 3;
    }
    & :nth-child(5) {
        grid-column: span 3;
    }

    @media ${device.tablet} {
        grid-template-columns: repeat(2, 1fr); 
    }

    @media ${device.mobile} {
        grid-template-columns: repeat(1, 1fr); 
    }
`
const AboutCard = styled.div`
    margin-bottom: 20px; 
`
const AboutCardText = styled.p`
    font-size: 13px; 
    text-align: center; 
    line-height: 1.5rem; 
    margin-top: 10px; 
`

const About = ({ menuOpen, setMenuOpen }) => {
    // destructure id, head, text from Jumbotron
    const { id, head, text } = aboutJumbotron[0]; 
    
    return (
        <>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <AboutContainer>
                <Jumbotron id={id} head={head} text={text} />
                <AboutWrapper>
                    <AboutContent>
                        {aboutTop.map((top) => (
                            <EmptyDiv key={top.id}>
                                <AboutImg type="main" src={top.img} alt={top.alt} />
                                <AboutText>{top.text}</AboutText>
                            </EmptyDiv>
                        ))}
                        <AboutMid>
                            {aboutCard.map((card) => (
                                <AboutCard key={card.id} className="card">
                                    <AboutImg src={card.img} alt={card.alt} />
                                    <AboutCardText>{card.text}</AboutCardText>
                                </AboutCard>
                        ))}
                            </AboutMid>
                        </AboutContent>
                    </AboutWrapper>
            </AboutContainer>
            <Footer />
        </>
    )
}

export default About