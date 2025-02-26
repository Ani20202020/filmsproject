import { useContext } from "react";
import { QuizContext } from "../../context/quizcontext";
import { Options } from "./option";
import "./option.css";



export const Questions = () => {
  const { questions, index, dispatch, answer } = useContext(QuizContext);
  const question = questions[index];

  const handleAnswerClick = (option) => {
    dispatch({ type: "ANSWER_SELECTED", payload: option }); // Պահպանում ենք պատասխանը
  };

  return (
    <div className="question-box">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option, i) => (
          <button
            key={i}
            className={`option-btn ${answer === option ? "selected" : ""}`}
            onClick={() => handleAnswerClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};


