import React from "react";
import "./App.css";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { tsConstructorType } from "@babel/types";

const notes = [
  { id: 1, title: "Title 1", body: "Body 1" },
  { id: 2, title: "Title 2", body: "Body 2" },
  { id: 3, title: "Title 3", body: "Body 3" },
  { id: 4, title: "Title 4", body: "Body 4" },
  { id: 5, title: "Title 5", body: "Body 5" },
  { id: 6, title: "Title 6", body: "Body 6" },
  { id: 7, title: "Title 7", body: "Body 7" },
  { id: 8, title: "Title 8", body: "Body 8" },
  { id: 9, title: "Title 9", body: "Body 9" },
  { id: 10, title: "Title 10", body: "Body 10" }
];

class App extends React.Component {
  // console.log(notes);
  constructor() {
    super();
    this.state = {
      allNotes: []
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Evernote</h1>
        <NoteForm />
        <NoteList allNotes={this.state.allNotes} />
      </div>
    );
  }
}

export default App;
