import React from 'react';
// TYPES
import { AnswerObject } from '../App';

type Props = {
  question: string;
  answers: string[];
  callBack: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ question, answers, callBack, userAnswer, questionNumber, totalQuestions }) => {
  return (
    <div>
      <p className="number">Question: {questionNumber} / {totalQuestions}</p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {
          answers.map(answer => (
            <div key={answer}>
              <button disabled={userAnswer ? true : false} value={answer} onClick={callBack}>
                <span dangerouslySetInnerHTML={{ __html: answer}} />
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default QuestionCard;
