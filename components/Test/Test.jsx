import { useState,useEffect} from "react";
import { AnimatePresence } from "framer-motion";
import { StyledSection, StyledSubHeader } from "./elements";

import Card from "../Card/Card";
import Result from "../Result/Result";


const Test = ({questions}) => {
  let [index, setIndex] = useState(0);
  let [responses, setResponse] = useState([]);
  
  return (
    <StyledSection >
      {index < 10 ? <AnimatePresence><StyledSubHeader exit={{x:-300,opacity:0}}>{index + 1}/10</StyledSubHeader></AnimatePresence> : null}
      {index >= questions.length
        ? <AnimatePresence mode="wait"><Result responses={responses} setIndex={setIndex} setResponse={setResponse}/></AnimatePresence>
        : <AnimatePresence mode="wait"><Card key={index} {...questions[index]} setIndex={setIndex} setResponse={setResponse} /></AnimatePresence>
      }
    </StyledSection>
  )
}
export default Test