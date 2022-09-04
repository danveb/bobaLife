import styled from "styled-components"; 
import { device } from "../styled";

export const JumbotronContainer = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    flex-direction: column; 
    background-color: #57cc99; 
    padding: 30px 50px; 

    @media ${device.tablet} {
        padding: 30px 35px; 
    }

    @media ${device.mobile} {
        padding: 20px; 
    }
`
export const Wrapper = styled.div`
    height: 35vh; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    border: 5px solid var(--rich-black); 
    margin: 0 auto; 
`
export const Main = styled.div`
    padding: 20px; 
`
export const H1 = styled.h1`
    text-transform: uppercase; 
    font-size: 70px; 
    font-weight: 400; 
    text-align: center; 
    margin-bottom: 20px; 

    @media ${device.tablet} {
        font-size: 50px; 
    }

    @media ${device.mobile} {
        font-size: 30px; 
    }
`
export const P = styled.p`
    text-transform: lowercase; 
    font-size: 26px; 
    font-weight: 400; 
    text-align: center; 
    margin-bottom: 20px; 
`