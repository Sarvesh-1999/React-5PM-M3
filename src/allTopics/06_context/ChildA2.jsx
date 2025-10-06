import { useContext } from "react";
import { contextObject } from "./Context1";

const ChildA2 = () => {
  let { str, arr, obj } = useContext(contextObject); //{str: 'Hello', arr: Array(3), obj: {…}}

  return (
    <div>
      <h1>I am Child A2 Component</h1>
      <p>
        {str} {arr} {obj.fname}
      </p>
    </div>
  );
};

export default ChildA2;
