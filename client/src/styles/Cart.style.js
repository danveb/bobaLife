import styled from "styled-components";
import { device } from "../styled";

export const CartContainer = styled.div`
    padding: 0 24px 0 24px; 
`
export const Wrapper = styled.div`
    padding: 20px; 

    @media ${device.mobile} {
        padding: 10px;    
    }
`
export const Top = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center; 
    padding: 20px; 

    @media ${device.mobile} {
        padding: 0; 
    }
`
export const TopBtn = styled.button`
    font-family: "Quicksand", sans-serif; 
    height: 50px; 
    line-height: 1em; 
    letter-spacing: .13em; 
    font-size: 11px; 
    text-transform: uppercase; 
    margin-bottom: 10px; 
    cursor: pointer; 
    padding: 10px; 
    background: ${props=>props.type === "filled" ? "red" : "transparent"}; 
    color: ${props=>props.type === "filled" ? "var(--alice-blue)" : "var(--rich-black)"}; 
    border-radius: 2px;  

    @media ${device.tablet} {
        font-size: 9px; 
        padding: 5px; 
    }
`
export const Bottom = styled.div`
    display: flex; 
    justify-content: space-between; 

    @media ${device.tablet} {
        flex-direction: column;    
    }
`
export const Info = styled.div`
    flex: 3;
`
export const Product = styled.div`
    display: flex; 
    justify-content: space-between; 

    @media screen and (max-width: 480px) {
        flex-direction: column;    
    }
`
export const ProductDetail = styled.div`
    flex: 2;
    display: flex;  

    @media ${device.mobile} {
        flex-direction: column; 
        text-align: center; 
    }
`
export const Img = styled.img`
    width: 170px; 
    margin: 10px 0; 

    @media ${device.mobile} {
        width: 100%; 
    }
`
export const Details = styled.div`
    padding: 10px; 
    display: flex; 
    justify-content: space-around; 
    flex-direction: column; 
    font-family: "Poppins", sans-serif; 

    @media ${device.mobile} {
        padding: 0; 
    }
`
export const ProductName = styled.h3`
    font-size: 16px; 

    @media ${device.tablet} {
        margin-bottom: 15px; 
    }
`
export const ProductDescription = styled.p`
    font-size: 13px; 
    font-style: italic; 

    @media ${device.tablet} {
        margin-bottom: 15px; 
    }
`
export const ProductRemove = styled.a`
    font-size: 12px; 
    width: fit-content; 
    text-decoration: none; 
    color: dodgerblue; 
    cursor: pointer; 

    @media ${device.mobile} {
        margin: 0 auto;
    }
`
export const PriceDetail = styled.div`
    flex: 0.7;
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 
`
export const ProductAmountContainer = styled.div`
    display: flex; 
    align-items: center; 
`
export const QtyContainer = styled.div`
    margin: 30px 0px; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
`
export const QtyTitle = styled.div`
    margin: 0 15px; 
`
export const QtyBtn = styled.button`
    width: 25px; 
    height: 25px; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    background-color: gainsboro; 
    border: none; 
    border-radius: 100px; 
`
export const ProductPrice = styled.div`
    font-size: 20px; 
    font-weight: 200; 

    @media screen and (max-width: 480px) {
        margin-bottom: 20px;
    }
`
export const Hr = styled.hr`
    background-color: #eee; 
    border: none; 
    height: 1px; 
`
export const SummaryMain = styled.div`
    flex: 1; 
    border: 0.5px solid lightgray; 
    border-radius: 10px; 
    padding: 15px; 
    font-family: "Prata", sans-serif; 
`
export const SummaryTitle = styled.h2`
    font-size: 26px; 
`
export const SummaryItem = styled.div`
    margin: 25px 0px; 
    display: flex; 
    justify-content: space-between; 
`
export const SummaryText = styled.p`
    font-weight: ${props=>props.type === "total" && "400"}; 
    font-size: ${props=>props.type === "total" && "20px"};
    color: ${props=>props.type === "total" && "crimson"};
`
export const ReviewBtn = styled(TopBtn)`
    width: 100%; 
    background-color: var(--rich-black); 
    border: 2px solid var(--rich-black); 
    color: var(--white); 
    font-size: 11px; 
`
export const EmptyDiv = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center; 
`
export const EmptyTitle = styled.h3`
    font-family: "Prata", sans-serif; 
    color: var(--venetian-red); 
    font-size: 18px; 
    font-weight: 200; 
`