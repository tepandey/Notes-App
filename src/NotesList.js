import React from "react";
import "./App.css";

export default function NotesList(props) {
  const title = props.title;
  const description = props.description;
  return (
    <div className="tiles">
      <p>
        {title}
        <div className="description">{description}</div>
      </p>
    </div>
  );
}
