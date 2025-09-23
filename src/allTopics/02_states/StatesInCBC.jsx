import { Component } from "react";

class StatesInCBC extends Component {
  state = { value: "Hii All" }; // Initializing state

  handleBtn = () => {
    this.setState({value: "byeeeeee"}) // update the state
  };

  render() {
    console.log(this); // prints current class's object

    return (
      <>
        <h1>States In Class Based Component </h1>
        <h2>{this.state.value}</h2>
        <button onClick={this.handleBtn}>update</button>
      </>
    );
  }
}

export default StatesInCBC;
