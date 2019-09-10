import React from "react";
import NoteItem from "./NoteItem";

// Import props to function components
const NoteList = props => {
  console.log("notelist", props);

  const renderNotes = () => {
    // Have to give a key when iterating to create elements
    return props.allNotes.map(note => {
      <NoteItem note={note} key={note.id} />;
    });
  };

  return (
    <div>
      <ul>{renderNotes()}</ul>
    </div>
  );
};

export default NoteList;

// [...prevState.allNotes, newNote]
