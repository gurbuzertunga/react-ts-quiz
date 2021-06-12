import React from 'react';

type Props = {
  question: string;
  answers: string[];
  callBack: any;
  userAnswer: any;
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
              <button disabled={userAnswer} value={answer} onClick={callBack}>
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
