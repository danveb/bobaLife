import styled from "styled-components"; 

export const Form = styled.form`
    display: flex; 
    flex-direction: column; 
`
export const Label = styled.label`
    line-height: 1em; 
    letter-spacing: .1em;
    font-size: 12px; 
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
export const CheckoutBtn = styled.button`
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