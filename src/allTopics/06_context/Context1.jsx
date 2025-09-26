import { createContext } from "react";
import ParentComp from "./ParentComp";

// STEP 1 : CREATE A CONTEXT
export let myStoreRoomContext = createContext(); // it returns Context Object

const Context1 = () => {
  let data = "Hello World";
  let arr = [10, 20, 30];
  let obj = {
    fname: "John",
    lname: "Doe",
  };

  return (
    <>
      {/* STEP 2 : PROVIDE A CONTEXT */}
      <myStoreRoomContext.Provider value={{ data, arr, obj }}>
        <ParentComp />
      </myStoreRoomContext.Provider>
    </>
  );
};
export default Context1;
