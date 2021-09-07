import "./App.css";
import Nav from "./Nav";
import NotesList from "./NotesList";
import AddNote from "./AddNote";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/notelist" component={NotesList} />
          <Route path="/addnote" component={AddNote} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
