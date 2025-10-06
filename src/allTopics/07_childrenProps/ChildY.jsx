const ChildY = (x) => {
    console.log(x);//{children:{}}
    
  return (
    <div>
        <h2>I am Child Y</h2>
        {x.children}
    </div>
  )
}

export default ChildY