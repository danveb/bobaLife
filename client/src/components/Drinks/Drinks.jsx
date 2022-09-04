import { Jumbotron, Footer } from "../index"; 
import { drinksJumbotron } from "../../constants/jumbotron";
import { drinkItems } from "../../constants/drinks";
import { DrinksContainer, Wrapper, Top, Card, H4, P, Mid, MidP } from "../../styles/Drinks.style";

const Drinks = () => {
    // destructure id, head, text from Jumbotron
    const { id, head, text } = drinksJumbotron[0]; 
    
    return (
        <>
            <DrinksContainer>
                <Jumbotron id={id} head={head} text={text} />
                <Wrapper>
                    <Top>
                        {drinkItems.map((drink) => (
                            <Card key={drink.id}>
                                <H4>{drink.title}</H4>
                                <P>{drink.description}</P>
                                <P>{drink.price}</P>
                            </Card>
                        ))}
                    </Top>
                    <Mid>
                        <MidP>All of our drink are served with tapioca</MidP>
                        <MidP>Check back next season for our new collection</MidP>
                    </Mid>
                </Wrapper>
            </DrinksContainer>
            <Footer />
        </>
    )
}

export default Drinks