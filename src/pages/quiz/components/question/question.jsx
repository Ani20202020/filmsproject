import { useContext } from "react";
import { QuizContext } from "../../context/quizcontext";
// import { Options } from "./option";
import "./option.css";




export const Questions = () => {
  const { questions, index, dispatch, answer } = useContext(QuizContext);
  const question = questions[index];

  const handleAnswerClick = (selectedIndex) => {
    if (answer === null) { // Եթե դեռ պատասխան չկա
      dispatch({ type: "ANSWER_SELECTED", payload: selectedIndex });
    }
  };

  const handleNextQuestion = () => {
    if (answer !== null) { 
      if (index + 1 === questions.length) {
        dispatch({ type: "FINISH" });  // Վերջին հարցին `FINISH`
      } else {
        dispatch({ type: "NEXT_QUESTION" }); 
      }
    }
  };
   

  return (
    <div className="question-box">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option, i) => {
          const isSelected = answer === i; // Ստուգում ենք՝ ընտրված է թե ոչ
          const isCorrect = i === question.correctOption; // Ճիշտ պատասխան

          return (
            <button
              key={i}
              className={`option-btn ${isSelected ? (isCorrect ? "correct" : "wrong") : ""}`}
              onClick={() => handleAnswerClick(i)}
              disabled={answer !== null} // Կոճակը դառնում է անաշխատունակ, եթե արդեն ընտրվել է տարբերակ
            >
              {option}
            </button>
          );
        })}
      </div>

      {answer !== null && (
        <button className="next-btn" onClick={handleNextQuestion}>
          {index + 1 === questions.length ? "Finish" : "Next"}
        </button>
      )}
    </div>
  );
};
