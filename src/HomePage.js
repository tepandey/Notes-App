import React from "react";
import NotesList from "./NotesList";

export default function HomePage() {
  return (
    <div>
      <h3 className="content">Welcome to Home Page</h3>
      <NotesList />
    </div>
  );
}
