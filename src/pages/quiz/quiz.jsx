import { useContext, useEffect } from "react";
import { QuizProvider, QuizContext } from "./context/quizcontext";
import { quizApi } from "../../api/quiz.api.js";
import { Loading } from "./components/loading/loading";
import { Error } from "./components/error/error";
import { StartScreen } from "./components/startscreen/startsceen.jsx";
import { Questions } from "./components/question/question";
import { Progress } from "./components/progres/progress";
import { Footer } from "./components/footer/footer";
import "./quiz.css";
import { FinishScreen } from "./components/finish/finish";
const QuizApp = () => {
  const { status, dispatch } = useContext(QuizContext);

  useEffect(() => {
    fetch("http://localhost:5001/questions")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load questions");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "DATA_RECEIVED", payload: data });
      })
      .catch(() => {
        dispatch({ type: "DATA_FAILED" });
      });
  }, []);
  

  return (
    <div className="quiz-game mt-4">
      <main className="main">
        {status === "loading" && <Loading />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "finished" && <FinishScreen />} 

        {status === "active" && (
          <>
            <Progress />
            <Questions />
            <Footer />
          </>
        )}
      </main>
    </div>
  );
};

export const Quiz = () => {
  return (
    <QuizProvider>
      <QuizApp />
    </QuizProvider>
  );
};
