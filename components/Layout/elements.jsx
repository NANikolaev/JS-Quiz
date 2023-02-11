import styled from "styled-components";

export const StyledHeader = styled.h1`
 font-size: 2.5rem;
 color: var(--primary-grey);
 text-align: center;
 padding-top: 2%;
 padding-bottom: 1%;

 @media screen and (min-width: 430px){
   font-size: 3rem;
 }
 @media screen and (min-width: 500px){
   font-size: 3.5rem;
 }
 @media screen and (min-width: 600px){
   font-size: 4rem;
 }
 @media screen and (min-width: 900px){
   font-size: 6rem;
 }

`