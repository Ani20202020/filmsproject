import { useContext } from "react";
import { QuizContext } from "../../context/quizcontext";
import "../progres/progress.css";



export const Progress = () => {
  const { points, index, questions, answer, status } = useContext(QuizContext);

  if (status === "finished") {
    return (
      <header className="q-progress">
        <p>Շատ լավ! Դուք հավաքել եք <strong>{points}</strong> միավոր:</p>
      </header>
    );
  }

  return (
    <header className="q-progress">
      <progress
        max={questions.length}
        value={index + (answer !== null ? 1 : 0)} // Գրանցվում է հաջորդ հարցի համար
      />
      <p>
        Question <strong>{index + 1}</strong> / {questions.length}
      </p>
      <p>
        <strong>{points}</strong> / {questions.length * 10}
      </p>
    </header>
  );
};
