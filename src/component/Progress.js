export default function Progress({ index, points, answer, question }) {
  const numQuestion = question.length;
  const maxPosiblePoints = question.reduce((prev, cur) => prev + cur.points, 0);
  return (
    <header className=" progress">
      <progress
        max={numQuestion}
        value={index + Number(answer != null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestion}
      </p>
      <p>
        <strong>
          {points}/ {maxPosiblePoints}
        </strong>
      </p>
    </header>
  );
}
