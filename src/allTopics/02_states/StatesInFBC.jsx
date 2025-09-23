import { useState } from "react";

const StatesInFBC = () => {
  let [state, setState] = useState("Hii Everyone"); // [ud, func]
  const handleBtn = () => setState("Byyeeee");

  let username = "No Name";
  const handleName = () => {
    username = "John Doe";
    console.log(username); // it will not re-render the component
  };

  return (
    <>
      <h1>States In Function Based Component</h1>
      <h2>{state}</h2>
      <button onClick={handleBtn}>update</button>

      <hr></hr>

      <h2>Username : {username}</h2>
      <button onClick={handleName}>update name</button>
    </>
  );
};

export default StatesInFBC;
