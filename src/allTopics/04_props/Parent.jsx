import Child from "./Child";

const Parent = () => {
  let data = "Hello World";
  return (
    <>
      <h1>I am Parent</h1>

      <Child value={data} />
    </>
  );
};

export default Parent;
