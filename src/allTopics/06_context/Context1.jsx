import ParentComp from "./ParentComp";
import { createContext } from "react";

export let contextObject = createContext();

const Context1 = () => {
  let str = "Hello";
  let arr = [10, 20, 30];
  let obj = { fname: "John" };

  return (
    <contextObject.Provider value={{str,arr,obj}}>
      <ParentComp />
    </contextObject.Provider>
  );
};

export default Context1;
