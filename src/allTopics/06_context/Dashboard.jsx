import React, { useContext } from "react";
import { GlobalContext } from "./AuthContext";
const Dashboard = () => {
  let { loggedInUser, setLoggedInUser } = useContext(GlobalContext);
  console.log(loggedInUser);

  return (
    <div>
      <h1>User Dashboard</h1>
      {loggedInUser ? (
        <>
          <button onClick={()=>setLoggedInUser(false)}>logout</button>
          <p>PLEASE LOGOUT !!</p>
        </>
      ) : (
        <>
          <button onClick={()=>setLoggedInUser(true)}>login</button>
          <p>PLEASE LOGIN !!</p>
        </>
      )}
    </div>
  );
};

export default Dashboard;
