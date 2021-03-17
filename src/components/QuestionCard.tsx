
import React from 'react';

type Props = {
	question: string;
	answer: string[];
	callback: any;
	questionno: number;
	totalQuestions: number;
};

const QuestionCard: React.FC<Props>  = ({question , answer, callback , questionno , totalQuestions}) => {
  
    return(
        <>
        <p className="number">
            Question: {questionno} / {totalQuestions}
        </p>    
        
        </>
    );
};
export default QuestionCard;
