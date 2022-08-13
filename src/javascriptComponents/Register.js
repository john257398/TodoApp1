import React, { Component } from "react";
import "../cssFilesandImages/register.css";
import { FaAt, FaRegUser, FaLock } from "react-icons/fa";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userValue: "",
      email: "",
      passwordValue: "",
      confirmPassword: "",
      pedri: "gavi",
    };
    this.AddTodo = this.AddTodo.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    this.signAccount = this.signAccount.bind(this);
  }

  changeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangeUser(event) {
    this.setState({ userValue: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ passwordValue: event.target.value });
  }

  handleConfirmPassword(event) {
    this.setState({ confirmPassword: event.target.value });
  }

  signAccount() {
    this.props.history.push({
      pathname: "/",
    });
  }
  async AddTodo() {
    const user = {
      userValue: this.state.userValue,
      passwordValue: this.state.passwordValue,
    };
    if (!localStorage.getItem("userprofile")) {
      const storageCreation = JSON.stringify([user]);
      await localStorage.setItem("userprofile", storageCreation);
    } else {
      const userDatabase = JSON.parse(localStorage.getItem("userprofile"));
      const users = userDatabase.concat(user);
      await localStorage.setItem("userprofile", JSON.stringify(users));
    }

    if (this.state.passwordValue !== this.state.confirmPassword) {
      alert("The password must be equal to the confirm password. ");
      this.state.pedri = "iniesta";
    }
    if (
      this.state.userValue === "" ||
      this.state.email === "" ||
      this.state.passwordValue === "" ||
      this.state.confirmPassword === ""
    ) {
      alert("Pls Fill In All Your Details To Register Your Todo");
      this.state.pedri = "iniesta";
    }
    if (this.state.pedri === "gavi") {
      this.props.history.push({
        pathname: "/inbox",
      });
    }
  }
  render() {
    console.log(JSON.parse(localStorage.getItem("userprofile")));
    return (
      <>
        <div className="register-container">
          <form>
            <div className="start">
              {" "}
              <p>GET STARTED</p>
            </div>
            <div className="fill">
              {" "}
              <p>
                Please fill in all the details to register for a new todo.
              </p>{" "}
            </div>
            <div className="container-register">
              <div className="inputBody3">
                <div className="regIcon3">
                  {" "}
                  <FaAt />
                </div>
                <input
                  autoFocus
                  type="text"
                  placeholder="Email Address"
                  value={this.state.email}
                  onChange={this.changeEmail}
                  className="email"
                />
              </div>
              <div className="inputBody4">
                <div className="regIcon4">
                  <FaRegUser />
                </div>
                <input
                  type="text"
                  value={this.state.userValue}
                  onChange={this.handleChangeUser}
                  placeholder="Username"
                  className="username2"
                />
              </div>
              <div className="inputBody5">
                <div className="regIcon5">
                  <FaLock />
                </div>
                <input
                  type="password"
                  value={this.state.passwordValue}
                  onChange={this.handleChangePassword}
                  placeholder="Password"
                  className="password2"
                />
              </div>
              <div className="inputBody6">
                <div className="regIcon6">
                  <FaLock />
                </div>
                <input
                  type="password"
                  value={this.state.confirmPassword}
                  onChange={this.handleConfirmPassword}
                  placeholder="Confirm Password"
                  className="confirm"
                />
              </div>
              <div className="buttonParent2">
                <button className="signUp" onClick={this.AddTodo}>
                  REGISTER
                </button>
              </div>
            </div>
            <div className="accountParent">
              {" "}
              <p className="haveAccount">
                Have an account?{" "}
                <span className="sign" onClick={this.signAccount}>
                  Sign in
                </span>
              </p>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Register;
