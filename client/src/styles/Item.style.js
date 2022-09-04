import styled from "styled-components"; 

export const ItemContainer = styled.div`
    max-width: 420px; 
    margin: 0 auto; 
`
export const Card = styled.div`
    margin-bottom: 20px; 
`
export const CardImg = styled.img`
    height: 280px; 
    width: 100%; 
    object-fit: cover; 
`
export const CardBody = styled.div`
    font-family: "Poppins", sans-serif; 
`
export const CardTitle = styled.h3`
    font-size: 16px; 
    margin: 10px 0; 
`
export const CardDescription = styled.p`
    font-size: 14px; 
    font-style: italic; 
    margin: 10px 0;
`
export const CardPrice = styled.p`
    font-size: 15px; 
    margin: 10px 0;
`
export const CardBtn = styled.button`
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
    cursor: pointer; 
`