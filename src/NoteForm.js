import React, { Component } from "react";

class NoteForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: ""
    };
  }

  handlechange = event => {
    console.log(event.target.name);
    console.log(event.target.value);

    // Dynamically sets any field in state that exists in the form
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      // Runs this function after state has been set (works when having it console.log futher down doesn't because of async)
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div>
        <h1>hello</h1>
        <input onChange={this.handlechange} type="text" name="title"></input>
        <input onChange={this.handlechange} type="textarea" name="body"></input>
        <input type="submit"></input>
      </div>
    );
  }
}

export default NoteForm;
