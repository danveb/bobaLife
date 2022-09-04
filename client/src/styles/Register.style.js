import styled from "styled-components";
import { device } from "../styled";

export const RegisterContainer = styled.div`
    height: calc(100vh - 79px); 
    width: 100%; 
    padding: 40px 24px; 
    display: flex; 
    flex-direction: column; 
    color: var(--rich-black); 
`
export const Wrapper = styled.div`
    max-width: 1400px; 
    width: 50%; 
    margin: 0 auto; 

    @media ${device.tablet} {
        width: 80%;
    }
    @media ${device.mobile} {
        width: 100%;
    }
`
export const Main = styled.div`
    font-family: "Prata", sans-serif; 
`
export const H1 = styled.h1`
    font-size: 56px; 
    margin-bottom: 10px; 

    @media ${device.tablet} {
        font-size: 40px; 
    }
`
export const P = styled.p`
    font-family: "Poppins", sans-serif; 
    font-size: 14px; 
    margin-bottom: 20px; 
`
export const Form = styled.form`
    display: flex; 
    flex-direction: column; 
    width: 100%;  
    padding: 2rem; 
    border-radius: 10px; 
    background-color: lightgoldenrodyellow;

    & a {
        color: var(--rich-black); 
        text-decoration: none; 
        text-align: right;
        font-size: 13px; 
        cursor: pointer; 
    }
`
export const Label = styled.label`
    line-height: 1em; 
    letter-spacing: .1em; 
    font-size: 11px; 
    text-transform: uppercase; 
    color: var(--rich-black); 
    margin-bottom: 10px; 
`
export const Input = styled.input`
    line-height: 1em; 
    outline: 0; 
    border: 1px solid var(--rich-black); 
    padding: 0.875rem 0.75rem; 
    width: 100%; 
    font-size: 12px; 
    color: var(--rich-black); 
    margin-bottom: 15px; 
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