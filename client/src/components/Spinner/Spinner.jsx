import { SpinnerContainer, Loading, Msg } from "../../styles/Spinner.style"

const Spinner = () => {
    return (
        <SpinnerContainer>
            <Loading></Loading>
            <Msg>loading... please wait</Msg>
        </SpinnerContainer>
    )
}

export default Spinner 