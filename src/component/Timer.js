import { useEffect } from "react";
export default function Timer({ dispatch, secondsReminer }) {
  const minute = Math.floor(secondsReminer / 60);
  const seconds = secondsReminer % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {minute < "10" && "0"}{minute}: {seconds < 10 && "0"}{seconds}
    </div>
  );
}
