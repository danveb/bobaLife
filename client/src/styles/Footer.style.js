import styled from "styled-components"; 
import { device } from "../styled";

export const FooterContainer = styled.div`
    padding: 0 24px 24px 24px; 
`
export const Wrapper = styled.div`
    display: flex; 
    width: 100%; 
    background-color: #57cc99; 

    @media ${device.tablet} {
        flex-direction: column; 
    }
    @media ${device.mobile} {
        padding: 10px;  
    }
`
export const Left = styled.div`
    flex: 1; 
    padding: 30px; 

    @media ${device.tablet} {
        padding: 20px 10px 10px 10px; 
    }
`
export const H3 = styled.h3`
    font-size: 18px; 
    font-weight: 400; 
    margin-bottom: 15px; 

    @media ${device.tablet} {
        margin-bottom: 20px; 
    }
`
export const Contact = styled.div`
    margin-bottom: 20px; 
    display: flex; 
    align-items: center; 
    font-size: 14px; 

    > svg {
        width: 20px; 
        height: 20px; 
        margin-right: 10px; 
    }

    @media ${device.tablet} {
        margin-bottom: 10px; 
    }
`
export const Center = styled.div`
    flex: 1; 
    padding: 30px; 

    @media ${device.tablet} {
        padding: 10px; 
    }
`   
export const Right = styled.div`
    flex: 1; 
    padding: 30px; 

    @media ${device.tablet} {
        padding: 10px; 
    }
`
export const P = styled.p`
    font-size: 14px; 
    margin-bottom: 10px; 
`
export const H5 = styled.h5`
    font-size: 11px; 
    font-weight: 200; 
    margin-bottom: 10px; 
`
export const Social = styled.div`
    display: flex; 
    width: 30px;
    height: 30px; 
    border-radius: 50%; 
    justify-content: center; 
    align-items: center; 
`
export const SocialA = styled.a`
    color: var(--alice-blue); 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    background-color: var(--rich-black); 
    padding: 5px; 
    border-radius: 50%; 
`