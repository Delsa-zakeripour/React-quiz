export default function FinishScreen({
  points,
  question,
  highscore,
  dispatch,
}) {
  const maxPosiblePoints = question.reduce((prev, cur) => prev + cur.points, 0);
  const percentage = (points / maxPosiblePoints) * 100;
  console.log(highscore);
  return (
    <>
      <p className="result">
        your score is <strong>{points}</strong>
        out of {maxPosiblePoints}
        {Math.ceil(percentage)}
      </p>
      <p className="highscore"> (highscore:{highscore}points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}
