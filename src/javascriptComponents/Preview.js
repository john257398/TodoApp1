import React, { Component } from "react";
import "../cssFilesandImages/preview.css";
import AnimatedRoutes from "./AnimatedRoutes";

class Preview extends Component {
  constructor(props) {
    super(props);
    var editedTodo = JSON.parse(localStorage.getItem("edition"));
    this.state = {
      previewTopic: editedTodo[0][0],
      previewInfo: editedTodo[0][1],
      previewTime: editedTodo[0][2],
      previewDate: editedTodo[0][3],
    };
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.push({
      pathname: "/inbox",
    });
  }

  render() {
    return (
      <>
        <AnimatedRoutes>
          <div className="theGreatest">
            <div className="head">Todo Preview</div>
            <div className="nextGreatest">
              <div className="topParent">
                <div className="top">Topic: {this.state.previewTopic}</div>
                <div className="inf">Info: {this.state.previewInfo}</div>
                <div className="tim">Time: {this.state.previewTime}</div>
                <div className="dat">Date: {this.state.previewDate}</div>
              </div>
              <button className="but" onClick={this.goBack}>
                Done
              </button>
            </div>
          </div>
        </AnimatedRoutes>
      </>
    );
  }
}

export default Preview;
