import { useEffect } from "react";

export default function Timer() {
  useEffect(function () {
    setInterval(function () {
      console.log("timer");
    }, 1000);
  }, []);
  return <div>timer</div>;
}
