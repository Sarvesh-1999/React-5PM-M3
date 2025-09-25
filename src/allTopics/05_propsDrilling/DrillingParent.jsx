import ChildA from "./ChildA";

const DrillingParent = () => {

    let data = "Hello React"

  return (
    <div>
      DrillingParent Component

      <ChildA  data={data}/>
    </div>
  );
};

export default DrillingParent;
