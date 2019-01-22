import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class LogInPage extends Component {
  state = {
    users: [{}]
  }

  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers = () => {
    axios.get('/api/users')
    .then((res) => {
      this.setState({ users: res.data })
    })
  }

  render() {
    return (
      <div>
        <h1>Hello From Login Page!</h1>
        {this.state.users.map((users, i) => (
          <div key={i}>
            <div>
              <Link to={`/users/${users._id}`}><p>{users.username}</p></Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default LogInPage;