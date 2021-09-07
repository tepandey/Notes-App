import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <h3>Notes App</h3>
      </Link>
      <ul className="navlinks">
        <Link to="/notelist">
          <li>Notes List</li>
        </Link>
        <Link to="/addnote">
          <li>Add Notes</li>
        </Link>
      </ul>
    </nav>
  );
}
