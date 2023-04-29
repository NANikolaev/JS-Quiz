import { StyledArticle,StyledTinyHeader, StyledParagraph, StyledList, StyledItem, StyledButton, StyledBar } from "./elements";
import { filterData,animationStyles } from "./utils";


const Card = ({
    question,
    answers,
    correct_answers,
    setIndex,
    setResponse
}) => {
    const [answersArray, correctAnswer] = filterData(answers, correct_answers);
    const letters = ['a', 'b', 'c', 'd'];
    const timer = setTimeout(() => {
       setIndex(index => index += 1)
       setResponse(arr => [...arr, 'false'])
    }, 30000);

    const clickHandler = (e) => {
        let response = e.target.textContent;
        clearTimeout(timer)
        if (response == correctAnswer) {
            setIndex(index => index += 1)
            setResponse(arr => [...arr, 'true'])
        }
        else {
            setIndex(index => index += 1);
            setResponse(arr => [...arr, 'false'])
        }
    }
    
    return (      
            <StyledArticle {...animationStyles} key={question}>
                <StyledBar></StyledBar>
                <StyledTinyHeader>{question}</StyledTinyHeader>
                <StyledList>
                    {answersArray.map((x, i) =>
                        <StyledItem key={i}>
                            <StyledButton onClick={clickHandler}>{letters[i]}</StyledButton>
                            <StyledParagraph>{x}</StyledParagraph>
                        </StyledItem>
                    )}
                </StyledList>
            </StyledArticle>
    )
};;



export default Card

