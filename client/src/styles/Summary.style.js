import styled from "styled-components"; 
import { device } from "../styled";

export const SummaryContainer = styled.div`
    padding: 20px 10px; 
    display: flex; 
    flex-direction: column; 
`
export const Main = styled.div`
    max-width: 1400px; 
    width: 50%; 
    margin: 0 auto; 
    display: flex; 
    justify-content: center; 
    flex-direction: column; 
    padding: 2rem; 
    border-radius: 10px; 
    background-color: lightgoldenrodyellow; 

    @media ${device.tablet} {
        width: 80%; 
    }

    @media ${device.mobile} {
        width: 100%; 
    }
`
export const H2 = styled.h2`
    font-family: "Prata", sans-serif; 
    font-size: 56px; 

    @media ${device.mobile} {
        font-size: 36px; 
    }
`
export const Item = styled.div`
    display: flex; 
    justify-content: space-between; 
    margin: 20px 0px; 
`
export const P = styled.p`
    font-family: "Poppins", sans-serif; 
    font-size: 15px; 
    font-weight: ${props=>props.type === "total" && "400"}; 
    font-size: ${props=>props.type === "total" && "20px"};
    color: ${props=>props.type === "total" && "crimson"}; 
`
export const BackBtn = styled.button`
    font-family: "Quicksand", sans-serif; 
    height: 50px; 
    width: 100%; 
    background-color: var(--venetian-red); 
    border: 2px solid red; 
    line-height: 1em; 
    letter-spacing: .13em; 
    font-size: 11px; 
    text-transform: uppercase; 
    color: var(--white); 
    cursor: pointer; 
`