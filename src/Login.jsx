import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleOnchange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleOnchange}
        />
        <input
          type="text"
          name="password"
          value={this.state.password}
          onChange={this.handleOnchange}
        />
        <button
          onClick={() =>
            this.props.submitLogin(this.state.email, this.state.password)
          }
        >
          Login
        </button>
      </div>
    );
  }
}

export default Login;
