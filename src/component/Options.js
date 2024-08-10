export default function Options({ question, answer, dispatch }) {
  //   console.log(answer);

  const hasAnswer = answer != null;
  return (
    <div>
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option  ${index === answer ? "answer" : ""} ${
            hasAnswer
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswer}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
