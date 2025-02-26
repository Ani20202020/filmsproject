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
      const correct = action.payload === state.questions[state.index].correctOption;
      const updatedPoints = correct ? state.points + 10 : state.points;
      return { ...state, answer: action.payload, points: updatedPoints };  // Ավելացնում է միավորները, եթե ճիշտ է պատասխանը
    case "NEXT_QUESTION":
      return { ...state, index: state.index + 1, answer: null };
    case "FINISH":
      return { ...state, status: "finished" }; // Ֆինիշի ժամանակ ոչինչ չի փոխվում, պարզապես ավելացնում ենք finish
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
