import { useContext } from "react";
import { myStoreRoomContext } from "./Context1";
const ChildA2 = () => {
  
  // STEP 3 : CONSUME A CONTEXT
  let data = useContext(myStoreRoomContext);
  let {data:str , obj , arr} = data  

  return (
    <div>
      <h2>ChildA2 </h2>
      <p>{str} {arr} {obj.fname} {obj.lname}</p>
    </div>
  );
};

export default ChildA2;
