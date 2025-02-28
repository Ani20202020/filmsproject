import { useContext } from "react";
import { QuizContext } from "../../context/quizcontext";
import "./finish.css";

export const FinishScreen = () => {
    const { points, questions, dispatch } = useContext(QuizContext);
  
    return (
      <div className="finish-screen">
        <h2>Congratulations, you finished the quiz! 🎉</h2>
        <p>You scored <strong>{points}</strong> points out of {questions.length} possible.</p>
        <button className="restart-btn" onClick={() => dispatch({ type: "RESTART" })}>
          Restart 🔄
        </button>
      </div>
    );
  };
