import { Component } from "react";

export default class LifecycleinCBC extends Component {
  state = { count: 0 };

  handleState = () => this.setState({ count: this.state.count + 1 });

  componentDidMount() {
    console.log("Mounting Phase");
    this.intervalID = setInterval(()=>{
        console.log("Fetch Data from API");
    },2000)
  }

  componentDidUpdate() {
    console.log("Updating Phase");
  }

  componentWillUnmount() {
    console.log("Unmounting Phase");
    clearInterval(this.intervalID)
  }

  render() {
    return (
      <div>
        <h1 className="text-center text-4xl p-5 font-bold">
          Learn LifeCycle In Class Based - {this.state.count}

        <button onClick={this.handleState} className="ms-4 bg-green-400 p-3 rounded-full">
            Update
        </button>
        </h1>

      </div>
    );
  }
}
