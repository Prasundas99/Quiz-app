import { type } from 'node:os';
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
        <h1>Hello</h1>
        </>
    );
};


export default QuestionCard;
