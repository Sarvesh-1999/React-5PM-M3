const Child2 = (props) => {
  console.log(props); //{arr:[]}

  return (
    <>
      <h1>I am Child 2 {props.arr[1]}</h1>
    </>
  );
};
export default Child2;
