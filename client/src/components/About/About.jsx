import { Jumbotron, Footer } from "../index"; 
import { aboutJumbotron } from "../../constants/jumbotron";
import { aboutTop, aboutCard } from "../../constants/about"; 
import { AboutContainer, Wrapper, Content, EmptyDiv, Img, Text, Mid, Card, CardText } from "../../styles/About.style"; 

const About = () => {
    // destructure id, head, text from Jumbotron
    const { id, head, text } = aboutJumbotron[0]; 
    
    return (
        <>
            <AboutContainer>
                <Jumbotron id={id} head={head} text={text} />
                <Wrapper>
                    <Content>
                        {aboutTop.map((top) => (
                            <EmptyDiv key={top.id}>
                                <Img type="main" src={top.img} alt={top.alt} />
                                <Text>{top.text}</Text>
                            </EmptyDiv>
                        ))}
                        <Mid>
                            {aboutCard.map((card) => (
                                <Card key={card.id} className="card">
                                    <Img src={card.img} alt={card.alt} />
                                    <CardText>{card.text}</CardText>
                                </Card>
                        ))}
                            </Mid>
                        </Content>
                    </Wrapper>
            </AboutContainer>
            <Footer />
        </>
    )
}

export default About