import { useNavigate } from "react-router-dom"
import { Jumbotron } from "../../index"; 
import { cancelledJumbotron } from "../../../constants/jumbotron";
import { CancelledContainer, Wrapper, Main, Btn } from "../../../styles/Cancelled.style";

const Cancelled = () => {
    // destructure id, head, text from jumbotron
    const { id, head, text } = cancelledJumbotron[0]; 

    // useNavigate
    const navigate = useNavigate(); 

    return (
        <CancelledContainer>
            <Jumbotron id={id} head={head} text={text} />
            <Wrapper>
                <Main>
                    <Btn onClick={() => navigate("/cart")}>Back To Basket</Btn>
                </Main>
            </Wrapper>
        </CancelledContainer>
    )
}

export default Cancelled