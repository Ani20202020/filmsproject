import { createContext, useReducer } from "react";

export const QuizContext = createContext();

const initialState = {
  status: "loading", // "loading", "error", "ready", "active", "finished"
  questions: [],
  index: 0,
  answer: null,
  points: 0,
};
const quizReducer = (state, action) => {
  switch (action.type) {
    case "DATA_RECEIVED":
      return { ...state, questions: action.payload, status: "ready" };
    case "DATA_FAILED":
      return { ...state, status: "error" };
    case "START":
      return { ...state, status: "active", index: 0, answer: null, points: 0 };
    case "ANSWER_SELECTED":
      const isCorrect = action.payload === state.questions[state.index].correctOption;
      return { 
        ...state, 
        answer: action.payload, 
        points: isCorrect ? state.points + 1 : state.points 
      };
    case "NEXT_QUESTION":
      if (state.index + 1 < state.questions.length) {
        return { 
          ...state, 
          index: state.index + 1, 
          answer: null 
        };
      } else {
        return { ...state, status: "finished" }; // Ֆինիշի դրոշմ
      }
    case "FINISH":
      return { ...state, status: "finished" };
    case "RESTART":
      return { ...state, status: "ready", index: 0, answer: null, points: 0 };
    default:
      return state;
  }
};





  
  

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={{ ...state, dispatch }}>{children}</QuizContext.Provider>;
};
