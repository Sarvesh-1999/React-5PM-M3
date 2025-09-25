import ChildB from "./ChildB";

const ChildA = (props) => {
    console.log(props); // {data:""}
    
  return (
    <div>
      ChildA Component

      <ChildB data={props.data}/>
    </div>
  );  
};

export default ChildA;
