import { useContext } from "react";
import { QuizContext } from "../../context/quizcontext"; // Այստեղից պետք է վերցնենք `dispatch`
import "../progres/progress.css";



export const Progress = () => {
  const { points, index, questions, status } = useContext(QuizContext);

  if (status === "finished") {
    return (
      <header className="q-progress">
        <p>Շնորհավորում ենք! Դուք հավաքել եք <strong>{points}</strong> միավոր:</p>
      </header>
    );
  }

  return (
    <header className="q-progress">
      <progress max={questions.length} value={index + 1} />
      <p>
        Question <strong>{index + 1}</strong> / {questions.length}
      </p>
      <p>
        Points <strong>{points}</strong> / {questions.length}
      </p>
    </header>
  );
};

