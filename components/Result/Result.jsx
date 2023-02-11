import { StyledSection, StyledSubHeader, StyledImage, StyledTinyHeader,StyledButton } from "./elements";

const animationStyles={
    initial:{y:300,opacity:0},
    animate:{y:0,opacity:1},
    exit:{opacity:0,transition:{duration:0.5}},
    transition:{ duration: 1, delay: 0.5, }  
}



const Result = ({ responses,setIndex,setResponse }) => {
    let givenPoints = responses.filter(x => x == 'true');
    let points=givenPoints.length;

    const clickHandler=()=>{
         setIndex(index=>index=0);
         setResponse(responses=>responses=[])
    }

    return (
        <StyledSection key={11} {...animationStyles}  >
            <StyledSubHeader>Result: {points} of 10</StyledSubHeader>
            {points <= 5 ?
                <>
                    <StyledTinyHeader>You have much to learn!!</StyledTinyHeader>
                    <StyledImage src={'/images/cat.png'} width={170} height={150} alt='meme' />
                </>
                : null
            }
             {points > 5 && points < 10 ?
                <>
                    <StyledTinyHeader>Not bad.Try harder next time!</StyledTinyHeader>
                    <StyledImage src={'/images/shia.png'} width={170} height={170} alt='meme' />
                </>
                : null
            }
            {points == 10 ?
                <>
                    <StyledTinyHeader>CONGRATULATIONS!<br/>You did great.</StyledTinyHeader>
                    <StyledImage src={'/images/chuck.webp'} width={180} height={180} alt='meme' />
                </>
                : null
            }
            <StyledButton onClick={clickHandler}>Try Again</StyledButton>

        </StyledSection>

    )


};

export default Result