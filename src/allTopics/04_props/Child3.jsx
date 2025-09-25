const Child3 = (props) => {
  console.log(props); //{user: {}}
  let { user:{fname , lname} } = props;

  return (
    <>
      <h1>I am Child 3</h1>
      <h2>Welcome {fname} {lname}</h2>
    </>
  );
};
export default Child3;
  