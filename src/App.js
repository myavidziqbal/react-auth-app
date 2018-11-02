import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Login from "./Login";
import Register from "./Register";
import EmployeeDetail from "./EmployeeDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authentication: false,
      data: [],
      employeesData: []
    };
  }

  submitLogin = (email, password) => {
    const data = { email: email, password: password };
    axios
      .post("https://impact-byte-demo.herokuapp.com/accounts/login", data)
      .then(res => {
        console.log(res.data.message);
        if (res.data.message === "You are logged in") {
          localStorage.setItem("token", res.data.token);
          this.setState({
            // data: res.data
            authentication: true,
            data: res.data.message
          });
        } else {
          alert("Salah coyyy!!!");
        }
      })
      .catch(err => console.log(err));
  };

  submitRegister = async (first_name, last_name, email, password) => {
    await axios
      .post("https://impact-byte-demo.herokuapp.com/accounts/register", {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
      })
      .then(res => {
        if (res.data.message === "insert account data success") {
          alert("Success");
        } else {
          alert("Gagal Bro!");
        }
      })
      .catch(err => console.log(err));
  };

  getEmployeesData = () => {
    axios
      .get("https://impact-byte-demo.herokuapp.com/employees", {
        headers: {
          authorization: `bearer ${localStorage.token}`
        }
      })
      .then(res => {
        this.setState({
          employeesData: res.data.data
        });
      })
      .catch(err => console.log(err));
  };

  handleLogut = () => {
    this.setState({
      authentication: false,
      employeesData: []
    });
    localStorage.removeItem("token");
  };

  componentDidMount = () => {
    if (localStorage.token) {
      this.setState({
        authentication: true,
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Login API</h1>
        <Login submitLogin={this.submitLogin} />
        <hr />
        {/* <div>{this.state.data.email}</div>
        <br />
        <div>{this.state.data.token}</div> */}
        <div>{this.state.data}</div>
        <Register submitRegister={this.submitRegister} />
        {this.state.authentication ? (
          <h1>You are authenticated!</h1>
        ) : (
          <h1>Anda Belum Login!</h1>
        )}
        <button onClick={this.getEmployeesData}>Get Employees Data</button>
        {this.state.employeesData.map((employee, i) => (
          <EmployeeDetail data={employee} key={i} />
        ))}<br/>

        <h1>Logout</h1>
        <button onClick={this.handleLogut}>Logut</button>
      </div>
    );
  }
}

export default App;
