import { useContext } from "react";
import { QuizContext } from "../../context/quizcontext";
import "./option.css";



export const Options = ({ question }) => {
  const { dispatch, answer } = useContext(QuizContext);
  const hasAnswered = answer !== null;

  const handleSelectOption = (index) => {
    dispatch({ type: "NEW_ANSWER", payload: index });
  };

  return (
    <div className="options">
      {question.options.map((option, index) => {
        const isCorrect = question.correctOption === index;
        const classes = hasAnswered
          ? isCorrect
            ? "correct"
            : "wrong"
          : "";

        return (
          <button
            key={option}
            className={`q-btn btn-option ${classes}`}
            onClick={() => handleSelectOption(index)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

