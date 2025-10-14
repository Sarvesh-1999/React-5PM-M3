import { useEffect, useState } from "react";

const LifeCycleInFBC = () => {
  const [count, setCount] = useState(0);
  const [initialRender,setInitialRender] = useState(true)

  useEffect(() => {
    console.log("Component Mounted");
    return () => {
      // clean-up
      console.log("Component Unmounted");
    };
  }, []);

  useEffect(()=>{
    if (initialRender) {
      setInitialRender(false)  
      return;
    }
    console.log("Component Updated");
  },[count])

  return (
    <div>
      <h1 className="text-center text-4xl p-5 font-bold">
        Learn LifeCycle In Function Based - {count}
        <button 
        onClick={() => setCount(count + 1)} 
        className="ms-4 bg-red-400 p-3 rounded-full">
            Update
        </button>
      </h1>
    </div>
  );
};

export default LifeCycleInFBC;
