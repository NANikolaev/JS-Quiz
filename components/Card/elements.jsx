import styled, { keyframes } from "styled-components";
import { motion} from "framer-motion";

let progress = keyframes`
  0% {
    width:0%;
    background: #099857;
   }
   60%{
    background: #f0f34b;
   }
  100% {
    width:100%;
    background: #d43434;
    }
`

export const StyledArticle = styled(motion.article)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  background: var(--secondary-grey);
  width: 90%;
  padding: 1% 2%;
  border-radius: 6px;
  box-shadow: 3px 4px 12px 3px rgb(255 255 255 / 75%); 

 @media screen and (min-width: 750px){
   width:85%;
 }
 @media screen and (min-width: 850px){
   width:75%;
 }
 @media screen and (min-width: 950px){
   width:67%;
 }
 @media screen and (min-width: 1050px){
   width: 61%;
 }
 @media screen and (min-width: 1200px){
   width: 55%;
 }
 @media screen and (min-width: 1350px){
   width: 50%;
 }
 @media screen and (min-width: 1500px){
   width: 45%;
 }
 @media screen and (min-width: 1650px){
   max-width: 750px;
 }
`
export const StyledBar = styled.div`
  height: 10px;
  border-radius: 10px;
  animation: ${progress} 30s linear infinite;
`
export const StyledTinyHeader=styled.h3`
  color:var(--primary-black);
  letter-spacing:1px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  @media screen and (min-width: 760px){
   font-size: 20px;
 }

`

export const StyledParagraph = styled.p`
  color:var(--secondary-white);
  letter-spacing:1px;
  font-size: 14px;
  font-weight: 400;

  @media screen and (min-width: 620px){
   font-size: 16px;
 }
 @media screen and (min-width: 690px){
   font-size: 18px;
 }
`
export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const StyledItem = styled.li`
  display: flex;
  background: var(--tertiary-grey);
  line-height: 2;
  gap: 20px;
  border-radius: 5px;
  overflow: hidden;
  transition: ease-in-out 300ms;

  &:hover{
    box-shadow: -7px 7px 3px -2px rgb(56 51 38 / 75%);
    transform: scale(1.02);
    & button{
        background-color: var(--primary-white);
        color:var(--primary-orange) ;
    }
  }
`
export const StyledButton = styled.button`
  cursor: pointer;
  color: var(--primary-black);
  background-color: var(--primary-orange);
  text-transform:uppercase;
  min-width: 8%;
  font-weight: 600;
  font-size: 20px;
  border: none;
  transition:ease-in-out 300ms;
`