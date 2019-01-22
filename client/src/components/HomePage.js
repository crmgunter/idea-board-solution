import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Hello From Home Page!</h1>
        <Link to="/login">Go to login</Link>
      </div>
    );
  }
}

export default HomePage;