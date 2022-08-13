import React, { Component } from "react";
import "../cssFilesandImages/addedtodo.css";
import { BiArrowBack } from "react-icons/bi";
import AnimatedRoutes from "./AnimatedRoutes";

class addedTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      math: Math.random(),
      todoTopic: "",
      todoInfo: "",
      todoTime: "",
      todoDate: "",
    };
    this.AddTodo = this.AddTodo.bind(this);
    this.changeTodoTopic = this.changeTodoTopic.bind(this);
    this.changeTodoInfo = this.changeTodoInfo.bind(this);
    this.changeTodoTime = this.changeTodoTime.bind(this);
    this.changeTodoDate = this.changeTodoDate.bind(this);
    this.toInbox = this.toInbox.bind(this);
  }
  toInbox() {
    this.props.history.push({
      pathname: "/inbox",
    });
  }
  changeTodoTopic(event) {
    this.setState({
      todoTopic: event.target.value,
    });
  }

  changeTodoInfo(event) {
    this.setState({
      todoInfo: event.target.value,
    });
  }

  changeTodoTime(event) {
    this.setState({
      todoTime: event.target.value,
    });
  }

  changeTodoDate(event) {
    this.setState({
      todoDate: event.target.value,
    });
  }
  async AddTodo() {
    const newTodo = [
      [
        this.state.todoTopic,
        this.state.todoInfo,
        this.state.todoTime,
        this.state.math,
        "them",
        "they",
        this.state.todoDate,
        "remove",
      ],
    ];

    this.setState({
      math: Math.random(),
    });
    if (!localStorage.getItem("todo")) {
      const haveTodo = JSON.stringify(newTodo);
      await localStorage.setItem("todo", haveTodo);
    } else {
      const addNewTodo = JSON.parse(localStorage.getItem("todo"));
      const combineTodo = addNewTodo.concat(newTodo);
      await localStorage.setItem("todo", JSON.stringify(combineTodo));
    }
    this.props.history.push({
      pathname: "/inbox",
    });
    // const currentStorage=await JSON.parse(localStorage.getItem('userprofile'))
  }
  render() {
    return (
      <>
        <AnimatedRoutes>
          <div className="editHead">
            <form>
              <div className="newTodoContainer">
                <BiArrowBack
                  onClick={this.toInbox}
                  className="iconBack"
                ></BiArrowBack>
                <h1 style={{ color: "white" }} className="Topic">
                  Add New Todo{" "}
                </h1>
                <div className="inputContainer">
                  <input
                    autoFocus
                    maxLength={15}
                    type="text"
                    value={this.state.todoTopic}
                    onChange={this.changeTodoTopic}
                    placeholder="My todo topic"
                    className="todoTopic"
                  />
                  <input
                    type="text"
                    maxLength={25}
                    value={this.state.todoInfo}
                    onChange={this.changeTodoInfo}
                    placeholder="About my todo..."
                    className="aboutTodo"
                  />
                  <div className="dateContainer">
                    <label className="timeLabel">Time:</label>{" "}
                    <input
                      type="time"
                      value={this.state.todoTime}
                      onChange={this.changeTodoTime}
                      className="time"
                    />
                    <label className="dateLabel">Date:</label>{" "}
                    <input
                      type="date"
                      value={this.state.todoDate}
                      onChange={this.changeTodoDate}
                      className="date"
                    />{" "}
                  </div>
                </div>
                <button onClick={this.AddTodo} className="add">
                  Add Todo
                </button>
              </div>
            </form>
          </div>
        </AnimatedRoutes>
      </>
    );
  }
}

export default addedTodo;
