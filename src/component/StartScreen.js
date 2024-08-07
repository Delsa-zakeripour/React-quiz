import React from "react";

export default function StartScreen({ numQuestion, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome To The React Quiz</h2>
      <p className="h2">questions to test your react mastery</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        let's start
      </button>
    </div>
  );
}
