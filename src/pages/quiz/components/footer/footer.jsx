import { useContext } from "react";
import { QuizContext } from "../../context/quizcontext";
import "./footer.css";



export const Footer = () => {
  const { dispatch, answer, index, questions } = useContext(QuizContext);

  return (
    <footer className="quiz-footer">
      {!answer && <p className="warning-msg">⚠️ Please select an answer before proceeding!</p>}

      {answer && index < questions.length - 1 && (
        <button className="btn next-btn" onClick={() => dispatch({ type: "NEXT_QUESTION" })}>
          Next ➡️
        </button>
      )}

      {answer && index === questions.length - 1 && (
        <button className="btn finish-btn" onClick={() => dispatch({ type: "FINISH" })}>
          🎉 Finish
        </button>
      )}
    </footer>
  );
};

