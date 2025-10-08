import React from "react";

const Card = () => {
  let h1Style = { color: "red" };

  return (
    <div style={{ backgroundColor: "lightblue", border: "1px solid black" }}>
      
      <h1 style={h1Style}>I am Card Component</h1>
      
      <button className="cardBtn">Click me</button>
    
    </div>
  );
};

export default Card;
