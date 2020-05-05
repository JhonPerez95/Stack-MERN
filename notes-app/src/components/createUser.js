import React, { Component } from "react";
import axios from "axios";
class createUser extends Component {
  state = {
    users: [],
    username: "",
  };

  // Pedir datos al server
  async componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const res = await axios.get("http://localhost:4000/api/users");
    // console.log(res.data.usersDb);
    this.setState({
      users: res.data.usersDb,
    });
  };
  handleUser = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/users", {
      username: this.state.username,
    });
    this.getUsers();
    this.setState({ username: "" });
  };

  handlerDelete = async (id) => {
    // console.log(id);
    await axios.delete(`http://localhost:4000/api/users/${id}`);
    this.getUsers();
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className=" card card-body">
            <h3>Crearte New User</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  value={this.state.username}
                  onChange={this.handleUser}
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {this.state.users.map((user) => (
              <li
                className="list-group-item list-group-item-action"
                key={user._id}
                onDoubleClick={() => this.handlerDelete(user._id)}
              >
                {user.username}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default createUser;
