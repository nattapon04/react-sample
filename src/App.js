import React, { Component } from "react"
import './App.css';
import User from "./user/User.js";

class App extends Component {
  state = {
    name: "First",
  };

  onNameChange = (name) => {
    this.setState({ name: name });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        Hello {name}
        <User name={name} onNameChange={this.onNameChange} />
      </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
