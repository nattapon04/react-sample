import React, { Component } from "react"

class User extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
  }

  OnChange = (event) => {
    this.props.onNameChange(event.target.value);
  };

  render() {


    return (
      <div>
        <div>
          <input type="text" onChange={this.OnChange}></input>
        </div>
      </div>
    );
  }
}

export default User;