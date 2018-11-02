import React, { Component } from "react";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
  }

  handleOnchangeData = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
      const { first_name, last_name, email, password } = this.state
    return (
      <div>
        <input
          type="text"
          name="first_name"
          placeholder="First_Name.."
          value={this.state.first_name}
          onChange={this.handleOnchangeData}
        /><br/>
        <input
          type="text"
          name="last_name"
          placeholder="Last_Name.."
          value={this.state.last_name}
          onChange={this.handleOnchangeData}
        /><br/>
        <input
          type="text"
          name="email"
          placeholder="Email.."
          value={this.state.email}
          onChange={this.handleOnchangeData}
        /><br/>
        <input
          type="text"
          name="password"
          placeholder="password..."
          value={this.state.password}
          onChange={this.handleOnchangeData}
        /><br/>
        <button
          onClick={() =>
            this.props.submitRegister(
              first_name,
              last_name,
              email,
              password
            )
          }
        >
          Register
        </button>
      </div>
    );
  }
}
