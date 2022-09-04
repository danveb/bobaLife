import styled from "styled-components"; 
import { device } from "../styled"; 

export const CancelledContainer = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    padding: 0 24px 0 24px; 
`
export const Wrapper = styled.div`
    max-width: 1400px; 
    width: 50%; 
    margin: 0 auto; 
    padding: 30px 0; 

    @media ${device.tablet} {
        width: 80%; 
    }
    @media ${device.mobile} {
        width: 100%; 
    }
`
export const Main = styled.div`
    display: flex; 
    flex-direction: column; 
`
export const Btn = styled.button`
    font-family: "Quicksand", sans-serif; 
    height: 50px; 
    width: 100%; 
    background-color: var(--rich-black); 
    border: 2px solid var(--rich-black); 
    line-height: 1em; 
    letter-spacing: .13em; 
    font-size: 11px; 
    text-transform: uppercase; 
    color: var(--white); 
    margin-bottom: 15px; 
    cursor: pointer; 
`