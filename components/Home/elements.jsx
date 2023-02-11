import styled, { keyframes } from "styled-components";
import Link from "next/link";


let scale = keyframes`
   0% {transform:scale(1)};
   25% {transform:scale(1.1)};
   50% {transform:scale(1.2)};
   75% {transform:scale(1.1)};
   100% {transform:scale(1)};
`

export const StyledContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 2rem;
`
export const StyledParagraph = styled.p`
  padding: 0 2%;
  text-align: center;
  font-size: 16px;
  color: var(--primary-grey);
  @media screen and (min-width: 500px){
   width:90%;
   font-size: 18px;
 }
  @media screen and (min-width: 650px){
   width:76%;  
 }
  @media screen and (min-width: 1120px){
   width:55%;  
 }
 
`

export const StyledLink = styled(Link)`
    padding: 0.7rem 1rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 6px;
    border: none;
    outline: 2px solid var(--primary-grey);
    cursor: pointer;
    background-color: var(--primary-orange);
    color: var(--primary-grey);
    letter-spacing: 1px;
    animation: ${scale} 3s linear infinite;
    box-shadow: 3px 4px 12px 3px rgb(255 255 255 / 75%);
    
   &:hover{
    animation: none;
   }
  
   @media screen and (min-width: 900px){
   padding: 0.7rem 1.5rem;
 }

`