import { useState } from "react";

const CounterInFbc = () => {
  const [count, setCount] = useState(0);
  const incre = () => setCount(count + 1);
  const decre = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => setCount(0);

  return (
    <>
      <h1>Counter In Function Based</h1>
      <h2>Counter : {count}</h2>

      <button onClick={incre}>increment</button>
      <button onClick={decre}>decrement</button>
      <button onClick={reset}>reset</button>
    </>
  );
};
export default CounterInFbc;
