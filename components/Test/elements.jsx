import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSection=styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;    
`
export const StyledSubHeader=styled(motion.h2)`
 color: var(--primary-grey);
 font-size: 3rem;
 margin-bottom: 2%;
 transition-duration: 500ms;
`

