import styled from "styled-components"; 
import { device } from "../styled";

export const DrinksContainer = styled.div`
    padding: 0 24px 0 24px; 
`
export const Wrapper = styled.div`
    padding: 30px; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    flex-direction: column; 
    max-width: 1400px; 
    width: 72%; 
    margin: 0 auto; 

    @media ${device.mobile} {
        width: 90%; 
    }
`
export const Top = styled.div`
    display: flex; 
    flex-wrap: wrap; 
    justify-content: space-between; 
    width: 100%;
    height: 100%; 

    @media ${device.tablet} { 
        flex-direction: column; 
    }
`
export const Card = styled.div`
    flex: 0 1 48%; 
    height: 210px; 
    width: 100%; 
    background-color: var(--rich-black); 
    display: flex; 
    justify-content: center; 
    flex-direction: column;
    padding-left: 30px; 
    margin-bottom: 25px; 

    @media ${device.tablet} {
        flex: none; 
        height: 150px; 
    }
`
export const H4 = styled.h4`
    color: var(--white); 
    font-size: 22px; 
    font-weight: 200;
    line-height: 2rem; 

    @media ${device.mobile} {
        font-size: 16px; 
    }
`
export const P = styled.p`
    font-family: "Prata", sans-serif; 
    color: var(--white); 
    font-size: 16px; 
    font-weight: 200; 
    line-height: 2rem; 

    @media ${device.mobile} {
        font-size: 14px; 
    }
`
export const Mid = styled.div``
export const MidP = styled.p`
    font-size: 14px; 
    font-weight: 300; 
    margin: 16px 0; 
    line-height: 1.5rem; 
    text-align: center; 
    color: lightslategray; 
`