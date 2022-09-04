import styled from "styled-components"; 
import { device } from "../styled";

export const HeroContainer = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
    padding: 0 24px 0 24px; 
`
export const Wrapper = styled.div`
    width: 100%;
    height: 100%; 
    padding: 30px 0; 
`
export const Gallery = styled.div`
    max-width: 1400px; 
    margin: 0 auto; 
    margin-bottom: 30px; 

    @media ${device.laptop} {
        flex-direction: column; 
    }
`
export const Mid = styled.div`
    display: flex; 
    justify-content: space-between; 
    flex-wrap: wrap; 
`
export const Card = styled.div`
    flex: 0 1 32%; 
    position: relative;
`
export const Img = styled.img`
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
`
export const Main = styled.div`
    display: flex; 
    max-width: 1400px; 
    margin: 0 auto; 
    flex-direction: row; 

    @media ${device.laptop} {
        flex-direction: column; 
    }
`   
export const Left = styled.div`
    flex: 1; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    position: relative; 
`
export const LeftH1 = styled.h1`
    position: absolute; 
    top: 70px; 
    right: 20px; 
    font-family: "Poppins", sans-serif; 
    font-weight: 300; 
    font-size: 22px;

    @media ${device.laptop} { 
        top: 150px; 
        font-size: 35px; 
    }
    @media ${device.tablet} { 
        top: 110px; 
        font-size: 26px; 
    }
    @media ${device.mobile} { 
        top: 16px; 
        right: 10px;
        font-size: 16px; 
    }
`
export const LeftImg = styled(Img)`
    border-radius: 1px; 

    @media ${device.laptop} { 
        height: 750px; 
    }
    @media ${device.tablet} { 
        height: 550px; 
    }
    @media ${device.mobile} { 
        height: 300px; 
    }
`
export const Right = styled.div`
    flex: 1; 
    display: flex; 
    justify-content: center; 
    flex-direction: column;    
    padding: 40px; 

    @media ${device.mobile} {
        padding: 20px 0 0 0; 
    }
`
export const RightH3 = styled.h3`
    font-family: "Lora", sans-serif; 
    font-family: inherit; 
    font-size: 26px; 
    font-weight: 400; 
    text-transform: uppercase; 
    text-align: center; 

    & span {
        color: var(--bottle-green); 
    }

    @media ${device.tablet} {
        font-size: 22px; 
    }
`
export const RightP = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 200; 
    margin: 20px 0; 
    line-height: 2; 
    text-align: center; 

    > span {
        font-style: italic; 
        border: 3px solid rgba(229, 237, 80, 0.756); 
        background-color: rgba(229, 237, 80, 0.756); 
    }

    @media ${device.tablet} {
        font-size: 14px; 
        margin: 10px 0; 
    }
`