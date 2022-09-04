import { JumbotronContainer, Wrapper, Main, H1, P } from "../../styles/Jumbotron.style"

const Jumbotron = ({ id, head, text }) => {
    return (
        <JumbotronContainer>
            <Wrapper>
                <Main id={id}>
                    <H1>{head}</H1>
                    <P>{text}</P>
                </Main>
            </Wrapper>
        </JumbotronContainer>
    )
}

export default Jumbotron