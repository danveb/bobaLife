import { Jumbotron } from "../index"; 
import { heroJumbotron } from "../../constants/jumbotron"; 
import { heroCards } from "../../constants/hero"; 
import boba from "../../assets/hero/boba2.webp"; 
import { HeroContainer, Wrapper, Gallery, Mid, Card, Img, Main, Left, LeftH1, LeftImg, Right, RightH3, RightP } from "../../styles/Hero.style";

const Hero = () => {
    // destructure id, head, text from heroJumbotron
    const { id, head, text } = heroJumbotron[0]; 

    return (
        <HeroContainer>
            <Jumbotron id={id} head={head} text={text} />
            <Wrapper>
                <Gallery>
                    <Mid>
                        {heroCards.map((card) => (
                            <Card key={card.id} className="hero-card">
                                <Img src={card.img} alt={card.alt} />
                            </Card>
                        ))}
                    </Mid>
                </Gallery>
                <Main>
                    <Left>
                        <LeftH1>let's #bobaLife</LeftH1>
                        <LeftImg src={boba} alt="milk tea" />
                    </Left>
                    <Right>
                        <RightH3>Why bobaLife?</RightH3>
                        <RightP>We have only one obsession, and you guessed it right: boba. Some call it boba, some call it bubble tea, but we all know this word is interchangeable. Life is so short and we are just passionate to share boba to the world. This is exactly what makes us who we are. We want to welcome you to a friendly atmosphere delicately curated to serve you a world-class boba on every single cup. <span>Welcome to bobaLife.</span></RightP>
                    </Right>
                </Main>
            </Wrapper>
        </HeroContainer>
    )
}

export default Hero 