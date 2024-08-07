export default function Options({ question, answer, dispatch }) {
  //   console.log(answer);
  return (
    <div>
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option  ${index === answer ? "answer" : ""}`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
