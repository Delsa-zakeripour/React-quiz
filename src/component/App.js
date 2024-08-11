import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Erro from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";

const initialState = {
  question: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsReminer: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsReminer: state.questions.length * 20,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finish",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.question,
        status: "ready",
      };
    // return {
    //   ...state,
    //   points: 0,
    //   status: "ready",
    //   inde4x: 0,
    //   answer: 0,
    //   highscore: 0,
    // };
    case "tick":
      return {
        ...state,
        secondsReminer: state.secondsReminer - 1,
        status: state.secondsReminer === 0 ? "finish" : state.status,
      };

    default:
      throw new Error("oppps");
  }
}

export default function App() {
  const [
    { questions, status, index, answer, points, highscore, secondsReminer },
    dispatch,
  ] = useReducer(reducer, initialState);

  // const numQuestion = questions.length;
  // console.log("questions", questions);
  // console.log("numQuestion", numQuestion);

  // const maxPosiblePoints = questions.reduce(
  //   (prev, cur) => prev + cur.points,
  //   0
  // );

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Erro />}
        {status === "ready" && <StartScreen dispatch={dispatch} />}
        {status === "active" && (
          <>
            <Progress
              index={index}
              points={points}
              answer={answer}
              question={questions}
              // maxPosiblePoints={maxPosiblePoints}
            />
            <Question
              question={questions[index]}
              answer={answer}
              dispatch={dispatch}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsReminer={secondsReminer} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                question={questions}
              />
            </Footer>
          </>
        )}
        {status === "finish" && (
          <FinishScreen
            points={points}
            dispatch={dispatch}
            question={questions}
            highscore={highscore}
          />
        )}
      </Main>
    </div>
  );
}
