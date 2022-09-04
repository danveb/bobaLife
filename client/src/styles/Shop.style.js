import styled from "styled-components"; 
import { device } from "../styled";

export const ShopContainer = styled.div`
    padding: 0 24px 0 24px; 
`
export const Wrapper = styled.div`
    max-width: 1400px; 
    display: flex; 
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto; 
    padding: 20px 0; 

    @media ${device.mobile} {
        padding: 10px;    
    }
`
export const Row = styled.div`
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    gap: 20px; 
    width: 100%; 
    margin: 0 auto;

    @media ${device.tablet} {
        grid-template-columns: repeat(2, 1fr); 
    }

    @media ${device.mobile} {
        grid-template-columns: repeat(1, 1fr); 
    }
`
export const Icon = styled.div`
    background-color: var(--rich-black); 
    position: fixed; 
    bottom: 35px; 
    right: 5%; 
    padding: 15px; 
    border-radius: 50%; 
    box-shadow: 0 2px 3px darkgray;
`
export const EmptyDiv = styled.div``