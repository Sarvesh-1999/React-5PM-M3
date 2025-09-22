//! REACT WAY
import { createRoot } from "react-dom/client";
let div = document.getElementById("root");
createRoot(div).render(
  <div>
    <h1>Hello World</h1>
    <h2>Hello</h2>
  </div>
);

//! JS WAY
// let div = document.getElementById("root")
// let h1 =  document.createElement("h1")
// h1.innerText = "Hello World"
// div.append(h1)
