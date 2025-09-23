//! REACT WAY
import { createRoot } from "react-dom/client"
import App from "./App"
createRoot(document.getElementById("root")).render(<App/>)


// <App></App>  --> Paired tag
// <App /> --> Self closed tag


//! JS WAY
// let div = document.getElementById("root")
// let h1 =  document.createElement("h1")
// h1.innerText = "Hello World"
// div.append(h1)
    