import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
class createNote extends Component {
  state = {
    users: [],
    userSelect: "",
    title: "",
    description: "",
    date: new Date(),
    update: false,
    _id: "",
  };
  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/users");
    this.setState({
      users: res.data.usersDb,
      userSelect: res.data.usersDb[0]._id,
    });

    if (this.props.match.params.id) {
      const idEdit = this.props.match.params.id;
      const res = await axios.get(`http://localhost:4000/api/notes/${idEdit}`);

      this.setState({
        update: true,
        _id: idEdit,
        title: res.data.noteDb.title,
        description: res.data.noteDb.description,
        user: res.data.noteDb.user.username,
        date: new Date(res.data.noteDb.date),
      });
    }
  }
  handleInput = (e) => {
    // console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDate = (date) => {
    this.setState({ date });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const newNote = {
      title: this.state.title,
      description: this.state.description,
      user: this.state.userSelect,
      date: this.state.date,
    };

    if (this.state.update) {
      await axios.put(
        `http://localhost:4000/api/notes/${this.state._id}`,
        newNote
      );
    } else {
      await axios.post("http://localhost:4000/api/notes", newNote);
    }
    window.location.href = "/";
  };
  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h4>Create Note</h4>
          <div className="form-group">
            <select
              className="form-control"
              name="userSelect"
              onChange={this.handleInput}
            >
              {this.state.users.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.username}
                </option>
              ))}
            </select>
            <div className="form-group">
              <input
                type="text"
                name="title"
                className="form-control"
                placeholder="Title"
                value={this.state.title}
                onChange={this.handleInput}
              />
            </div>
            <div className="form-group">
              <textarea
                name="description"
                className="form-control"
                placeholder="Description"
                value={this.state.description}
                onChange={this.handleInput}
              ></textarea>
            </div>
            <div className="form-group">
              <DatePicker
                className="form-control"
                selected={this.state.date}
                onChange={this.handleDate}
              />
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <button className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default createNote;
