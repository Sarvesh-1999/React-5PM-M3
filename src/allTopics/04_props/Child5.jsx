const Child5 = (props) => {
  console.log(props); // {data:{}}

  return (
    <>
      <h1>Child 5 - Recieving Multiple data in single prop</h1>
      <h2>
        {props.data.data} 
        {props.data.arr} 
        {props.data.obj.fname}
      </h2>
    </>
  );
};
export default Child5;
