import styled, { keyframes } from "styled-components";

// keyframes to be later called from SpinnerLoading
export const spinAnimation = keyframes`
    0% {
        transform: rotate(0deg); 
    }
    100% {
        transform: rotate(360deg); 
    }
`
export const SpinnerContainer = styled.div`
    position: fixed; 
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 10;
    display: flex; 
    justify-content: center; 
    align-items: center; 
`
export const Loading = styled.div`
    width: 64px; 
    height: 64px; 
    border: 8px solid; 
    border-color: var(--rich-black) transparent #555 transparent; 
    border-radius: 50%; 
    animation: ${spinAnimation} 1.2s linear infinite; 
`
export const Msg = styled.h3`
    font-family: "Prata", sans-serif; 
    font-size: 15px; 
    margin-left: 15px; 
`