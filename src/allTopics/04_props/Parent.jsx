import Child from "./Child";
import Child2 from "./Child2";
import Child3 from "./Child3";
import Child4 from "./Child4";
import Child5 from "./Child5";

const Parent = () => {
  let data = "Hello World";
  let arr = [10, 20, 30];
  let obj = {
    fname: "John",
    lname: "Doe",
  };
  return (
    <>
      <h1>I am Parent</h1>

      {/* Sending Single prop */}
      <Child value={data} />
      <Child2 arr={arr} />
      <Child3 user={obj} />

      {/* Sending Multiple props */}
      <Child4 str={data} obj={obj} arr={arr}/>
    
      {/* Sending Multiple data in single prop */}
      <Child5 data={{data,arr,obj}}/>
    </>
  );
};

export default Parent;
