import styled,{ keyframes } from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

let scale=keyframes`
   0% {transform:scale(1)};
   25% {transform:scale(1.1)};
   50% {transform:scale(1.2)};
   75% {transform:scale(1.1)};
   100% {transform:scale(1)};
`

export const StyledSection = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  gap: 30px;
  background: var(--lin-gradient);
  width: 80%;
  min-height: 200px;
  padding: 1% 2%;
  border-radius: 6px;
  box-shadow: 3px 4px 12px 3px rgb(255 255 255 / 75%); 

  @media screen and (min-width: 500px){
   width: 70%;
 }
 @media screen and (min-width: 750px){
   width: 60%;
 }
 @media screen and (min-width: 1200px){
   width: 55%;
 }
 @media screen and (min-width: 1300px){
   width: 50%;
 }

 @media screen and (min-width: 1500px){
   width: 40%;
 }

`
export const StyledSubHeader=styled.h2`
 color: var(--primary-grey);
 font-size: 2rem;
 transition-duration: 500ms;
 transition-delay: 200ms;
 
 @media screen and (min-width: 600px){
   font-size: 3rem;
 }

`
export const StyledTinyHeader=styled.h3`
 font-size: 1.2rem;
 font-weight: 600;
 text-align: center;
 color: var(--secondary-orange);

 @media screen and (min-width: 600px){
   font-size: 1.5rem;
 }
`
export const StyledImage=styled(Image)`
display: none;
position: absolute;
right: 0;
bottom: 0;

@media screen and (min-width: 1100px){
   display: block;
 }
`
export const StyledButton = styled.button`
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
    text-transform: uppercase;
    animation: ${scale} 3s linear infinite;
    box-shadow: 3px 4px 12px 3px rgb(255 255 255 / 75%);
    
   &:hover{
    animation: none;
   }
   @media screen and (min-width: 900px){
   padding: 0.7rem 1.5rem;
 }

`