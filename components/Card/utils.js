
export const filterData=(answers, correct_answers) =>{
    let answersArray = Object.values(answers).filter(x => x != null);
    let correntAnswerArray = Object.entries(correct_answers).find(([key, value]) => value != "false")
    let correctAnswer = correntAnswerArray[0];
    correctAnswer = correctAnswer[7];

    return [answersArray, correctAnswer]
}

export const animationStyles={
    initial:{x:150,opacity:0},
    animate:{x:0,opacity:1},
    exit:{x:-300,opacity:0,transition:{duration:0.5}},
    transition:{ duration: 1, delay: 0.2, }  
}
