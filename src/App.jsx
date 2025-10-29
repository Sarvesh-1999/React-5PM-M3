import Fbc from "./allTopics/01_typesOfComponents/Fbc";
import Cbc from "./allTopics/01_typesOfComponents/Cbc";
import StatesInCBC from "./allTopics/02_states/StatesInCBC";
import StatesInFBC from "./allTopics/02_states/StatesInFBC";
import CounterInFbc from "./allTopics/02_states/CounterInFbc";
import EventExample from "./allTopics/03_events/EventExample";
import Parent from "./allTopics/04_props/Parent";
import DrillingParent from "./allTopics/05_propsDrilling/DrillingParent";
import Context1 from "./allTopics/06_context/Context1";
import ParentComp from "./allTopics/06_context/ParentComp";
import ParentX from "./allTopics/07_childrenProps/ParentX";
import Dashboard from "./allTopics/06_context/Dashboard";
import ControlledForms1 from "./allTopics/08_forms/ControlledForms1";
import Card from "./allTopics/09_reactCss/Card";
import Navbar from "./allTopics/09_reactCss/Navbar";
import TodoWrapper from "./task2/TodoWrapper";
import LifecycleinCBC from "./allTopics/10_lifecycle/LifecycleinCBC";
import { useState } from "react";
import LifeCycleInFBC from "./allTopics/10_lifecycle/LifeCycleInFBC";
import FetchProducts from "./allTopics/11_apiCall/FetchProducts";
import Routing1 from "./allTopics/12_routing/Routing1";
function App() {
  const [toogle, setToggle] = useState(false);

  return (
    <>
      {/* <Fbc/> */}
      {/* <Cbc/> */}
      {/* <StatesInCBC/> */}
      {/* <StatesInFBC/> */}
      {/* <CounterInFbc/> */}
      {/* <EventExample/> */}
      {/* <Parent/> */}
      {/* <DrillingParent/> */}
      {/* <Context1 /> */}
      {/* <ParentX/> */}
      {/* <Dashboard/> */}
      {/* <ControlledForms1/> */}
      {/* <Card/> */}
      {/* <Navbar/> */}
      {/* <TodoWrapper/> */}

      {/* <button onClick={()=>setToggle(!toogle)} className="bg-amber-300 p-4 rounded-2xl m-4">
        toogle button
      </button> */}

      {/* {toogle ? <LifecycleinCBC/> : <p>No Component</p>} */}

      {/* <LifeCycleInFBC/> */}

      {/* <FetchProducts/> */}

      <Routing1 />
    </>
  );
}

export default App;
