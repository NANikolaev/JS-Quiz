import { StyledContainer,StyledLink,StyledParagraph } from "./elements";

 const Home=()=>{
   
    return(
        <StyledContainer>
            <StyledParagraph>
            The test contains 10 questions and there is a <u>30 seconds</u> time limit for each question.
            You will get 1 point for each correct answer. At the end of the Quiz, your total score will be displayed.
            Maximum score is 10 points.
            </StyledParagraph>
            <StyledLink href="/test">START</StyledLink>  
        </StyledContainer>
    )

}
export default Home