import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NotesList from "./NotesList";
export default function AddNote() {
  const [notes, setnotes] = useState([]);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const handleform = (e) => {
    e.preventDefault();
    console.log(title);
    setnotes((prevnotes) => {
      return [...prevnotes, { title: title, description: description }];
    });
    console.log(notes);
  };
  return (
    <div className="content">
      <form className="tiles" onSubmit={handleform}>
        <h3>Add Notes</h3>
        <p>Title</p>
        <input
          id="title"
          type="text"
          onChange={(e) => settitle(e.target.value)}
        />
        <p>Enter your Notes</p>
        <textarea
          id="description"
          type=""
          onChange={(e) => setdescription(e.target.value)}
        />
        <p>
          <button>Submit</button>
        </p>
      </form>
      <section>
        {notes.map((note) => (
          <NotesList title={note.title} description={note.description} />
        ))}
      </section>
    </div>
  );
}
