import React from "react";

const Result = ({
  score,
  totalQuestions,
  answers,
  questions,
  handleRestart
}) => {
  const calculatePercentage = () => {
    return (score / totalQuestions) * 100;
  };

  return (
    <div className="result">
      <h2>Exam Result</h2>
      <p>
        You scored {score} out of {totalQuestions}.
      </p>
      <p>Percentage: {calculatePercentage()}%</p>
      <h3>Answers</h3>
      <ul className="answers-list">
        {questions.map((question, index) => (
          <li
            key={index}
            className={`answer ${
              answers[index] === question.correctAnswer
                ? "correct"
                : "incorrect"
            }`}
          >
            {question.questionText}
            {answers[index] !== question.correctAnswer && (
              <>
                <br></br>
                <span className="incorrect-answer">
                  Your Answer: {answers[index]}
                </span>
                <br></br>
                <span className="correct-answer">
                  Correct Answer: {question.correctAnswer}
                </span>
                {question.explanation && (
                  <p className="explanation">{question.explanation}</p>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
      <button className="restart-button" onClick={handleRestart}>
        Restart Exam
      </button>
    </div>
  );
};

export default Result;
