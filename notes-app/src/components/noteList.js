import React, { Component } from "react";
import Axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

class noteList extends Component {
  state = {
    notes: [],
  };

  async componentDidMount() {
    this.getNotes();
  }
  getNotes = async () => {
    const res = await Axios.get("http://localhost:4000/api/notes");
    this.setState({ notes: res.data.noteDb });
  };

  headleDelete = async (id) => {
    await Axios.delete(`http://localhost:4000/api/notes/${id}`);
    this.getNotes();
  };

  render() {
    return (
      <div className="row">
        {this.state.notes.map((note) => (
          <div className="col-md-4 p-2" key={note._id}>
            <div className="card">
              <div className="card-header d-flex justify-content-between">
                <h5>{note.title}</h5>
                <Link
                  to={"/note/edit/" + note._id}
                  className="btn btn-secondary"
                >
                  <i className="material-icons">Edit</i>
                </Link>
              </div>
              <div className="card-body">
                <p>{note.description}</p>
                <p> Autor: {note.user.username}</p>
                <p>{format(note.date)}</p>
              </div>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={() => this.headleDelete(note._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default noteList;
