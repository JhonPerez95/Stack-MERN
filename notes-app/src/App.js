import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/navigation";
import NoteList from "./components/noteList";
import CreateUser from "./components/createUser";
import CreateNote from "./components/createNote";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Route path="/" exact component={NoteList} />
        <Route path="/note/edit/:id" component={CreateNote} />
        <Route path="/note/create" component={CreateNote} />
        <Route path="/user/create" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
