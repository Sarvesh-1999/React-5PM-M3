const Child = (props) => {
  console.log(props);//{value : "hello World"}

  return (
    <>
      <h1>I am Child {props.value}</h1>
    </>
  );
};

export default Child;
