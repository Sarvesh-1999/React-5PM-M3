const Child4 = (props) => {
    console.log(props); // {str:"",arr:[],obj:{}}
    let {str, arr, obj} = props
    
  return (
    <>
      <h1>Child 4 - Recieving multiple props</h1>
      <h2>{str} {arr[2]} {obj.fname}</h2>
    </>
  );
};

export default Child4;
