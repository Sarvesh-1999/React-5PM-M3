const ChildB = (props) => {
  console.log(props);

  //{data:{data:""}}

  //{data:""}

  return (
    <div>
      ChildB Component
      <h3>{props.data}</h3>
    </div>
  );
};

export default ChildB;
