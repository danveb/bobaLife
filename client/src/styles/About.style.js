import styled from "styled-components";
import { device } from "../styled";

export const AboutContainer = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    padding: 0 24px 0 24px; 
`
export const Wrapper = styled.div`
    height: 100%; 
    padding: 30px 0; 
    max-width: 1400px; 
    width: 72%; 

    @media ${device.mobile} {
        width: 90%; 
    }
`
export const Content = styled.div``
export const EmptyDiv = styled.div``
export const Img = styled.img`
    width: 100%; 
    height: ${props=>props.type === "main" ? "40vh" : "350px"}; 
    object-fit: cover; 
`
export const Text = styled.p`
    margin: 17px 0; 
    line-height: 1.5rem; 
    font-size: 17px; 
    padding: 20px; 
    border: 1.5px solid var(--bottle-green); 
`
export const Mid = styled.div`
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

        & :nth-child(4) {
            grid-column: auto;
        }
        & :nth-child(5) {
            grid-column: auto;
        }
    }

    @media ${device.mobile} {
        grid-template-columns: repeat(1, 1fr); 
    }
`
export const Card = styled.div`
    margin-bottom: 20px; 
`
export const CardText = styled.p`
    font-size: 13px; 
    text-align: center; 
    line-height: 1.5rem; 
    margin-top: 10px; 
`