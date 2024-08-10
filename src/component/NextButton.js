import Questions from "./Question";

function NextButton({ dispatch, answer, index, question }) {
  if (answer === null) return null;
  const numQuestion = question.length;

  console.log(question.length);
  if (index < numQuestion - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      </div>
    );
  if (index === numQuestion - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      </div>
    );
}

export default NextButton;
