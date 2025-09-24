import { useState } from "react";

const EventExample = () => {
  const [data, setData] = useState("Javascript");

  const demo1 = () => console.log("Demo 1");
  const demo2 = (username) => console.log("Demo 2 ", username);

  return (
    <>
      <h1>How to attach events in React.js</h1>
      <button onClick={demo1}>Button 1</button>
      <button onClick={() => demo2("John Doe")}>Button 2</button>

      <hr />
      <h2>{data}</h2>
      <button onClick={() => setData("React.js")}>Convert</button>
    </>
  );
};

export default EventExample;
