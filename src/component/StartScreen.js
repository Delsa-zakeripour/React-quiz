import React from "react";

export default function StartScreen({ dispatch }) {
  return (
    <div className="start">
      <h2>Welcome To The React Quiz</h2>
      <h3 className="">Some questions to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        let's start
      </button>
    </div>
  );
}
