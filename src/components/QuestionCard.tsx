import React from 'react';

type Props = {
  question: string;
  answer: string[];
  callBack: any;
  userAnswer: string;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ question, answer, callBack, userAnswer, questionNumber, totalQuestions }) => {
  return (
    <div>
      
    </div>
  );
};

export default QuestionCard;
