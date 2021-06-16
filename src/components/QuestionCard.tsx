import React from 'react';
// TYPES
import { AnswerObject } from '../App';
// styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

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
    <Wrapper>
      <p className="number">Question: {questionNumber} / {totalQuestions}</p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {
          answers.map(answer => (
            <ButtonWrapper
              correct={userAnswer?.correctAnswer === answer}
              userClicked={userAnswer?.answer === answer}
              key={answer}>
              <button disabled={userAnswer ? true : false} value={answer} onClick={callBack}>
                <span dangerouslySetInnerHTML={{ __html: answer}} />
              </button>
            </ButtonWrapper>
          ))
        }
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
